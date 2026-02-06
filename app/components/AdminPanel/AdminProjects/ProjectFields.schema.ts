import { z } from "zod";

const StageSchema = z.object({
  title: z.string().min(2, "عنوان مرحله الزامی است"),
  estimatedTime: z.number().positive("ورودی باید بزرگتر از صفر باشد"),
  estimatedCost: z.number("ورودی باید عدد باشد").positive("ورودی باید بزرگتر از صفر باشد"),
});

export const ProjectFieldsSchema = z.object({
  projectName: z
    .string()
    .min(3, "نام پروژه الزامی است")
    .regex(/^[\p{L}\d\s]+$/u, "نام پروژه فقط می‌تواند شامل حروف، عدد و فاصله باشد"),

  employer: z
    .string()
    .min(3, "نام کارفرما الزامی است")
    .regex(/^[\p{L}\s]+$/u, "نام کارفرما نمی تواند عدد داشته باشد"),

  phone: z
    .string()
    .regex(/^0\d{10}$/, "شماره تماس باید ۱۱ رقم و با صفر شروع شود"),

  password: z.string(),

  area: z
    .number("ورودی باید عدد باشد")
    .positive("ورودی باید بزرگتر از صفر باشد"),

  stages: z.array(StageSchema).min(1, "حداقل یک مرحله لازم است"),

  contractorFeeType: z.enum(["درصدی", "ثابت"]).refine((val) => val === "درصدی" || val === "ثابت", {
    message: "نوع حق‌الزحمه نامعتبر است",
  }),
  contractorFixedFee: z.number().positive().optional(),
  contractorPercentage: z
    .number("ورودی باید عدد باشد")
    .min(0,"حداقل درصد 0 می باشد")
    .max(100,"حداکثر درصد 100 می باشد")
    .optional(),
});

export type ProjectFieldsData = z.infer<typeof ProjectFieldsSchema>;
