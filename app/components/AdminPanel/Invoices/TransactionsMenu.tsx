"use client";

import Link from "next/link";
import { useProjectId } from "./ProjectContext";

type newRegister = {
    id:number,
    name:string;
    href:string;
}

export default function TransactionsMenu() {
    const projectId = useProjectId();

    const menuNewTransaction:newRegister[] = [
        { id:0, name: "هزینه مصالح", href: `/dashboard/projects/${projectId}/buy-materials` },
        { id:1, name: "کارکرد کارگران", href: `/dashboard/projects/${projectId}/work_time` },
        { id:2, name: "هزینه های جانبی", href: `/dashboard/projects/${projectId}/expenses` },
        { id:3, name: "مصرف مصالح", href: `/dashboard/projects/${projectId}/consumption-materials` },
        { id:4, name: "پرداخت دستمزد", href: `/dashboard/projects/${projectId}/salary` },
        { id:5, name: "درآمد و سرمایه", href: `/dashboard/projects/${projectId}/invest&income` },
    ];

    return (
        <div className="w-[90%] mx-auto my-4 rounded-2xl p-4 shadow-xl border border-neutral-100 bg-linear-to-b from-white to-neutral-100">
            <div className="flex items-center justify-between">
                <h2 className="text-right font-black text-base tracking-tight text-neutral-800">تـــراکـنــش هـا</h2>
                <span className="text-xs text-neutral-500">دفترکل</span>
            </div>
            <div className="mt-3 flex gap-3 overflow-x-auto pb-2 no-scrollbar snap-x snap-mandatory">
                {menuNewTransaction.map((item)=>
                    (
                        <Link
                            href={item.href}
                            key={item.id}
                            className="min-w-35 snap-start rounded-2xl border border-neutral-100 bg-white px-4 py-3 shadow-sm transition hover:-translate-y-0.5 hover:border-orange-300 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300"
                        >
                            <span className="block text-center text-base font-['lalezar'] text-neutral-800">{item.name}</span>
                            <span className="mt-1 block text-center text-[11px] text-neutral-500">نمایش ثبت ها</span>
                        </Link>
                    )
                )}
            </div>
        </div>
    )
}
