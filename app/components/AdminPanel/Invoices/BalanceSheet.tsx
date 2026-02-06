"use client";

export default function BalanceSheet() {
    return (
        <section className="w-[90%] mx-auto my-4 rounded-3xl border border-neutral-200/70 bg-linear-to-b from-white via-neutral-50 to-neutral-100 p-4 shadow-[0_18px_45px_-30px_rgba(0,0,0,0.45)]">
            <div className="flex items-center justify-between gap-3">
                <div>
                    <h2 className="text-right text-base font-black tracking-tight text-neutral-900">
                        تــرازنـــامــه
                    </h2>
                    <p className="text-xs text-neutral-500">گزارش خلاصه وضعیت مالی</p>
                </div>
                <div className="rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-semibold text-neutral-600">
                    وضعیت: <span>متعادل</span>
                </div>
            </div>

            <div className="mt-4 grid gap-4 lg:grid-cols-2">
                <article className="rounded-2xl border border-neutral-200/70 bg-white p-4 shadow-sm lg:order-1">
                    <h3 className="text-sm font-bold text-neutral-800">بدهکاری‌ها</h3>
                    <div className="mt-3 space-y-3">
                        <div className="rounded-xl border border-neutral-200/70 bg-neutral-50/60 p-3">
                            <div className="flex items-center justify-between">
                                <span className="text-xs font-semibold text-neutral-500">جمع هزینه‌ها</span>
                                <span className="text-sm font-black text-neutral-900">23,023,000</span>
                            </div>
                            <div className="mt-2 grid gap-2 text-xs text-neutral-500">
                                <div className="flex items-center justify-between">
                                    <span>دستمزدها</span>
                                    <span className="font-semibold text-neutral-700">9,400,000</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span>مصالح مصرفی</span>
                                    <span className="font-semibold text-neutral-700">13,623,000</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span>هزینه های جانبی</span>
                                    <span className="font-semibold text-neutral-700">4,500,000</span>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </article>

                <article className="rounded-2xl border border-neutral-200/70 bg-white p-4 shadow-sm lg:order-2">
                    <h3 className="text-sm font-bold text-neutral-800">بستانکاری‌ها</h3>
                    <div className="mt-3 space-y-3">
                        <div className="rounded-xl border border-neutral-200/70 bg-neutral-50/60 p-3">
                            <div className="flex items-center justify-between">
                                <span className="text-xs font-semibold text-neutral-500">جمع سرمایه</span>
                                <span className="text-sm font-black text-neutral-900">23,023,000</span>
                            </div>
                            <div className="mt-2 flex items-center gap-2 text-xs text-neutral-500">
                                <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                                <span>سرمایه ثبت‌شده</span>
                            </div>
                        </div>
                        <div className="rounded-xl border border-neutral-200/70 bg-neutral-50/60 p-3">
                            <div className="flex items-center justify-between">
                                <span className="text-xs font-semibold text-neutral-500">جمع درآمد</span>
                                <span className="text-sm font-black text-neutral-900">23,000</span>
                            </div>
                            <div className="mt-2 flex items-center gap-2 text-xs text-neutral-500">
                                <span className="h-2 w-2 rounded-full bg-sky-500"></span>
                                <span>درآمد تحقق‌یافته</span>
                            </div>
                        </div>
                        <div className="rounded-xl border border-neutral-200/70 bg-neutral-50/60 p-3">
                            <div className="flex items-center justify-between">
                                <span className="text-xs font-semibold text-neutral-500">بدهی‌ها</span>
                                <span className="text-sm font-black text-neutral-900">2,300,000</span>
                            </div>
                            <div className="mt-2 flex items-center gap-2 text-xs text-neutral-500">
                                <span className="h-2 w-2 rounded-full bg-amber-500"></span>
                                <span>هزینه تحقق‌یافته پرداخت‌نشده</span>
                            </div>
                        </div>
                    </div>
                </article>
            </div>

            <div className="mt-4 grid gap-4">
                <article className="rounded-2xl border border-neutral-200/70 bg-white p-4 shadow-sm">
                    <div className="flex items-center justify-between">
                        <span className="text-sm font-bold text-neutral-800">وضعیت تراز</span>
                        <span className="text-[11px] font-semibold text-neutral-400">خلاصه</span>
                    </div>
                    <div className="mt-3 flex items-center justify-between gap-3">
                        <div className="text-right">
                            <div className="text-xs text-neutral-500">مجموع بدهکاری</div>
                            <div className="text-base font-extrabold text-neutral-900">23,023,000</div>
                        </div>
                        <div className="h-12 w-px bg-neutral-200"></div>
                        <div className="text-right">
                            <div className="text-xs text-neutral-500">مجموع بستانکاری</div>
                            <div className="text-base font-extrabold text-neutral-900">23,023,000</div>
                        </div>
                    </div>
                    <div className="mt-3 rounded-xl bg-emerald-50 px-3 py-2 text-sm font-semibold text-emerald-700">
                        حساب تراز می‌باشد
                    </div>
                </article>
            </div>
        </section>
    );
}
