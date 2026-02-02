"use client"

import useTranslation from "@/app/lib/useTranslation";
import footerStyle from "@/app/styles/contact-us.module.css"

export default function Footer({onSelect}: {onSelect: (k:"a" | "b" | "c" | "d" | "e") => void}) {
    const t = useTranslation();

    return(
        <>
            <footer className={footerStyle.footer}>
                <div className={footerStyle.footer_section} onClick={()=>onSelect("b")}>{t("CONTACTUS")}</div>
                <div className={footerStyle.footer_section} onClick={()=>onSelect("c")}>{t("OURTEAM")}</div>
                <div className={footerStyle.footer_section} onClick={()=>onSelect("a")}>{t("PROJECTS")}</div>
                <div className={footerStyle.footer_section} onClick={()=>onSelect("d")}>{t("ABOUTSITE")}</div>
                <div className={footerStyle.footer_section} onClick={()=>onSelect("e")}>{t("ABOUTNOVINASHIAN")}</div>
            </footer>
        </>
    )
}