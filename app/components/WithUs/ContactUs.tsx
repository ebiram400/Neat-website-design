import Image from "next/image";
import aboutStyles from "@/app/styles/contact-us-end-page.module.css";
export default function ContactUs() {
    return (
        <>
            <div className={aboutStyles.end_page}>
                ما در نوین آشیان همیشه در دسترس شما هستیم. اگر سوالی دارید یا
                نیاز به مشاوره دارید، به راحتی می‌توانید از طریق هرکدام از
                روش‌های زیر با ما در تماس باشید. همکاران ما پاسخگوی شما خواهند
                بود
                <div className={aboutStyles.support_method}>
                    <Image
                        src='/images/icon/eitaa.svg'
                        className={aboutStyles.pointer}
                        alt='eitaa'
                        width={60}
                        height={60}
                    />
                    <Image
                        src='/images/icon/whatsapp.svg'
                        className={aboutStyles.pointer}
                        alt='whatsapp'
                        width={60}
                        height={60}
                    />
                    <Image
                        src='/images/icon/telegram.svg'
                        className={aboutStyles.pointer}
                        alt='telegram'
                        width={60}
                        height={60}
                    />
                    <Image
                        src='/images/icon/instagram.svg'
                        className={aboutStyles.pointer}
                        alt='instagram'
                        width={60}
                        height={60}
                    />
                    <div className={aboutStyles.phone}>
                        <Image
                            src='/images/icon/tell.svg'
                            className={aboutStyles.img_phone}
                            alt='phone'
                            width={60}
                            height={60}
                        />
                        <span>0915 2500 654</span>
                    </div>
                </div>
            </div>
        </>
    );
}
