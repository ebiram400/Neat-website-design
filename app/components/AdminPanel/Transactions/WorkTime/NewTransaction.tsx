"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useMemo, useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import BackgroundForm from "@/public/images/icon/BackgroundForm";
import DatePicker, { DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import FieldTransaction from "../FieldTransaction";
import AddWorkerModal from "./AddWorkerModal";
import {
  AddWorkerModalFieldsPayload,
  Worker,
  WorkTimeFields,
  WorkTimeFieldsData,
  WorkTimeFieldsPayload,
} from "./WorkTimeFields.schema";

type Props = {
  projectId: string;
  transactionId?: string | string[];
};

const DEFAULT_WORKERS: Worker[] = [
  { id: 1, name: "احمد", hourlyRate: 130000 },
  { id: 2, name: "علی", hourlyRate: 120000 },
  { id: 3, name: "رضا", hourlyRate: 100000 },
  { id: 4, name: "پویا", hourlyRate: 130000 },
];

export default function NewTransaction({ projectId, transactionId }: Props) {
  void projectId;
  void transactionId;

  const {
    register,
    control,
    setValue,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<WorkTimeFieldsData, unknown, WorkTimeFieldsPayload>({
    resolver: zodResolver(WorkTimeFields),
    defaultValues: {
      workers: [],
      date: "",
      startTime: "",
      endTime: "",
    },
  });

  const [workers, setWorkers] = useState<Worker[]>(DEFAULT_WORKERS);
  const [selectedWorkers, setSelectedWorkers] = useState<Worker[]>([]);
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [duplicateNameError, setDuplicateNameError] = useState("");
  const [crackedButton, setCrackedButton] = useState<"cancel" | "save" | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);

  const filteredWorkers = useMemo(() => {
    return workers.filter((worker) =>
      worker.name.toLowerCase().includes(query.toLowerCase())
    );
  }, [workers, query]);

  const duplicateWorkerNameSchema = useMemo(
    () =>
      z
        .string()
        .trim()
        .min(1, "نام کارگر الزامی است")
        .refine(
          (name) =>
            !workers.some(
              (worker) =>
                worker.name.trim().toLowerCase() === name.trim().toLowerCase()
            ),
          "نام از قبل وجود دارد"
        ),
    [workers]
  );

  const isSelected = (id: number) =>
    selectedWorkers.some((worker) => worker.id === id);

  const toggleWorker = (worker: Worker) => {
    if (isSelected(worker.id)) {
      setSelectedWorkers((prev) => {
        const nextSelected = prev.filter((item) => item.id !== worker.id);
        setValue("workers", nextSelected, { shouldDirty: true, shouldValidate: true });
        return nextSelected;
      });
      return;
    }

    setSelectedWorkers((prev) => {
      const nextSelected = [...prev, worker];
      setValue("workers", nextSelected, { shouldDirty: true, shouldValidate: true });
      return nextSelected;
    });
    setQuery("");
    setOpen(false);
  };

  const removeWorker = (id: number) => {
    setSelectedWorkers((prev) => {
      const nextSelected = prev.filter((worker) => worker.id !== id);
      setValue("workers", nextSelected, { shouldDirty: true, shouldValidate: true });
      return nextSelected;
    });
  };

  const handleAddWorker = (payload: AddWorkerModalFieldsPayload) => {
    const duplicateCheck = duplicateWorkerNameSchema.safeParse(payload.name);

    if (!duplicateCheck.success) {
      setDuplicateNameError(duplicateCheck.error.issues[0]?.message ?? "نام نامعتبر است");
      return;
    }

    const nextId = workers.reduce((maxId, worker) => Math.max(maxId, worker.id), 0) + 1;

    const newWorker: Worker = {
      id: nextId,
      name: payload.name.trim(),
      hourlyRate: payload.hourlyRate,
    };

    setWorkers((prev) => [...prev, newWorker]);
    setSelectedWorkers((prev) => {
      const nextSelected = [...prev, newWorker];
      setValue("workers", nextSelected, { shouldDirty: true, shouldValidate: true });
      return nextSelected;
    });
    setQuery("");
    setDuplicateNameError("");
    setShowModal(false);
  };

  const triggerCrack = (button: "cancel" | "save") => {
      setCrackedButton(button);
      setTimeout(() => {
          setCrackedButton((current) => (current === button ? null : current));
      }, 650);
  };

  const onSubmit = (formData: WorkTimeFieldsPayload) => {
      // TODO: connect submit payload to API.
      console.log("Buy material payload:", formData);
  };

  const onCancel = () => {
      triggerCrack("cancel");
      setSelectedWorkers([]);
      setQuery("");
      setValue("workers", [], { shouldDirty: false, shouldValidate: false });
      reset();
  };

  useEffect(() => {
    register("workers");
  }, [register]);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

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

  return (
    <div className="relative h-screen w-full overflow-hidden overflow-y-auto font-['lalezar']">
      <BackgroundForm />
      <div className="absolute -top-40 -left-40 w-100 h-100 bg-purple-400/40 blur-3xl rounded-full" />
      <div className="absolute -bottom-40 -right-40 w-100 h-100 bg-pink-500/40 blur-3xl rounded-full" />

      <div className="w-11/12 mx-auto my-[4vw]">
        <div
          className="rounded-3xl p-5
              bg-white/5 backdrop-blur-[2px]
              border border-white/5
              shadow-[0_15px_50px_rgba(0,0,0,0.25)]
              relative overflow-hidden backdrop-saturate-150"
        >
          <div className="absolute inset-0 rounded-3xl pointer-events-none bg-linear-to-b from-white/20 via-white/10 to-transparent" />
          <div className="absolute inset-0 rounded-3xl pointer-events-none shadow-[inset_0_1px_1px_rgba(255,255,255,0.8),inset_0_-1px_2px_rgba(0,0,0,0.1)]" />
          <div className="text-center">{`> ثبت ساعت کار`}</div>
        </div>
      </div>

      <div className="w-11/12 mx-auto my-[4vw]">
        <div
          className="rounded-3xl p-5
              backdrop-blur-[2px]
              border border-white/5
              shadow-[0_15px_50px_rgba(0,0,0,0.25)] backdrop-saturate-150
              relative overflow-hidden"
        >
          <div className="absolute inset-0 rounded-3xl pointer-events-none bg-linear-to-b from-white/20 via-white/10 to-transparent" />
          <div className="absolute inset-0 rounded-3xl pointer-events-none shadow-[inset_0_1px_1px_rgba(255,255,255,0.8),inset_0_-1px_2px_rgba(0,0,0,0.1)]" />

          <form className="relative z-10 text-right grid md:grid-cols-2 gap-4" onSubmit={handleSubmit(onSubmit)}>
            {/* name */}
            <div>
              <FieldTransaction matchId="worker-search" error={errors.workers?.message}>
                <div className="relative w-full" ref={containerRef}>
                  <div
                    className={`flex flex-wrap gap-2 min-h-11 cursor-text px-2 py-1 transition-all duration-250 ${
                      open
                        ? "rounded-t-2xl rounded-b-none border-b border-white/30 bg-white/10"
                        : "rounded-2xl bg-transparent"
                    }`}
                    onClick={() => setOpen(true)}
                  >
                    {selectedWorkers.map((worker) => (
                      <div
                        key={worker.id}
                        className="flex items-center gap-2 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-['Vazir']"
                      >
                        {worker.name}
                        <button
                          type="button"
                          onClick={() => removeWorker(worker.id)}
                          className="text-blue-500 hover:text-rose-500"
                        >
                          ×
                        </button>
                      </div>
                    ))}

                    <input
                      id="worker-search"
                      value={query}
                      onChange={(event) => {
                        setQuery(event.target.value);
                        setOpen(true);
                      }}
                      className="flex-1 outline-none text-xs text-neutral-900 placeholder-neutral-900 text-center min-w-30 bg-transparent font-['Vazir']"
                      placeholder="نام کارگران"
                    />
                  </div>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-out rounded-b-2xl ${
                      open ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div
                      className="rounded-b-2xl rounded-t-none
                        bg-white/60 
                        shadow-[0_15px_50px_rgba(0,0,0,0.25)]
                        relative overflow-auto max-h-60"
                    >
                      <div className="absolute inset-0 pointer-events-none bg-linear-to-b from-white/20 via-white/10 to-transparent" />
                      <div className="absolute inset-0 pointer-events-none shadow-[inset_0_1px_1px_rgba(255,255,255,0.8),inset_0_-1px_2px_rgba(0,0,0,0.1)]" />

                      <div className="relative z-10 ">
                        {filteredWorkers.map((worker) => (
                          <button
                            type="button"
                            key={worker.id}
                            onClick={() => toggleWorker(worker)}
                            className={`w-full text-right px-4 py-2 cursor-pointer text-xs font-bold hover:bg-white/40 font-['Vazir'] ${
                              isSelected(worker.id) ? "bg-white/35" : ""
                            }`}
                          >
                            {worker.name} - {worker.hourlyRate.toLocaleString()} تومان
                          </button>
                        ))}

                        {filteredWorkers.length === 0 && (
                          <p className="px-4 py-2 text-xs text-neutral-600 font-['Vazir']">
                            کارگری با این نام پیدا نشد.
                          </p>
                        )}

                        <button
                          type="button"
                          onClick={() => {
                            setShowModal(true);
                            setOpen(false);
                          }}
                          className="w-full text-right px-4 py-3 text-xs text-neutral-600 cursor-pointer hover:bg-blue-50/70 border-t border-white/80 font-['lalezar']"
                        >
                          + افزودن کارگر جدید
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </FieldTransaction>
              <div className="w-11/12 mx-auto mt-2 rounded-full p-3 bg-white/50 border border-white/5 shadow-[0_10px_30px_rgba(0,0,0,0.12)]">
                <p className="text-[9px] text-neutral-700 font-['Vazir']">
                  کارگران انتخاب شده: {selectedWorkers.length}
                </p>
              </div>
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

            {/* start_time */}
            <FieldTransaction label="شروع کار" matchId="startTime" error={errors.startTime?.message}>
              <input
                type="time"
                step={60}
                lang="en-GB"
                id="startTime"
                {...register("startTime")}
                className="block w-full px-0 py-1 text-center text-neutral-800 text-sm bg-transparent border-0 appearance-none focus:outline-none focus:ring-0 peer"
              />
            </FieldTransaction>

            {/* end_time */}
            <FieldTransaction label="پایان کار" matchId="endTime" error={errors.endTime?.message}>
              <input
                type="time"
                id="endTime"
                {...register("endTime")}
                className="block w-full px-0 py-1 text-center text-neutral-800 text-sm bg-transparent border-0 appearance-none focus:outline-none focus:ring-0 peer"
              />
            </FieldTransaction>

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

      <AddWorkerModal
        open={showModal}
        workers={workers}
        duplicateNameError={duplicateNameError}
        onNameChange={() => setDuplicateNameError("")}
        onClose={() => {
          setDuplicateNameError("");
          setShowModal(false);
        }}
        onAdd={handleAddWorker}
      />
    </div>
  );
}
