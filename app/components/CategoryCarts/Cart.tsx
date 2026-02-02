import Image from "next/image";
import cartStyles from "@/app/styles/category-carts.module.css";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function Cart({id, title, img}: {id:number, title:string, img:string}) {
    const slug = title.trim().toLowerCase().replace(/\s+/g, "_");
    const { lang } = useParams();
    const path = `/${lang}/blog/${slug}`;

    return(
        <Link href={path}>
            <div className={cartStyles.category_cart}>
                <Image
                    src={img}
                    className={cartStyles.img_cart}
                    width={288}
                    height={288}
                    alt={title}
                />
                <div className={cartStyles.text_cart}>{title}</div>
            </div>
        </Link>
    )
}