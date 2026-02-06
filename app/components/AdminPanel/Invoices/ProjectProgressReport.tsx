"use client";

import Image from "next/image";

export default function ProjectProgressReport() {

    const chartUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT89ikRwjegzxOC_HjGo_sqPWaHcBARGAyqw&s";


    return(
        <section className="w-[90%] mx-auto my-4 rounded-3xl border border-neutral-200/70 bg-linear-to-b from-white via-neutral-50 to-neutral-100 p-4 shadow-[0_18px_45px_-30px_rgba(0,0,0,0.45)]">
            <div className="flex items-center justify-between gap-3 mb-2">
                <h2 className="text-right text-base font-black tracking-tight text-neutral-900">
                    پـیـــشـرفـت پــروژه
                </h2>
                <p className="text-xs text-neutral-500">گزارش</p>
            </div>
            <div className="rounded-lg overflow-hidden border border-gray-200">
                <Image
                    src={chartUrl}
                    height={480}
                    width={720}
                    alt="Project Progress Report Chart"
                    className="w-full h-full"
                />
            </div>
        </section>
    )
}
