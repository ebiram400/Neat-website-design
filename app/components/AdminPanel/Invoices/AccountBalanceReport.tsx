"use client";

import Link from "next/link";
import { useEffect, useState } from "react";


export default function AccountBalanceReport() {

    const pdfUrl = "/name-moein.pdf";

    const [mounted, setMounted] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true);
        setIsMobile(/Android|iPhone|iPad/i.test(navigator.userAgent));
    }, []);

    if (!mounted) return null;

    return(
        <section className="w-[90%] mx-auto my-4 rounded-3xl border border-neutral-200/70 bg-linear-to-b from-white via-neutral-50 to-neutral-100 p-4 shadow-[0_18px_45px_-30px_rgba(0,0,0,0.45)]">
            <div className="flex items-center justify-between gap-3 mb-2">
                <h2 className="text-right text-base font-black tracking-tight text-neutral-900">
                    مـانــده حــسـاب
                </h2>
                <p className="text-xs text-neutral-500">گزارش</p>
            </div>
            {isMobile ? (
                <Link
                    href={pdfUrl}
                    target="_blank"
                    className="block text-center rounded-xl bg-neutral-900 py-3 text-white"
                >
                مشاهده / دانلود PDF
                </Link>
            ) : (
                <div className="w-full h-[70vh] rounded-lg overflow-hidden border border-gray-200">
                    <iframe
                        src={`${pdfUrl}#toolbar=0`}
                        className="w-full h-full"
                        loading="lazy"
                    />
                </div>
            )}
        </section>
    )
}
