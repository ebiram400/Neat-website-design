'use client';
import headerStyles from "@/app/styles/header.module.css";
import Image from "next/image";
import Link from "next/link";

export default function HeaderMenu({id,title,href,img}:{id: number,title: string, href: string,img: string}) {


    return (
        <>
            <Link href={href} className={headerStyles.navbar_item}>
                <div className={headerStyles.background_item}>
                    <Image src='/images/icon/pentagon.png' alt="headitem" className={headerStyles.path_navbar_item} width={96} height={80} />
                    <div className={headerStyles.text_navbar_item}>{title}</div>
                </div>
                <Image src={img} alt={title} className={headerStyles.icon_navbar_item} width={48} height={40} />
            </Link>
        </>
    );
}
