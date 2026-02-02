"use client";

import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ProjectFieldsSchema, ProjectFieldsData } from "./ProjectFields.schema";
import Field from "../Field";
import { useState } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";

type Props ={
  project_id: number | null;
  onSelectShow: (setVlaue: boolean)=>void;
}

export default function EditProject({project_id,onSelectShow}: Props) {

  const [ step, setStep ] = useState<1|2|3>(1);

  // const {} = project_id ? 
  const methods = useForm<ProjectFieldsData>({
    resolver: zodResolver(ProjectFieldsSchema),
    defaultValues: {
      projectName: "",
      employer: "",
      phone: "",
      password: "",
      area: undefined,
      stages: [],
      contractorFeeType: "درصدی",
      contractorFixedFee: undefined,
      contractorPercentage: undefined
    },
  });

  const onSubmit = (data: ProjectFieldsData) => {
    console.log("payload:", data, project_id);
    // mutation.mutate({ project_id, ...data })
  };

  return (
    <>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="z-50 absolute bottom-0 left-1/2 -translate-x-1/2 p-6 backdrop-blur-xs w-[95%] h-[90%] rounded-t-3xl border-2 border-gray-700 border-b-0"
        >
          <hr className="w-1/3 border relative -top-4 mx-auto text-gray-500" />

          <div className="grid grid-cols-2 gap-2">
            {/* project name */}
            

            {/* estimated cost */}
            <Field label="هزینه تخمینی" error={errors.estimatedCost?.message}>
              <input
                type="number"
                className="focus:outline-0 text-center"
                {...register("estimatedCost", { valueAsNumber: true })}
              />
            </Field>

            {/* area */}
            

            {/* estimate time */}
            <Field label="مدت تخمینی (ماه)" error={errors.estimateTime?.message}>
              <input
                type="number"
                className="focus:outline-0 text-center"
                {...register("estimateTime", { valueAsNumber: true })}
              />
            </Field>

            {/* contractor percentage */}
            <Field
              label="درصد پیمانکار"
              error={errors.contractorPercentage?.message}
            >
              <input
                type="number"
                className="focus:outline-0 text-center"
                {...register("contractorPercentage", {
                  valueAsNumber: true,
                })}
              />
            </Field>

            <div className="col-span-2 flex gap-4 mt-6 justify-center">
              <button
                type="submit"
                className="px-6 py-1 rounded-lg text-green-500 shadow"
              >
                ذخیره
              </button>

              <button
                type="button"
                onClick={() => {reset(); onSelect(false);}}
                className="px-6 py-1 rounded-lg text-red-600 shadow"
              >
                لغو
              </button>
            </div>
          </div>
        </form>
        <FormProvider {...methods}>
          {step === 1 && <StepOne onSelect={setStep} />}
          {step === 2 && <StepTwo onSelect={setStep} />}
          {step === 3 && <StepThree onSelect={setStep} onSelectShow={onSelectShow} />}
        </FormProvider>
    </>
  );
}
