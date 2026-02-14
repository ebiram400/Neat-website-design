"use client";

import Image from "next/image";
import Link from "next/link";
import { useProjectId } from "./ProjectContext";

type newRegister = {
    id:number,
    name:string;
    icon:string;
    href:string;
}

export default function FastRegistration() {
    const projectId = useProjectId();

    const menuNewTransaction:newRegister[] = [
        { id:0, name: "خرید مصالح", icon: "/images/icon/buy_materials.png", href: `/dashboard/projects/${projectId}/buy_materials/new&edit` },
        { id:1, name: "ورود و خروج", icon: "/images/icon/work_time.svg", href: `/dashboard/projects/${projectId}/work_time/new&edit` },
        { id:2, name: "هزینه", icon: "/images/icon/expenses.png", href: `/dashboard/projects/${projectId}/expenses/new&edit` },
        { id:3, name: "مصرف مصالح", icon: "/images/icon/consumption_materials.png", href: `/dashboard/projects/${projectId}/consumption_materials/new&edit` },
        { id:4, name: "پرداخت دستمزد", icon: "/images/icon/salary.png", href: `/dashboard/projects/${projectId}/salary/new&edit` },
        { id:5, name: "واریزی", icon: "/images/icon/invest.png", href: `/dashboard/projects/${projectId}/invest&income/new&edit` },
    ];

    return(
        <div className="w-[90%] mx-auto my-4 shadow-2xl border border-neutral-100 bg-linear-to-b from-white to-neutral-50 rounded-2xl p-3 z-10">
            <h2 className="text-center font-bold text-md text-neutral-800">ثــــبــت ســریــــع</h2>
            <div className="w-full mt-2 grid grid-cols-3 gap-4">
                {menuNewTransaction.map((item)=>
                    (
                        <Link href={item.href} className="flex flex-col justify-center items-center" key={item.id}>
                            <Image src={item.icon} alt={item.name} height={50} width={50} />
                            <span className="text-center font-['lalezar'] text-xs text-neutral-700">{item.name}</span>
                        </Link>
                    )
                )}
            </div>
        </div>
    )
}
