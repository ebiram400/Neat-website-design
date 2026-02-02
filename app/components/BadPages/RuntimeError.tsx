"use client";
import styles from "@/app/styles/error403.module.css";
import useTranslation from "@/app/lib/useTranslation";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function RuntimeError() {
    const t = useTranslation();

    return (
    <div className={styles.container}>
        <DotLottieReact
            src="/animation/Error.lottie"
            loop
            autoplay
            style={{ width: '200px', height: '200px' }}
        />
        <h1 className={styles.text}>{t("ERROR")}</h1>
    </div>
    );
}