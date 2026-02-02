import type { Metadata } from "next";
import "@/app/styles/variables.module.css";
import Header from "@/app/components/Header";
import React from "react";
import ReactQueryProvider from "@/app/lib/ReactQueryClient";

export const metadata: Metadata = {
  title: "Novin Ashian",
  description: "شرکت نوین آشیان، متخصص در بازسازی، معماری و خدمات عمرانی. دریافت مشاوره رایگان از طریق چت هوشمند: سؤالات آماده در موضوعاتی مانند لوله‌کشی، تغییر نقشه داخلی، رنگ‌آمیزی و بیشتر. ورود کارفرمایان برای گزارش پروژه و هزینه‌ها. سایت سه‌زبانه (فارسی، انگلیسی، عربی). برای اطلاعات بیشتر، درباره ما را ببینید.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body>
        <ReactQueryProvider>
          <Header/>
          {children}
        </ReactQueryProvider>
      </body>
    </html>
  );
}
