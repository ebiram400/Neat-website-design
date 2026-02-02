import { ProjectFieldsData } from "./ProjectFields.schema";
import Field from "../Field";
import { useFormContext } from "react-hook-form";

type Props = {
    onSelect:(setValue:1|2|3)=>void
}

export default function StepOne({onSelect}:Props) {

    const {
        register,
        trigger,
        formState: { errors },
    } = useFormContext<ProjectFieldsData>()
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-4">
        <h2 className="text-2xl font-bold">ایجاد پروژه جدید</h2>
        <p className="text-center text-gray-600">
            در این مرحله، اطلاعات اولیه پروژه را وارد کنید. پس از تکمیل، می‌توانید مراحل بعدی را تنظیم کنید.
        </p>
        <Field label="نام پروژه" error={errors.projectName?.message}>
            <input className="focus:outline-0 text-center" {...register("projectName")} />
        </Field>

        {/* employer */}
        <Field label="نام کارفرما" error={errors.employer?.message}>
            <input className="focus:outline-0 text-center" {...register("employer")} />
        </Field>

        {/* phone */}
        <Field label="شماره تماس" error={errors.phone?.message}>
            <input type="tel" className="focus:outline-0 text-center" {...register("phone")} />
        </Field>

        {/* password */}
        <Field label="رمز عبور">
            <input type="password" className="focus:outline-0 text-center" {...register("password")} />
        </Field>

        <Field label="متراژ تقریبی" error={errors.area?.message}>
            <input type="number" className="focus:outline-0 text-center" {...register("area", { valueAsNumber: true })}
            />
        </Field>

        <button onClick={async () => await trigger(["projectName","employer","phone","area"]) && onSelect(2)}>بعدی</button>

    </div>
  );
}