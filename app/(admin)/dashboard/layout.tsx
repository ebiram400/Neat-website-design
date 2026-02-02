import type { Metadata } from "next";
import "@/app/styles/globals.css";
import React from "react";
import ReactQueryProvider from "@/app/lib/ReactQueryClient";

export const metadata: Metadata = {
  title: "مدیریت نوین آشیان",
  description: "داشبورد مدیریت سایت شامل ساخت پروژه ها، کارفرمایان و گزارشات مربوطه"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className="light">
      <body>
        <ReactQueryProvider>
          {children}
        </ReactQueryProvider>
      </body>
    </html>
  );
}
