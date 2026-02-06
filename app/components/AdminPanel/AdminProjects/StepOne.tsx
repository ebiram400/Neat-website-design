import { ProjectFieldsData } from "./ProjectFields.schema";
import Field from "../Field";
import { useFormContext } from "react-hook-form";

type Props = {
    onSelect:(setValue:1|2|3)=>void,
    onSelectShow:(setValue:boolean)=>void
}

export default function StepOne({onSelect, onSelectShow}:Props) {

    const {
        register,
        trigger,
        formState: { errors },
    } = useFormContext<ProjectFieldsData>()
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
            <h2 className="text-3xl font-bold text-gray-900">ایجاد پروژه جدید</h2>
            <p className="mt-2 text-sm text-gray-600">
                در این مرحله، اطلاعات اولیه پروژه را وارد کنید. پس از تکمیل، می‌توانید مراحل بعدی را تنظیم کنید.
            </p>
        </div>
        <div className="w-full max-w-2xl flex flex-col gap-4">
            <Field label="نام پروژه" error={errors.projectName?.message}>
                <input className="w-full bg-transparent text-sm text-gray-900 outline-none" {...register("projectName")} />
            </Field>

            {/* employer */}
            <Field label="نام کارفرما" error={errors.employer?.message}>
                <input className="w-full bg-transparent text-sm text-gray-900 outline-none" {...register("employer")} />
            </Field>

            {/* phone */}
            <Field label="شماره تماس" error={errors.phone?.message}>
                <input type="tel" className="w-full bg-transparent text-sm text-gray-900 outline-none" {...register("phone")} />
            </Field>

            {/* password */}
            <Field label="رمز عبور">
                <input type="password" className="w-full bg-transparent text-sm text-gray-900 outline-none" {...register("password")} />
            </Field>

            <Field label="متراژ تقریبی" error={errors.area?.message}>
                <input type="number" className="w-full bg-transparent text-sm text-gray-900 outline-none" {...register("area", { valueAsNumber: true })}
                />
            </Field>
        </div>

        <div className="w-full max-w-2xl flex justify-end">
            <button
                type="button"
                onClick={async () => await trigger(["projectName","employer","phone","area"]) && onSelect(2)}
                className="rounded-xl bg-gray-900 px-6 py-2 text-sm font-medium text-white transition hover:bg-gray-800"
            >
                بعدی
            </button>
        </div>

    </div>
  );
}
