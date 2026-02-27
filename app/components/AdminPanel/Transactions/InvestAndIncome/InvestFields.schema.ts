import { z } from "zod";
import { isValidJalaaliDate, toGregorian } from "jalaali-js";

export const INVEST_PAYMENTS = ["bank", "cheque"] as const;

const toEnglishDigits = (value: string) =>
  value.replace(/[۰-۹]/g, (digit) => String(digit.charCodeAt(0) - 1776))
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

export const InvestFields = z.object({
  description: z
    .string()
    .trim()
    .optional(),

  amount: z
    .string()
    .trim()
    .min(1, "مبلغ الزامی است")
    .refine((value) => !Number.isNaN(Number(value)), "مبلغ باید عدد باشد")
    .transform((value) => Number(value) * 1000),

  payment: z.enum(INVEST_PAYMENTS, "نوع پرداخت را تعیین نمایید"),

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
});

export type InvestFieldsData = z.input<typeof InvestFields>;
export type InvestFieldsPayload = z.output<typeof InvestFields>;
export type InvestFieldPayment = (typeof INVEST_PAYMENTS)[number];
