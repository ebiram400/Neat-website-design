import { z } from "zod";
import { isValidJalaaliDate, toGregorian } from "jalaali-js";

export const BuyMaterialFields = z.object({
  type: z
    .string()
    .trim()
    .min(1, "نوع مصالح الزامی است"),

  quantity: z
    .number()
    .positive("ورودی باید بزرگتر از صفر باشد"),

  unit: z
    .string()
    .trim()
    .min(1, "واحد مقدار الزامی است"),

  amount: z
    .string()
    .trim()
    .min(1, "مبلغ الزامی است")
    .refine((value) => !Number.isNaN(Number(value)), "مبلغ باید عدد باشد")
    .transform((value) => Number(value) * 1000),

  supplier: z.string().trim().optional(),

  payment: z.enum(["bank","credit","cheque"],"نوع پرداخت را تعیین نمایید"),

  date: z
    .string()
    .trim()
    .min(1, "تاریخ الزامی است")
    .refine((value) => {
      const match = value.match(/^(\d{4})\/(\d{1,2})\/(\d{1,2})$/);
      if (!match) return false;
      const [, jy, jm, jd] = match;
      return isValidJalaaliDate(Number(jy), Number(jm), Number(jd));
    }, "تاریخ شمسی نامعتبر است")
    .transform((value) => {
      const [, jy, jm, jd] = value.match(/^(\d{4})\/(\d{1,2})\/(\d{1,2})$/)!;
      const { gy, gm, gd } = toGregorian(Number(jy), Number(jm), Number(jd));
      return new Date(gy, gm - 1, gd);
    }),
});

export type BuyMaterialData = z.input<typeof BuyMaterialFields>;
export type BuyMaterialPayload = z.output<typeof BuyMaterialFields>;
