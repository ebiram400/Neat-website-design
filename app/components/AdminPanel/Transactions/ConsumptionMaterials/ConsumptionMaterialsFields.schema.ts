import { z } from "zod";
import { isValidJalaaliDate, toGregorian } from "jalaali-js";

export const CONSUMPTION_MATERIAL_UNITS = ["m", "m3", "کیسه", "نیسان", "pcs"] as const;
    

const toEnglishDigits = (value: string) =>
  value.replace(/[۰-۹]/g, (digit) => String(digit.charCodeAt(0) - 1776))
    .replace(/[٠-٩]/g, (digit) => String(digit.charCodeAt(0) - 1632));

export const ConsumptionMaterialFields = z.object({
  type: z
    .string()
    .trim()
    .min(1, "نوع مصالح الزامی است"),

  quantity: z
    .number()
    .positive("ورودی باید بزرگتر از صفر باشد"),

  unit: z.enum(CONSUMPTION_MATERIAL_UNITS, "واحد مقدار الزامی است"),

  level: z
    .string()
    .trim()
    .min(1,"مرحله الزامی باشد"),

  date: z
    .string()
    .trim()
    .min(1, "تاریخ الزامی است")
    .refine((value) => {
      const normalizedValue = toEnglishDigits(value);
      const match = normalizedValue.match(/^(\d{4})\/(\d{1,2})\/(\d{1,2})$/);
      if (!match) return false;
      const [, jy, jm, jd] = match;
      return isValidJalaaliDate(Number(jy), Number(jm), Number(jd));
    }, "تاریخ شمسی نامعتبر است")
    .transform((value) => {
      const normalizedValue = toEnglishDigits(value);
      const [, jy, jm, jd] = normalizedValue.match(/^(\d{4})\/(\d{1,2})\/(\d{1,2})$/)!;
      const { gy, gm, gd } = toGregorian(Number(jy), Number(jm), Number(jd));
      return new Date(gy, gm - 1, gd);
    }),
});

export type ConsumptionMaterialData = z.input<typeof ConsumptionMaterialFields>;
export type ConsumptionMaterialPayload = z.output<typeof ConsumptionMaterialFields>;
export type ConsumptionMaterialUnit = (typeof CONSUMPTION_MATERIAL_UNITS)[number];
