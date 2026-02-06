import { ProjectFieldsData } from "./ProjectFields.schema";
import Field from "../Field";
import { useFieldArray, useFormContext } from "react-hook-form";
import { GripVertical, X } from "lucide-react";


type Props = {
    onSelect:(setValue:1|2|3)=>void,
    onSelectShow:(setValue:boolean)=>void
}

export default function StepTwo({onSelect, onSelectShow}:Props) {

    const {
        control,
        register,
        trigger,
        formState: { errors },
    } = useFormContext<ProjectFieldsData>();

    const { fields, append, remove, move } =useFieldArray({
        control,
        name: "stages"
    })

    const suggestions = [
        "گودبرداری",
        "بتن‌ریزی",
        "اسکلت",
        "بازسازی داخلی",
        "نما",
        "تأسیسات",
    ];

    
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
        <div className="w-full max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-gray-900">مراحل پروژه</h2>
            <p className="mt-2 text-sm text-gray-600">
                مرحله‌های اصلی پروژه را تعریف کنید و در صورت نیاز ترتیب آن‌ها را تغییر دهید.
            </p>
        </div>

        <div className="flex gap-2 flex-wrap justify-center">
            {suggestions.map((s) => (
                <button
                key={s}
                type="button"
                onClick={() =>
                    append({ title: s, estimatedCost: 0, estimatedTime: 0 })
                }
                className="rounded-full border border-gray-200 bg-white px-3 py-1 text-xs text-gray-600 transition hover:border-gray-400 hover:text-gray-900"
                >
                {s}
                </button>
            ))}
        </div>

        {/* Stages */}
        <div className="w-full max-w-4xl flex flex-col gap-3">
            {fields.map((field, index) => (
                <div
                    key={field.id}
                    className="flex flex-col gap-4 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm sm:flex-row sm:items-center"
                >
                    {/* Drag handle */}
                    <button
                        type="button"
                        className="cursor-grab text-neutral-400 hover:text-gray-900"
                        onMouseDown={() => {
                            if (index > 0) move(index, index - 1);
                        }}
                    >
                    <GripVertical />
                    </button>

                    {/* 3 fields in one row */}
                    <div className="grid grid-cols-1 gap-3 flex-1 sm:grid-cols-3">
                        <Field label="عنوان مرحله" error={errors.stages?.[index]?.title?.message}>
                            <input
                            {...register(`stages.${index}.title`)}
                            className="w-full bg-transparent text-sm text-gray-900 outline-none"
                            />
                        </Field>

                        <Field label="مدت (روز)" error={errors.stages?.[index]?.estimatedTime?.message}>
                            <input
                            type="number"
                            {...register(`stages.${index}.estimatedTime`, {
                                valueAsNumber: true,
                            })}
                            className="w-full bg-transparent text-sm text-gray-900 outline-none text-center"
                            />
                        </Field>

                        <Field label="هزینه (تومان)" error={errors.stages?.[index]?.estimatedCost?.message} >
                            <input
                            type="number"
                            {...register(`stages.${index}.estimatedCost`, {
                                valueAsNumber: true,
                            })}
                            className="w-full bg-transparent text-sm text-gray-900 outline-none text-center"
                            />
                        </Field>
                    </div>

                    {/* Remove */}
                    <button
                        type="button"
                        onClick={() => remove(index)}
                        className="h-9 w-9 flex items-center justify-center rounded-full bg-red-50 text-red-600 transition hover:bg-red-100"
                        >
                        <X size={18} />
                    </button>
                </div>
            ))}
        </div>

        {/* Actions */}
        <div className="w-full max-w-4xl flex justify-between mt-6">
            <button
                type="button"
                onClick={() => onSelect(1)}
                className="rounded-xl border border-gray-200 px-6 py-2 text-sm text-gray-700 transition hover:border-gray-400 hover:text-gray-900"
                >
                قبلی
            </button>

            <button
                type="button"
                onClick={async () =>
                    (await trigger(["stages"])) && onSelect(3)
                }
                className="rounded-xl bg-gray-900 px-6 py-2 text-sm font-medium text-white transition hover:bg-gray-800"
                >
                بعدی
            </button>
        </div>

    </div>
  );
}
