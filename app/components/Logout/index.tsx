"use client";
import { useEffect } from "react";
import styles from "@/app/styles/logout.module.css";
import { useParams, useRouter } from "next/navigation";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import useTranslation from "@/app/lib/useTranslation";

export default function Logout() {
    const router = useRouter();
    const t = useTranslation();
    const { lang } = useParams<{ lang: string }>();

    useEffect(() => {
        // پاک کردن کوکی‌ها
        document.cookie.split(";").forEach((c) => {
            document.cookie = c
                .replace(/^ +/, "")
                .replace(/=.*/, `=;expires=${new Date().toUTCString()};path=/`);
        });

        const timer = setTimeout(() => {
            const path = "/"+lang;
            router.push(path);
        }, 5000);

        return () => clearTimeout(timer);
    }, [router, lang]);

    return (
        <div className={styles.container}>
            <DotLottieReact
                src='/animation/Lock opens and turns into a green tick.lottie'
                loop
                autoplay
                style={{ width: 300, height: 300 }}
            />
            <div className={styles.message}>
                {t("LOGOUTMASSAGE")}
            </div>
        </div>
    );
}
