'use client';
import cartStyles from "@/app/styles/category-carts.module.css";
import Cart from "./Cart";
import { useParams } from "next/navigation";
import { useRef } from "react";
import RightArrowIcon from "@/public/images/icon/RightArrowIcon";
import LeftArrowIcon from "@/public/images/icon/LeftArrowIcon";

type cart = {
    id: number;
    title: string;
    img: string;
}

function getTitleByLang(id: number, lang: string): string {

    const titles = {
        1: ['طراحی پلان', 'Plan Design', 'تصميم خطة'],
        2: ['تاسیسات برقی', 'Electrical Installations', 'التركيبات الكهربائية'],
        3: ['درب و پنجره', 'Doors and Windows', 'الأبواب والنوافذ'],
        4: ['سفت کاری', 'skeleton', 'الهيكل العظمي'],
        5: ['سقف و عایق', 'Roof and Insulation', 'السقف والعزل'],
        7: ['سیستم گرمایش و سرمایش', 'Heating and Cooling System', 'نظام التدفئة والتبريد'],
        8: ['طراحی نما', 'Facade Design', 'تصميم الواجهة'],
        9: ['کابینت و کمد دیواری', 'Cabinets and Wardrobes', 'الخزائن والخزائن'],
        10: ['لوله کشی آب و فاضلاب', 'Water and Sewage Plumbing', 'سباكة المياه والصرف الصحي'],
        11: ['نازک کاری', 'Finishing Work', 'العمل النهائي'],
        12: ['نورپردازی', 'Lighting', 'الإضاءة'],
        13: ['هوشمندسازی', 'Smartening', 'التذكية']
    } as { [key: number]: [string, string, string] };

    const langIndex = lang === 'en' ? 1 : lang === 'ar' ? 2 : 0;
    return titles[id] ? titles[id][langIndex] : '';
}

export default function Carts() {

    const { lang } = useParams<{ lang: string }>();
    const scrollRef = useRef<HTMLDivElement | null>(null);

    const handleNext = () => {
        scrollRef.current?.scrollBy({ left: 300 });
    };
    const handlePrev = () => {
        scrollRef.current?.scrollBy({ left: -300 });
    };
    
    
    const carts:cart[] = [
        { id: 1, title: getTitleByLang(1, lang), img: '/images/طراحی-پلان.png' },
        { id: 2, title: getTitleByLang(2, lang), img: '/images/تاسیسات-برقی.png' },
        { id: 3, title: getTitleByLang(3, lang), img: '/images/درب-و-پنجره.png' },
        { id: 4, title: getTitleByLang(4, lang), img: '/images/سفت-کاری.png' },
        { id: 5, title: getTitleByLang(5, lang), img: '/images/سقف-و-عایق.png' },
        { id: 7, title: getTitleByLang(7, lang), img: '/images/سیستم-گرمایشی-و-سرمایشی.png' },
        { id: 8, title: getTitleByLang(8, lang), img: '/images/طراحی-نما.png' },
        { id: 9, title: getTitleByLang(9, lang), img: '/images/کابینت-و-کمد-دیواری.png' },
        { id: 10, title: getTitleByLang(10, lang), img: '/images/لوله-کشی-آب-و-فاضلاب.png' },
        { id: 11, title: getTitleByLang(11, lang), img: '/images/نازک-کاری.png' },
        { id: 12, title: getTitleByLang(12, lang), img: '/images/نور-پردازی.png' },
        { id: 13, title: getTitleByLang(13, lang), img: '/images/هوشمند-سازی.png' },
    ];

    return (
        <>
            <div ref={scrollRef} className={cartStyles.category_carts}>
                {carts.map((cart)=>{
                    return(
                        <Cart key={cart.id} {...cart}/>
                    )
                })}
            </div>
            <div className={cartStyles.button_scrolls}>
                <button type="button" onClick={handlePrev} className={cartStyles.button_scroll}>
                    <LeftArrowIcon width="8"/>
                    <span>prev</span>
                </button>
                <button type="button" onClick={handleNext} className={cartStyles.button_scroll}>
                    <span>next</span>
                    <RightArrowIcon width="8" />
                </button>
            </div>
        </>
    );
}
