"use client";

import Image from "next/image";
import Field from "./Field";
import { LoginFieldsData, LoginFieldsSchema } from "./LoginFields.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";


export default function AdminLogin(){

      const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<LoginFieldsData>({
        resolver: zodResolver(LoginFieldsSchema),
        defaultValues: {
          username: "",
          password: "",
        },
      });

    return(
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <Image src="/images/logo.png" height={120} width={140} alt="logo novin ashian" className="mx-auto h-30 w-auto" />
                <h2 className="mt-4 text-center text-2xl/9 font-bold tracking-tight">ورود مدیریت</h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form onSubmit={handleSubmit(() => {})} className="space-y-6">
                    <Field label="نام کاربری" error={errors.username?.message}>
                        <input {...register("username")} autoComplete="username" className="block w-full px-3 py-1.5 text-base outline-0 placeholder:text-gray-500 sm:text-sm/6" />
                    </Field>
                    <Field label="رمز عبور" error={errors.password?.message}>
                        <input {...register("password")} autoComplete="current-password" className="block w-full px-3 py-1.5 text-base outline-0 placeholder:text-gray-500 sm:text-sm/6" />
                    </Field>
                    <div>
                        <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">ورود</button>
                    </div>
                </form>

                <p className="mt-10 text-center text-sm/6 text-gray-400">
                مدیر نیستید?
                <a href="#" className="font-semibold text-indigo-400 hover:text-indigo-300">بازگشت به صفحه اصلی</a>
                </p>
            </div>
        </div>
    )
}