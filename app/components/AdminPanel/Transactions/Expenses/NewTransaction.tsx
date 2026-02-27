"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
    EXPENSES_PAYMENTS,
    EXPENSES_TYPES,
    ExpensesFields,
    ExpensesFieldsPayload,
    ExpensesFieldsData,
} from "./ExpensesFields.schema";
import FieldTransaction from "../FieldTransaction";
import BackgroundForm from "@/public/images/icon/BackgroundForm";
import DatePicker, { DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import useMoney from "@/app/hooks/useMoney";

type props = {
    pojectId: string;
    transactionId: string | string[] | undefined;
};

export default function NewTransaction({ pojectId, transactionId }:props ){

    const types = EXPENSES_TYPES;
    const payMethods = EXPENSES_PAYMENTS;
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

    const toMoney = useMoney();
    const [isAmountFocused, setIsAmountFocused] = useState(false);
    const [crackedButton, setCrackedButton] = useState<"cancel" | "save" | null>(null);

    const {
            register,
            control,
            reset,
            formState: { errors },
            handleSubmit
        } = useForm<ExpensesFieldsData,unknown,  ExpensesFieldsPayload>({
            resolver: zodResolver(ExpensesFields),
            defaultValues: {
                description:"",
                type: undefined,
                level: "",
                amount: "",
                payment:undefined,
                date: "",
            }
        });

    const normalizeAmountInput = (value: string) => value.replace(/[^\d.]/g, "");

    const getAmountDisplayValue = (rawValue: string, focused: boolean) => {
        if (focused) return rawValue;
        if (!rawValue.trim()) return "";

        const parsedValue = Number(rawValue);
        if (Number.isNaN(parsedValue)) return rawValue;

        return toMoney(parsedValue * 1000);
    };

    const triggerCrack = (button: "cancel" | "save") => {
        setCrackedButton(button);
        setTimeout(() => {
            setCrackedButton((current) => (current === button ? null : current));
        }, 650);
    };

    const onSubmit = (formData: ExpensesFieldsPayload) => {
        // TODO: connect submit payload to API.
        console.log("Buy material payload:", formData);
    };

    const onCancel = () => {
        triggerCrack("cancel");
        reset();
        setIsAmountFocused(false);
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
        <div className="relative h-screen w-full overflow-hidden overflow-y-auto font-['lalezar']">
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
                    <div className="text-center">{`> ثبت هزینه`}</div>
                </div>
            </div>

            {/* form */}
            <div className="w-11/12 mx-auto my-[4vw]" >
                <div
                className="rounded-3xl p-5
                    backdrop-blur-[2px]
                    border border-white/5
                    shadow-[0_15px_50px_rgba(0,0,0,0.25)] backdrop-saturate-150
                    relative overflow-hidden"
                >
                    <div className="absolute inset-0 rounded-3xl pointer-events-none
                                    bg-linear-to-b from-white/20 via-white/10 to-transparent" />
                    <div className="absolute inset-0 rounded-3xl pointer-events-none
                                    shadow-[inset_0_1px_1px_rgba(255,255,255,0.8),inset_0_-1px_2px_rgba(0,0,0,0.1)]" />

                    <div className="relative z-10 text-right">
                        <form className="grid md:grid-cols-2 gap-4" onSubmit={handleSubmit(onSubmit)}>
                            <FieldTransaction label="شرح" matchId="description" error={errors.description?.message}>
                                <input type="text" id="description" {...register("description")} className="block w-full px-0 py-1 text-center text-neutral-800 text-sm bg-transparent border-0 appearance-none focus:outline-none focus:ring-0 peer"/>
                            </FieldTransaction>
                            {/* type */}
                            <div>
                                <ul className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 justify-around items-center gap-2">
                                    { types.map((item)=>(
                                        <li key={item} className="rounded-3xl w-24 p-2
                                        bg-linear-to-b from-white/60 via-white/5 to-transparent
                                        border border-white/5
                                        shadow-[0_15px_50px_rgba(0,0,0,0.25)] 
                                        relative overflow-hidden cursor-pointer">

                                            <input type="radio" id={item} value={item} className="sr-only peer" {...register("type")} />
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
                                {errors.type?.message && <p className="text-[10px] font-[Vazir] text-rose-500 mt-1">{errors.type?.message}</p>}
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
                                        bg-linear-to-b from-white/60 via-white/5 to-transparent
                                        border border-white/5
                                        shadow-[0_15px_50px_rgba(0,0,0,0.25)] 
                                        relative overflow-hidden cursor-pointer">
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
                            {/* amount */}
                            <FieldTransaction label="قیمت(تومان)" matchId="amount" error={errors.amount?.message}>
                                <Controller
                                    name="amount"
                                    control={control}
                                    render={({ field }) => (
                                        <input
                                            type="text"
                                            id="amount"
                                            inputMode="decimal"
                                            value={getAmountDisplayValue(field.value ?? "", isAmountFocused)}
                                            onFocus={() => {
                                                setIsAmountFocused(true);
                                            }}
                                            onBlur={(event) => {
                                                setIsAmountFocused(false);
                                                field.onBlur();
                                                field.onChange(normalizeAmountInput(event.target.value));
                                            }}
                                            onChange={(event) => {
                                                field.onChange(normalizeAmountInput(event.target.value));
                                            }}
                                            className="block w-full px-0 py-1 text-center text-neutral-800 text-sm bg-transparent border-0 appearance-none focus:outline-none focus:ring-0 peer"
                                        />
                                    )}
                                />
                            </FieldTransaction>
                            {/* payment */}
                            <div>
                                <ul className="flex justify-around items-center ">
                                    { payMethods.map((item)=>(
                                        <li key={item} className="rounded-3xl w-16 p-2
                                        bg-linear-to-b from-white/60 via-white/5 to-transparent
                                        border border-white/5
                                        shadow-[0_15px_50px_rgba(0,0,0,0.25)] 
                                        relative overflow-hidden cursor-pointer">

                                            <input type="radio" id={item} value={item} className="sr-only peer" {...register("payment")} />
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
                                {errors.payment?.message && <p className="text-[10px] font-[Vazir] text-rose-500 mt-1">{errors.payment?.message}</p>}
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
            {/* <div className="absolute inset-0 rounded-3xl pointer-events-none" style={{
                backdropFilter: "blur(2px) brightness(1.1) ",
                WebkitBackdropFilter: "blur(2px) brightness(1.1)",
                filter: "url(#displacementFilter) drop-shadow(-8px -10px 46px #0000005f)",
            }} />
            <svg className="pointer-events-none absolute h-0 w-0">
                <filter id="displacementFilter">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="0.35" result="softened" />
                    <feTurbulence type="turbulence" baseFrequency={0.01} numOctaves={2} result="turbulence" />
                    <feDisplacementMap in="softened" in2="turbulence" scale={14} xChannelSelector="R" yChannelSelector="G" />
                </filter>
            </svg> */}

        </div>
    )
}
