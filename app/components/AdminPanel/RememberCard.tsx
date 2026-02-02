"use client"

import useMoney from "@/app/hooks/useMoney"

export default function RememberCard(){
    const money = useMoney();

    return(
        <section className="w-[90%] mx-auto my-4 shadow-xl rounded-2xl p-3 z-10">
            <h2 className="text-center font-bold text-md">یــــادآور</h2>
            <br/>
            <h3 className="text-md">حساب های پرداختنی پروژه <span>کاشانی57</span> :</h3>
            <div className="grid grid-cols-2 mx-16 text-sm text-gray-800">
                <div>account to</div>
                <div dir="ltr">among</div>
            </div>
            <div className="grid grid-cols-2 mx-16 text-sm text-gray-800">
                <div>ناصر صمدی</div>
                <div dir="ltr">{money(20000)}</div>
            </div>
        </section>
    )
}