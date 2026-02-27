"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Controller, useForm, useWatch } from "react-hook-form";

import FieldTransaction from "../FieldTransaction";
import BackgroundForm from "@/public/images/icon/BackgroundForm";
import DatePicker, { DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import {
    CONSUMPTION_MATERIAL_UNITS,
    ConsumptionMaterialUnit,
    ConsumptionMaterialData,
    ConsumptionMaterialFields,
    ConsumptionMaterialPayload,
} from "./ConsumptionMaterialsFields.schema";

type props = {
    pojectId: string;
    transactionId: string | string[] | undefined;
};

export default function NewTransaction({ pojectId, transactionId }:props ){
    const units = CONSUMPTION_MATERIAL_UNITS;
    const levels = [
        "گودبرداری",
        "فوندانسیون",
        "اسکلت",
        "دیوارچینی",
        "تاسیسات",
        "سقف کاذب",
        "دیوارپوش و کف پوش",
        "نازک کاری نهایی",
        "تاسیسات نهایی",
    ] as const;

    const CONSUMPTION_MATERIAL_TYPES = ["آهن","گچ","بتن"] as const;

    type ConsumptionMaterialType = (typeof CONSUMPTION_MATERIAL_TYPES)[number];
    
    const CONSUMPTION_MATERIAL_UNIT_BY_TYPE: 
    Record< string|ConsumptionMaterialType, ConsumptionMaterialUnit > = {
        "آهن": "m",
        "گچ": "کیسه",
        "بتن": "m3",
    };

    const [crackedButton, setCrackedButton] = useState<"cancel" | "save" | null>(null);

    const {
            register,
            control,
            getValues,
            setValue,
            reset,
            formState: { errors },
            handleSubmit
        } = useForm<ConsumptionMaterialData,unknown,  ConsumptionMaterialPayload>({
            resolver: zodResolver(ConsumptionMaterialFields),
            defaultValues: {
                type: undefined,
                quantity: undefined,
                unit: undefined,
                level: undefined,
                date: "",
            }
        });

    const isConsumptionMaterialType = (value: string): value is ConsumptionMaterialType =>
        value in CONSUMPTION_MATERIAL_UNIT_BY_TYPE;

    const selectedType = useWatch({ control, name: "type" });
    
    const lockedUnit = selectedType ? CONSUMPTION_MATERIAL_UNIT_BY_TYPE[selectedType] : undefined;

    const increaseQuantity = () => {
        const current = getValues("quantity") ?? 1;
        setValue("quantity", current + 1, { shouldDirty: true, shouldValidate: true });
    };

    const decreaseQuantity = () => {
        const current = getValues("quantity") ?? 1;
        const nextValue = Math.max(1, current - 1);
        setValue("quantity", nextValue, { shouldDirty: true, shouldValidate: true });
    };

    const triggerCrack = (button: "cancel" | "save") => {
        setCrackedButton(button);
        setTimeout(() => {
            setCrackedButton((current) => (current === button ? null : current));
        }, 650);
    };

    const onSubmit = (formData: ConsumptionMaterialPayload) => {
        // TODO: connect submit payload to API.
        console.log("Buy material payload:", formData);
    };

    const onCancel = () => {
        triggerCrack("cancel");
        reset();
    };

    const glassActionBaseClass = `relative isolate overflow-hidden rounded-full border px-4 py-2 text-sm font-['Vazir']
        text-neutral-800 backdrop-blur-md transition duration-200 ease-out
        bg-gradient-to-b from-white/30 via-white/15 to-white/5
        shadow-[0_16px_35px_rgba(0,0,0,0.18),inset_0_1px_1px_rgba(255,255,255,0.9),inset_0_-1px_2px_rgba(0,0,0,0.14)]
        hover:shadow-[0_18px_38px_rgba(0,0,0,0.22),inset_0_1px_1px_rgba(255,255,255,1),inset_0_-1px_2px_rgba(0,0,0,0.14)]
        active:scale-[0.975]
        before:pointer-events-none before:absolute before:inset-y-[-45%] before:left-[-24%] before:w-[42%] before:rotate-[13deg]
        before:bg-gradient-to-r before:from-transparent before:via-white/85 before:to-transparent
        before:translate-x-[-170%] hover:before:translate-x-[360%] focus-visible:before:translate-x-[360%]
        before:transition-transform before:duration-900`;

    const crackLayerClass = `after:pointer-events-none after:absolute after:inset-0 after:rounded-[inherit]
        after:bg-[linear-gradient(112deg,transparent_14%,rgba(255,255,255,0.75)_14.2%,transparent_15.2%),linear-gradient(156deg,transparent_48%,rgba(255,255,255,0.64)_48.2%,transparent_49.2%),linear-gradient(32deg,transparent_30%,rgba(255,255,255,0.68)_30.2%,transparent_31.2%),linear-gradient(76deg,transparent_64%,rgba(255,255,255,0.56)_64.2%,transparent_65.2%)]
        after:mix-blend-screen after:transition after:duration-500`;

    return(
        <div className="relative h-screen w-full overflow-hidden font-['lalezar']">
            <BackgroundForm />
            <div className="absolute -top-40 -left-40 w-100 h-100 bg-purple-400/40 blur-3xl rounded-full " />
            <div className="absolute -bottom-40 -right-40 w-100 h-100 bg-pink-500/40 blur-3xl rounded-full" />

            {/* breadcrumb */}
            <div className="w-11/12 mx-auto my-[4vw] ">
                <div
                className="rounded-3xl p-5
                    bg-white/5 backdrop-blur-[2px]
                    border border-white/5
                    shadow-[0_15px_50px_rgba(0,0,0,0.25)]
                    relative overflow-hidden backdrop-saturate-150"
                >
                    <div className="absolute inset-0 rounded-3xl pointer-events-none
                                    bg-linear-to-b from-white/20 via-white/10 to-transparent" />
                    <div className="absolute inset-0 rounded-3xl pointer-events-none
                                    shadow-[inset_0_1px_1px_rgba(255,255,255,0.8),inset_0_-1px_2px_rgba(0,0,0,0.1)]" />
                    <div className="text-center">{`> ثبت مصرف مصالح`}</div>
                </div>
            </div>

            {/* form */}
            <div className="w-11/12 mx-auto my-[4vw] ">
                <div
                className="rounded-3xl p-5
                    bg-white/5 backdrop-blur-[2px]
                    border border-white/5
                    shadow-[0_15px_50px_rgba(0,0,0,0.25)]
                    relative overflow-hidden backdrop-saturate-150"
                >
                    <div className="absolute inset-0 rounded-3xl pointer-events-none
                                    bg-linear-to-b from-white/20 via-white/10 to-transparent" />
                    <div className="absolute inset-0 rounded-3xl pointer-events-none
                                    shadow-[inset_0_1px_1px_rgba(255,255,255,0.8),inset_0_-1px_2px_rgba(0,0,0,0.1)]" />

                    <div className="relative z-10 text-right">
                        <form className="grid md:grid-cols-2 gap-4" onSubmit={handleSubmit(onSubmit)}>
                            {/* type */}
                            <FieldTransaction label="نوع مصالح" matchId="type" error={errors.type?.message}>
                                <select
                                    id="type"
                                    defaultValue=""
                                    {...register("type", {
                                        onChange: (event) => {
                                            const nextType = event.target.value;
                                            if (isConsumptionMaterialType(nextType)) {
                                                setValue("unit", CONSUMPTION_MATERIAL_UNIT_BY_TYPE[nextType], {
                                                    shouldDirty: true,
                                                    shouldValidate: true,
                                                });
                                            }
                                        },
                                    })}
                                    className="block w-full px-0 py-1 text-center text-neutral-800 text-sm bg-transparent border-0 appearance-none focus:outline-none focus:ring-0 peer"
                                >
                                    <option value="" disabled></option>
                                    {CONSUMPTION_MATERIAL_TYPES.map((materialType) => (
                                        <option key={materialType} value={materialType}>
                                            {materialType}
                                        </option>
                                    ))}
                                </select>
                            </FieldTransaction>
                            {/* quatity */}
                            <div className="relative mx-auto flex items-center max-w-32 md:col-start-1">
                                <div
                                    className={`rounded-3xl p-4
                                    bg-white/5 backdrop-blur-[2px]
                                    border border-white/5
                                    shadow-[0_15px_50px_rgba(0,0,0,0.25)]
                                    relative overflow-hidden backdrop-saturate-150`}
                                >
                                    <div className={`absolute inset-0 rounded-3xl pointer-events-none
                                                    bg-linear-to-b from-white/20 via-white/10 to-transparent`} />
                                    <div className="absolute inset-0 rounded-3xl pointer-events-none
                                                    shadow-[inset_0_1px_1px_rgba(255,255,255,0.8),inset_0_-1px_2px_rgba(0,0,0,0.1)]" />

                                    <button
                                        type="button"
                                        onClick={decreaseQuantity}
                                        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 `}
                                    >
                                        <svg className="w-4 h-4 text-neutral-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14"/></svg>
                                    </button>
                                </div>
                                <input
                                    type="number"
                                    id="quantity-input"
                                    min={1}
                                    className="text-center w-full no-spinner text-neutral-900"
                                    defaultValue={1}
                                    {...register("quantity", { valueAsNumber: true })}
                                />
                                <div
                                    className={`rounded-3xl p-4
                                    bg-white/5 backdrop-blur-[2px]
                                    border border-white/5
                                    shadow-[0_15px_50px_rgba(0,0,0,0.25)]
                                    relative overflow-hidden backdrop-saturate-150`}
                                >
                                    <div className={`absolute inset-0 rounded-3xl pointer-events-none
                                                    bg-linear-to-b from-white/20 via-white/10 to-transparent`} />
                                    <div className="absolute inset-0 rounded-3xl pointer-events-none
                                                    shadow-[inset_0_1px_1px_rgba(255,255,255,0.8),inset_0_-1px_2px_rgba(0,0,0,0.1)]" />
                                    <button
                                        type="button"
                                        onClick={increaseQuantity}
                                        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 `}
                                    >
                                        <svg className="w-4 h-4 text-neutral-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7 7V5"/></svg>
                                    </button>
                                </div>
                                {errors.quantity?.message && <p className="text-xs text-red-500 mt-1">{errors.quantity?.message}</p>}
                            </div>
                            {/* unit */}
                            <div>
                                <ul className="flex justify-around items-center ">
                                    { units.map((item)=>(
                                        <li key={item} className={`rounded-3xl w-14 p-2
                                        bg-white/5 backdrop-blur-[2px]
                                        border border-white/5
                                        shadow-[0_15px_50px_rgba(0,0,0,0.25)]
                                        relative overflow-hidden backdrop-saturate-150 ${lockedUnit && item !== lockedUnit ? "opacity-40 cursor-not-allowed" : "cursor-pointer"}`}>

                                            <input
                                                type="radio"
                                                id={item}
                                                value={item}
                                                disabled={Boolean(lockedUnit && item !== lockedUnit)}
                                                className="sr-only peer"
                                                {...register("unit")}
                                            />
                                            <div className={`absolute inset-0 rounded-3xl pointer-events-none transition-opacity duration-200
                                                            bg-linear-to-b from-white/20 via-white/10 to-transparent peer-checked:opacity-75 peer-focus-visible:opacity-75`} />
                                            <div className="absolute inset-0 rounded-3xl pointer-events-none transition-shadow duration-200
                                                            shadow-[inset_0_1px_1px_rgba(255,255,255,0.8),inset_0_-1px_2px_rgba(0,0,0,0.1)]
                                                            peer-checked:shadow-[inset_0_2px_5px_rgba(0,0,0,0.35),inset_0_-1px_1px_rgba(255,255,255,0.22)]
                                                            peer-focus-visible:shadow-[inset_0_2px_5px_rgba(0,0,0,0.35),inset_0_-1px_1px_rgba(255,255,255,0.22)]" />

                                            <label htmlFor={item} className={`relative z-10 block text-center text-xs text-neutral-900 peer-checked:text-neutral-500 ${lockedUnit && item !== lockedUnit ? "cursor-not-allowed" : "cursor-pointer"}`}>
                                                {item}
                                            </label>
                                        </li>
                                    )) }
                                </ul>
                                {errors.unit?.message && <p className="text-[10px] font-[Vazir] text-rose-500 mt-1">{errors.unit?.message}</p>}
                            </div>
                            {/* date */}
                            <FieldTransaction label="تاریخ" matchId="date" error={errors.date?.message}>
                                <Controller
                                    name="date"
                                    control={control}
                                    render={({ field }) => (
                                        <DatePicker
                                            id="date"
                                            calendar={persian}
                                            locale={persian_fa}
                                            format="YYYY/MM/DD"
                                            calendarPosition="bottom-right"
                                            value={field.value || ""}
                                            onChange={(value) => {
                                                if (!value) {
                                                    field.onChange("");
                                                    return;
                                                }
                                                field.onChange((value as DateObject).format("YYYY/MM/DD"));
                                            }}
                                            portal
                                            zIndex={100}
                                            inputClass="block w-full px-0 py-1 text-center text-neutral-800 text-sm bg-transparent border-0 appearance-none focus:outline-none focus:ring-0 peer"
                                            containerClassName="w-full"
                                        />
                                    )}
                                />
                            </FieldTransaction>
                            {/* level */}
                            <div>
                                <ul className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 justify-around items-center gap-2 ">
                                    { levels.map((item)=>(
                                        <li key={item} className="rounded-3xl w-24 p-2
                                        bg-white/5 backdrop-blur-[2px]
                                        border border-white/5
                                        shadow-[0_15px_50px_rgba(0,0,0,0.25)]
                                        relative overflow-hidden backdrop-saturate-150 cursor-pointer">

                                            <input type="radio" id={item} value={item} className="sr-only peer" {...register("level")} />
                                            <div className={`absolute inset-0 rounded-3xl pointer-events-none transition-opacity duration-200
                                                            bg-linear-to-b from-white/20 via-white/10 to-transparent peer-checked:opacity-75 peer-focus-visible:opacity-75`} />
                                            <div className="absolute inset-0 rounded-3xl pointer-events-none transition-shadow duration-200
                                                            shadow-[inset_0_1px_1px_rgba(255,255,255,0.8),inset_0_-1px_2px_rgba(0,0,0,0.1)]
                                                            peer-checked:shadow-[inset_0_2px_5px_rgba(0,0,0,0.35),inset_0_-1px_1px_rgba(255,255,255,0.22)]
                                                            peer-focus-visible:shadow-[inset_0_2px_5px_rgba(0,0,0,0.35),inset_0_-1px_1px_rgba(255,255,255,0.22)]" />

                                            <label htmlFor={item} className="relative z-10 block text-center text-xs text-neutral-900 peer-checked:text-neutral-500">
                                                {item}
                                            </label>
                                        </li>
                                    )) }
                                </ul>
                                {errors.level?.message && <p className="text-[10px] font-[Vazir] text-rose-500 mt-1">{errors.level?.message}</p>}
                            </div>
                            {/* save / cancel */}
                            <div className="md:col-span-2 w-11/12 mx-auto mt-6 grid grid-cols-2 gap-3">
                                <button
                                    type="submit"
                                    onClick={() => triggerCrack("save")}
                                    className={`${glassActionBaseClass} border-green-600/55 ${crackLayerClass} ${
                                        crackedButton === "save"
                                            ? "after:opacity-100 after:scale-100"
                                            : "after:opacity-0 after:scale-95"
                                    }`}
                                >
                                    <span className="relative z-10 font-bold font-['lalezar'] text-green-600/55 md:text-lg md:text-green-600/70">ذخیره</span>
                                </button>

                                <button
                                    type="button"
                                    onClick={onCancel}
                                    className={`${glassActionBaseClass} border-rose-500/30 ${crackLayerClass} ${
                                        crackedButton === "cancel"
                                            ? "after:opacity-100 after:scale-100"
                                            : "after:opacity-0 after:scale-95"
                                    }`}
                                >
                                    <span className="relative z-10 font-bold font-['lalezar'] text-rose-500/30 md:text-lg md:text-rose-500/55">انصراف</span>
                                </button>
                                
                            </div>
                        </form>
                    </div>
                </div>
            </div>



        </div>
    )
}
