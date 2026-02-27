import { z } from "zod";
import { isValidJalaaliDate, toGregorian } from "jalaali-js";

export const WorkerSchema = z.object({
  id: z.number().int().nonnegative(),
  name: z
    .string()
    .trim()
    .min(1, "نام الزامی است"),
  hourlyRate: z.number().nonnegative(),
});

export const AddWorkerModalFields = z.object({
  name: z
    .string()
    .trim()
    .min(1, "نام کارگر الزامی است"),
  hourlyRate: z
    .string()
    .trim()
    .min(1, "دستمزد ساعتی الزامی است")
    .refine((value) => !Number.isNaN(Number(value)), "دستمزد باید عدد باشد")
    .refine((value) => Number(value) > 0, "دستمزد باید بزرگتر از صفر باشد")
    .transform((value) => Number(value)),
});

const toEnglishDigits = (value: string) =>
  value
    .replace(/[۰-۹]/g, (digit) => String(digit.charCodeAt(0) - 1776))
    .replace(/[٠-٩]/g, (digit) => String(digit.charCodeAt(0) - 1632));

const parseJalaaliDateParts = (value: string) => {
  const cleanedValue = toEnglishDigits(value)
    .replace(/[\u200c\u200f\u202a-\u202e]/g, "")
    .replace(/[^\d]/g, " ")
    .trim();

  const parts = cleanedValue.split(/\s+/).filter(Boolean);
  if (parts.length < 3) return null;

  const [jyRaw, jmRaw, jdRaw] = parts;
  const jy = Number(jyRaw);
  const jm = Number(jmRaw);
  const jd = Number(jdRaw);

  if (!Number.isInteger(jy) || !Number.isInteger(jm) || !Number.isInteger(jd)) return null;
  if (jyRaw.length !== 4) return null;

  return { jy, jm, jd };
};

const TIME_FORMAT_REGEX = /^([01]\d|2[0-3]):([0-5]\d)$/;

export const WorkTimeFields = z
  .object({
    workers: z
      .array(WorkerSchema)
      .refine((value) => {
        console.log("len="+value.length)
        return value.length > 0; 
      }, "حداقل یک کارگر باید انتخاب شود"),

    date: z
      .string()
      .trim()
      .min(1, "تاریخ الزامی است")
      .refine((value) => {
        const parsedDate = parseJalaaliDateParts(value);
        if (!parsedDate) return false;
        return isValidJalaaliDate(parsedDate.jy, parsedDate.jm, parsedDate.jd);
      }, "تاریخ شمسی نامعتبر است")
      .transform((value) => {
        const parsedDate = parseJalaaliDateParts(value)!;
        const { gy, gm, gd } = toGregorian(parsedDate.jy, parsedDate.jm, parsedDate.jd);
        return new Date(gy, gm - 1, gd);
      }),

    startTime: z
      .string()
      .trim()
      .min(1, "ساعت شروع الزامی است")
      .regex(TIME_FORMAT_REGEX, "فرمت ساعت شروع نامعتبر است"),

    endTime: z
      .string()
      .trim()
      .min(1, "ساعت پایان الزامی است")
      .regex(TIME_FORMAT_REGEX, "فرمت ساعت پایان نامعتبر است"),
  })
  .refine(
    (fields) => {
      const [startHour, startMinute] = fields.startTime.split(":").map(Number);
      const [endHour, endMinute] = fields.endTime.split(":").map(Number);
      return endHour * 60 + endMinute > startHour * 60 + startMinute;
    },
    {
      path: ["endTime"],
      message: "ساعت پایان باید بعد از ساعت شروع باشد",
    }
  );

export type Worker = z.infer<typeof WorkerSchema>;
export type AddWorkerModalFieldsData = z.input<typeof AddWorkerModalFields>;
export type AddWorkerModalFieldsPayload = z.output<typeof AddWorkerModalFields>;
export type WorkTimeFieldsData = z.input<typeof WorkTimeFields>;
export type WorkTimeFieldsPayload = z.output<typeof WorkTimeFields>;
