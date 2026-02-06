import Field from "../Field";
import { ProjectFieldsData } from "./ProjectFields.schema";
import { useFormContext } from "react-hook-form";

type Props = {
    onSelect:(setValue:1|2|3)=>void,
    onSelectShow:(setValue:boolean)=>void,
    project_id: number | null
}

export default function StepThree({onSelect ,onSelectShow, project_id}:Props) {

    const {
        register,
        formState: { errors },
        watch,
        handleSubmit
    } = useFormContext<ProjectFieldsData>();

    const Submited = (data: ProjectFieldsData) => {
        console.log("payload:", data, project_id);
        // PostAPI
        // mutation.mutate({ project_id, ...data })
        onSelectShow(false);
    }
    
  return (
    <div className="relative w-full flex flex-col items-center justify-center gap-6">
        <button
            type="button"
            onClick={() => onSelectShow(false)}
            className="absolute right-0 top-0 inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-lg text-gray-500 transition hover:border-gray-400 hover:text-gray-900"
            aria-label="بستن"
        >
            ×
        </button>
        <div className="w-full max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-gray-900">حق الزحمه مهندسی</h2>
            <p className="mt-2 text-sm text-gray-600">
                نوع محاسبه حق‌الزحمه را مشخص کنید و مقدار آن را وارد نمایید.
            </p>
        </div>

        <div className="w-full max-w-2xl flex flex-col gap-4">
            <Field label="نوع حق الزحمه مهندسی" error={errors.contractorFeeType?.message}>
                <select {...register("contractorFeeType")} className="w-full bg-transparent text-sm text-gray-900 outline-none">
                    <option value="درصدی">درصدی</option>
                    <option value="ثابت">ثابت</option>
                </select>
            </Field>

            {watch("contractorFeeType") === "درصدی" && (
                <Field label="درصد حق الزحمه مهندسی" error={errors.contractorPercentage?.message}>
                    <input
                        type="number"
                        className="w-full bg-transparent text-sm text-gray-900 outline-none"
                        {...register("contractorPercentage", { valueAsNumber: true })}
                    />
                </Field>
            )}

            {watch("contractorFeeType") === "ثابت" && (
                <Field label="مبلغ ثابت حق الزحمه مهندسی" error={errors.contractorFixedFee?.message}>
                    <input
                        type="number"
                        className="w-full bg-transparent text-sm text-gray-900 outline-none"
                        {...register("contractorFixedFee", { valueAsNumber: true })}
                    />
                </Field>
            )}
        </div>

        <div className="w-full max-w-2xl flex justify-between">
            <button
                type="button"
                onClick={() => onSelect(2)}
                className="rounded-xl border border-gray-200 px-6 py-2 text-sm text-gray-700 transition hover:border-gray-400 hover:text-gray-900"
            >
                قبلی
            </button>
            <button
                type="button"
                onClick={() => handleSubmit(Submited)()}
                className="rounded-xl bg-gray-900 px-6 py-2 text-sm font-medium text-white transition hover:bg-gray-800"
            >
                ذخیره
            </button>
        </div>

    </div>
  );
}
