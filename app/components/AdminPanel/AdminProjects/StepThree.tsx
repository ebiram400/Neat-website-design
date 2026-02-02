import { ProjectFieldsData } from "./ProjectFields.schema";
import { useFormContext } from "react-hook-form";

type Props = {
    onSelect:(setValue:1|2|3)=>void,
    onSelectShow:(setValue:boolean)=>void
}

export default function StepThree({onSelect,onSelectShow}:Props) {

    const {
        register,
        trigger,
        formState: { errors },
        watch,
        handleSubmit
    } = useFormContext<ProjectFieldsData>();

    const Submited = () => {
        // PostAPI
        onSelectShow(false);
    }
    
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-4">
        <h2 className="text-2xl font-bold">حق الزحمه مهندسی</h2>

        <select {...register("contractorFeeType")}>
            <option value="درصدی">درصد</option>
            <option value="ثابت">مبلغ ثابت</option>
            </select>

            {watch("contractorFeeType") === "درصدی" && (
            <input
                type="number"
                {...register("contractorPercentage", { valueAsNumber: true })}
            />
            )}

            {watch("contractorFeeType") === "ثابت" && (
            <input
                type="number"
                {...register("contractorFixedFee", { valueAsNumber: true })}
            />
        )}


        <button onClick={() => append({ title: "", estimatedCost: 0, estimatedTime: 0 })}>
            + افزودن مرحله
        </button>

        <button onClick={() =>onSelect(2)}>قبلی</button>
        <button onClick={() =>handleSubmit(Submited)}>بعدی</button>

    </div>
  );
}