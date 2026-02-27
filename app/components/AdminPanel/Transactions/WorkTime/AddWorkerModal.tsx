"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import FieldTransaction from "../FieldTransaction";
import {
  AddWorkerModalFields,
  AddWorkerModalFieldsData,
  AddWorkerModalFieldsPayload,
  Worker,
} from "./WorkTimeFields.schema";

type AddWorkerModalProps = {
  open: boolean;
  workers: Worker[];
  duplicateNameError?: string;
  onClose: () => void;
  onAdd: (payload: AddWorkerModalFieldsPayload) => void;
  onNameChange: () => void;
};

export default function AddWorkerModal({
  open,
  workers,
  duplicateNameError,
  onClose,
  onAdd,
  onNameChange,
}: AddWorkerModalProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AddWorkerModalFieldsData, unknown, AddWorkerModalFieldsPayload>({
    resolver: zodResolver(AddWorkerModalFields),
    defaultValues: {
      name: "",
      hourlyRate: "",
    },
  });

  useEffect(() => {
    if (!open) {
      reset();
    }
  }, [open, reset]);

  if (!open) return null;

  const closeModal = () => {
    reset();
    onClose();
  };

  const handleAddWorker = (formData: AddWorkerModalFieldsPayload) => {
    onAdd(formData);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-[2px] flex items-center justify-center px-4">
      <div
        className="w-full max-w-md rounded-3xl p-5
            backdrop-blur-[2px]
            border border-white/5
            shadow-[0_15px_50px_rgba(0,0,0,0.25)] backdrop-saturate-150
            relative overflow-hidden"
      >
        <div className="absolute inset-0 rounded-3xl pointer-events-none bg-linear-to-b from-white/20 via-white/10 to-transparent" />
        <div className="absolute inset-0 rounded-3xl pointer-events-none shadow-[inset_0_1px_1px_rgba(255,255,255,0.8),inset_0_-1px_2px_rgba(0,0,0,0.1)]" />

        <div className="relative z-10">
          <h2 className="text-center text-neutral-800 text-lg mb-3">افزودن کارگر</h2>
          <p className="text-center text-xs text-neutral-600 mb-4 font-['Vazir']">
            تعداد کارگر فعلی: {workers.length}
          </p>

          <form className="space-y-3" onSubmit={handleSubmit(handleAddWorker)}>
            <div>
              <FieldTransaction
                label="نام کارگر"
                matchId="worker-name"
                error={errors.name?.message || duplicateNameError}
              >
                <input
                  type="text"
                  id="worker-name"
                  {...register("name", {
                    onChange: () => {
                      onNameChange();
                    },
                  })}
                  className="block w-full px-0 py-1 text-center text-neutral-800 text-sm bg-transparent border-0 appearance-none focus:outline-none focus:ring-0 peer"
                />
              </FieldTransaction>
            </div>

            <div>
              <FieldTransaction
                label="دستمزد ساعتی"
                matchId="hourly-rate"
                error={errors.hourlyRate?.message}
              >
                <input
                  type="text"
                  id="hourly-rate"
                  inputMode="decimal"
                  {...register("hourlyRate")}
                  className="block w-full px-0 py-1 text-center text-neutral-800 text-sm bg-transparent border-0 appearance-none focus:outline-none focus:ring-0 peer"
                />
              </FieldTransaction>
            </div>

            <div className="pt-3 grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={closeModal}
                className="rounded-full border border-rose-500/30 px-4 py-2 text-sm font-['Vazir'] text-rose-700 bg-white/50"
              >
                انصراف
              </button>
              <button
                type="submit"
                className="rounded-full border border-emerald-500/30 px-4 py-2 text-sm font-['Vazir'] text-emerald-700 bg-white/50"
              >
                افزودن
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
