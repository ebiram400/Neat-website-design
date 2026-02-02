import blogStyle from "@/app/styles/blog.module.css";

export default function Blog(){
    return (
        <>
            <div className={blogStyle.chat_head}>گروه <span>طراحی پلان</span></div>
            <div className={blogStyle.chat_body}>
                <div className={blogStyle.sended}>سلام</div>
                <div className={blogStyle.response}>سلام <br />وقت بخیر</div>
                <div className={blogStyle.response}>
                    درباره اضافه کردن یا تغییرات خونه سوالاتی هست که با ارسالشون بهتون جواب میدم. اگر سوال دیگه ای دارید یا
                    مشورتی میخواید که جزو این سوالات نیست میتونید پایین برام ارسالش کنید تا بهتون در اسرع وقت جواب بدم
                </div>
                <div className={blogStyle.sended}>
                    <span>سوال شماره یک نمونه برای تست. با ارسال این سوال میتوانید پاسخ را ببینید آیا؟</span>
                </div>

                <div className={blogStyle.chat_foot}>
                    <div className={blogStyle.input_comment}>
                        <input type="text" className={blogStyle.textNewReq} placeholder="سوال دیگری دارم" />
                    </div>
                    <div className={blogStyle.sendBtn}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{width: "16px"}}>
                            <path fill="currentColor" d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"/>
                        </svg>
                    </div>
                </div>
            </div>        
        </>
    )
}