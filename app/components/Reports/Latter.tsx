import LatterStyles from "@/app/styles/latter.module.css"
import Image from "next/image"
export default function Latter(){
    return(
        <>
            <div className={LatterStyles.template}>
                <div className={LatterStyles.background_pattern}></div>
                <div className={LatterStyles.content_wrapper}>
                    <header className={LatterStyles.latterhead}>
                        <Image src="/images/logo.png" className={LatterStyles.logo_img} alt="logo" height={136} width={163} />
                        <div className={LatterStyles.company_title}>
                            <h1 className={LatterStyles.company_name}>گروه فنی مهندسی نوین آشیان</h1>
                            <p className={LatterStyles.company_slogan}>پیشگام در صنعت ساخت و ساز مدرن</p>
                        </div>
                        <div className={LatterStyles.latter_date}>
                            <div>
                                <span>تاریخ:</span>
                                <span id="date"></span>
                            </div>
                            <div>
                                <span>پیوست:</span>
                                <span>ندارد</span>
                            </div>
                        </div>
                    </header>

                    <div className={LatterStyles.decorative_line}></div>

                    <main className={LatterStyles.content_area}>
                        <p>
                            جناب آقای / سرکار خانم….. مدیر محترم اجرایی نمایشگاه….. با سلام و احترام بدین‌وسیله به استحضار
                            می‌رساند اینجانب….. با مسئولیت….. در مرکز / مجموعه / شرکت….. پس از مطالعه شرایط پذیرش متقاضیان و
                            پر نمودن فرم تکمیلی برنامه‌ها بدین‌وسیله آمادگی خود و مجموعه مذکور را جهت حضور فعال و موثر در
                            نمایشگاه………. به حضور اعلام می‌دارم. خواهشمند است دستور فرمایید اقدامات لازم مبذول و از نتیجه این
                            امور را مطلع نمایند. بدیهی است هرگونه تغییر در تصمیم گیر‌ی حضور این شرکت در نمایشگاه الزاماً به
                            صورت کتبی اعلام خواهد شد و در غیر این صورت مسئولیت مالی آن بر عهده این شرکت خواهد بود. به امید
                            آنکه بتوانیم با کمک یکدیگر گامی هرچند کوچک در بهبود فضای کسب و کار کشورمان برداریم.
                        </p>
                    </main>

                    <footer className={LatterStyles.footer}>
                        <div className={LatterStyles.contact_grid}>
                            <div className={LatterStyles.contact_item}>
                                <strong>دفتر مرکزی</strong>
                                <p>مشهد، خیابان هاشمی نژاد</p>
                            </div>
                            <div className={LatterStyles.contact_item}>
                                <strong>تماس با ما</strong>
                                <p>٦٥٤ ٢٥٠٠ ۹۱۵ ۹۸+</p>
                            </div>
                            <div className={LatterStyles.contact_item}>
                                <strong>ارتباط آنلاین</strong>
                                <p>NovinAshian.ir</p>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </>
    )
}