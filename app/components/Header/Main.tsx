"use client"
import headerStyles from "@/app/styles/header.module.css";
import Image from "next/image";
import Link from "next/link";
import HeaderMenu from "./HeaderMenu";
import useTranslation from "@/app/lib/useTranslation";
import { useParams } from "next/navigation";
import { useState } from "react";

type menuItem = {
    id: number;
    title: string;
    href: string;
    img: string;
}

type authStatus = "loading" | "authenticated" | "unauthenticated";

export default function Main() {
    const [resAuth,setResAuth] = useState<authStatus>("unauthenticated");
    const t = useTranslation();
    const { lang } = useParams();

    const menuItems :menuItem[] =  [
        { id: 1, title: t("REPORTS"), href: "/" + lang + "/reports", img: '/images/icon/reports.svg' } ,
        { id: 2, title: t("ABOUTUS"), href: "/" + lang + "/about-us", img: '/images/icon/contact.svg' },
        { id: 3, title: t("LOGOUT"), href: "/" + lang + "/logout", img: '/images/icon/logout.svg'},
        { id: 4, title: t("LANGUAGE"), href: "/" + lang + "/select-language", img: '/images/icon/language.svg'},
    ];

    if (resAuth !== "authenticated"){
        delete menuItems[0];
        menuItems[2].title = t("LOGIN");
        menuItems[2].href = "/" + lang + "/login";
        menuItems[2].img = '/images/icon/login.svg';
    }
   

    return (
        <header className={headerStyles.header}>
            <Link href={'/'+lang}>
                <Image src='/images/logo.png' alt='logo' width={176} height={152} className={headerStyles.logo} />
            </Link>
            <div className={headerStyles.navbar_menu}>
                {menuItems.map((item) => (
                    <HeaderMenu key={item.id} {...item} ></HeaderMenu>
                ))}
            </div>
        </header>
    );
}
