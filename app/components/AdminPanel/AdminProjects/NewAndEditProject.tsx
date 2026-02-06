"use client";

import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ProjectFieldsSchema, ProjectFieldsData } from "./ProjectFields.schema";
import { useState } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";

type Props ={
  project_id: number | null;
  onSelectShow: (setVlaue: boolean)=>void;
}

export default function NewAndEditProject({project_id,onSelectShow}: Props) {

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

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
      <div className="w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl border border-gray-100 bg-white shadow-2xl">
        <div className="px-6 py-8 sm:px-10 sm:py-10">
          <FormProvider {...methods}>
            {step === 1 && <StepOne onSelect={setStep} onSelectShow={onSelectShow} />}
            {step === 2 && <StepTwo onSelect={setStep} onSelectShow={onSelectShow} />}
            {step === 3 && (
              <StepThree
                onSelect={setStep}
                onSelectShow={onSelectShow}
                project_id={project_id}
              />
            )}
          </FormProvider>
        </div>
        <div className="flex items-center justify-center gap-2 pb-6">
          {[1, 2, 3].map((index) => (
            <span
              key={index}
              className={`h-2.5 w-2.5 rounded-full transition ${
                step === index ? "bg-gray-900" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
