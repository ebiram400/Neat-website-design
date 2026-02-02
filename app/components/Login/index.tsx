"use client";
import loginStyle from "@/app/styles/login.module.css"
import Image from "next/image"
import Link from "next/link";
import { useParams } from "next/navigation";


export default function Login(){
    const { lang } = useParams();
    return(
        <>
            <div className={loginStyle.background_blur}>   
                <div className={loginStyle.background_login}>
                    <Image src="/images/backgrond-login.png" className={loginStyle.bg_image_login} alt="pentagon" width={720} height={480} />
                    <Link href={`/${lang}`}>
                        <Image src="/images/icon/cross.svg" className={loginStyle.close_login} alt="close" width={20} height={20} />
                    </Link>
                    <form className={loginStyle.loginform}>
                        <div className={loginStyle.text} >کارفرمای گرامی شماره همراه و رمز عبور خود را وارد نمایید</div>
                        <input type="text" maxLength={11} minLength={11} placeholder=" 09---------" className={loginStyle.input_tel} pattern="[0-9]{11}" />
                        <input type="text" maxLength={4} minLength={4} placeholder="Password" className={loginStyle.input_password} pattern="[0-9]{4}" />
                        <button type="submit" className={loginStyle.login_button}>ورود</button>
                    </form>
                </div>
            </div>
        </>
    )
}