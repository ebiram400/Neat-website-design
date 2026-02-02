"use client";
import aboutStyles from "@/app/styles/projects.module.css";
import Image from "next/image";

type project = {
    style: string;
    adhesiveStyle: string;
    title: string;
    description: string;
    duration: number;
    area: number;
};

export default function Projects() {
    const carts: project[] = [
        {
            style: aboutStyles.project_cart1,
            adhesiveStyle: aboutStyles.adhesive1,
            title: "پروژه مسکونی لوکس",
            description:
                "طراحی و اجرای کامل ساختمان مسکونی با تمرکز بر معماری مدرن و بهینه سازی فضا",
            duration: 6,
            area: 350,
        },
        {
            style: aboutStyles.project_cart2,
            adhesiveStyle: aboutStyles.adhesive2,
            title: "پروژه مسکونی لوکس",
            description:
                "طراحی و اجرای کامل ساختمان مسکونی با تمرکز بر معماری مدرن و بهینه سازی فضا",
            duration: 6,
            area: 350,
        },
        {
            style: aboutStyles.project_cart3,
            adhesiveStyle: aboutStyles.adhesive3,
            title: "پروژه مسکونی لوکس",
            description:
                "طراحی و اجرای کامل ساختمان مسکونی با تمرکز بر معماری مدرن و بهینه سازی فضا",
            duration: 6,
            area: 350,
        },
    ];
    const totalProjects = 24;

    return (
        <>
            <div className={aboutStyles.project_carts}>
                {carts.map((cart, index) => {
                    return (
                        <div
                            className={[
                                aboutStyles.project_cart,
                                cart.style,
                            ].join(" ")}
                            key={index}
                        >
                            <div className={cart.adhesiveStyle}></div>
                            <div
                                className={aboutStyles.project_cart_header}
                            >
                                <span
                                    className={
                                        aboutStyles.project_cart_titr
                                    }
                                >
                                    {cart.title}
                                </span>
                                <Image
                                    src='/images/icon/building.png'
                                    className={aboutStyles.project_cart_img}
                                    alt='building'
                                    width={63}
                                    height={63}
                                />
                            </div>
                            <div className={aboutStyles.project_cart_text}>
                                {cart.description}
                            </div>
                            <div className={aboutStyles.dotted_line}></div>
                            <div
                                className={aboutStyles.project_cart_bottom}
                            >
                                <div>
                                    <div
                                        className={
                                            aboutStyles.project_cart_int
                                        }
                                    >
                                        {cart.duration}
                                    </div>
                                    <div>ماه</div>
                                </div>
                                <div>
                                    <div
                                        className={
                                            aboutStyles.project_cart_int
                                        }
                                    >
                                        {cart.area}
                                    </div>
                                    <div>مترمربع</div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className={aboutStyles.text_count_projects_base}>
                <div className={aboutStyles.text_count_projects}>
                    <div className={aboutStyles.adhesive_count_right}></div>
                    تا کنون{" "}
                    <span className={aboutStyles.count_projects}>
                        {" "}
                        {totalProjects}+{" "}
                    </span>
                    پروژه با موفقیت و رضایت کارفرما انجام گردیده است
                    <div className={aboutStyles.adhesive_count_left}></div>
                </div>
            </div>
        </>
    );
}
