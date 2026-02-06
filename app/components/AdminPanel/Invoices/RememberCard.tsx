"use client"

import useMoney from "@/app/hooks/useMoney";

interface Credit {
    id:number,
    description:string;
    amount:number;
}

export default function RememberCard() {

    const Credits:Credit[] =[
        { id:0, description:"سرامیک", amount:700000000 },
        { id:1, description:"شیرآلات", amount:40000000 },
        { id:2, description:"لوازم برقی", amount:1000000 }
    ]

    const money = useMoney();

    return(
        <section className="w-[90%] mx-auto my-4 rounded-3xl border border-neutral-200/70 bg-linear-to-b from-white via-neutral-50 to-neutral-100 p-4 shadow-[0_18px_45px_-30px_rgba(0,0,0,0.45)]">
            <div className="flex items-center justify-between gap-3">
                <h2 className="text-right text-base font-black tracking-tight text-neutral-900">
                    یـــادآوری
                </h2>
                <p className="text-xs text-neutral-500">پرداخت نشده</p>
            </div>
            <div className="rounded-xl border border-neutral-200/70 bg-neutral-50/60 p-3">
                <div className="mt-2 grid gap-2 text-xs text-neutral-500">
                    {Credits.map((item)=>(
                        <div key={item.id} className="flex items-center justify-between">
                            <span>{item.description}</span>
                            <span className="font-semibold text-neutral-700">{money(item.amount)}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
