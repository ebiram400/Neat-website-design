"use client";

import Image from "next/image";


export default function VarianceReport() {

    const chartUrl = "https://www.cpaaustralia.com.au/-/jssmedia/project/cpa/intheblack/images/magazine-2018/06-june/excel-figure1.jpg?mw=768&mh=null&rev=d76f07d1b7214851a59ed0cc17e5b79b";


    return(
        <section className="w-[90%] mx-auto my-4 rounded-3xl border border-neutral-200/70 bg-linear-to-b from-white via-neutral-50 to-neutral-100 p-4 shadow-[0_18px_45px_-30px_rgba(0,0,0,0.45)]">
            <div className="flex items-center justify-between gap-3 mb-2">
                <h2 className="text-right text-base font-black tracking-tight text-neutral-900">
                    واریانس
                </h2>
                <p className="text-xs text-neutral-500">گزارش</p>
            </div>
            <div className="rounded-lg overflow-hidden border border-gray-200">
                <Image
                    src={chartUrl}
                    height={360}
                    width={720}
                    alt="Project Progress Report Chart"
                    className="w-full h-full"
                />
            </div>
        </section>
    )
}
