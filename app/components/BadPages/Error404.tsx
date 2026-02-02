"use client"
import errorStyle from '@/app/styles/error404.module.css';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import useTranslation from '@/app/lib/useTranslation';

export default function PageNotFound() {
    const t = useTranslation();
  return (
    <div className={errorStyle.container}>
      <DotLottieReact
        src="/animation/Website maintenance, website problems, 404.lottie"
        loop
        autoplay
        style={{ width: '800px', height: '400px' }}
      />
      <h1 className={errorStyle.text}>{t("NotFound")}</h1>
    </div>
  );
}