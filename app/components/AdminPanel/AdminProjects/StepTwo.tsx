import { ProjectFieldsData } from "./ProjectFields.schema";
import Field from "../Field";
import { useFormContext } from "react-hook-form";

type Props = {
    onSelect:(setValue:1|2|3)=>void
}

export default function StepTwo({onSelect}:Props) {

    const {
        register,
        trigger,
        formState: { errors },
    } = useFormContext<ProjectFieldsData>();

    const suggestions = [
        "گودبرداری",
        "بتن‌ریزی",
        "اسکلت",
        "بازسازی داخلی",
        "نما",
        "تأسیسات",
    ];

    
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-4">
        <h2 className="text-2xl font-bold">مراحل پروژه</h2>

        <div className="flex gap-2 flex-wrap">
            {suggestions.map((s) => (
                <button
                key={s}
                onClick={() =>
                    append({ title: s, estimatedCost: 0, estimatedTime: 0 })
                }
                className="px-3 py-1 rounded-full border"
                >
                {s}
                </button>
            ))}
        </div>

        {fields.map((field, index) => (
            <div key={field.id} className="flex gap-2 items-center">
                <span className="cursor-grab">☰</span>
                <Field label="نام پروژه" error={errors.projectName?.message}>
                    <input className="focus:outline-0 text-center" {...register(`stages.${index}.title`)} />
                </Field>
                <Field label="نام پروژه" error={errors.projectName?.message}>
                    <input type="number" className="focus:outline-0 text-center" {...register(`stages.${index}.estimatedTime`, { valueAsNumber: true })} />
                </Field>
                <Field label="نام پروژه" error={errors.projectName?.message}>
                    <input type="number" className="focus:outline-0 text-center" {...register(`stages.${index}.estimatedCost`, { valueAsNumber: true })} />
                </Field>
                <button onClick={() => remove(index)}>✕</button>
            </div>
        ))}

        <button onClick={() => append({ title: "", estimatedCost: 0, estimatedTime: 0 })}>
            + افزودن مرحله
        </button>

        <button onClick={() =>onSelect(1)}>قبلی</button>
        <button onClick={async () => await trigger("stages") && onSelect(3)}>بعدی</button>

    </div>
  );
}