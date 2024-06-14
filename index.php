<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>index</title>
    <link rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
    <link href="./bootstrap-5.0.2-dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" href="./css/index.css">
</head>

<body>
    <!-------------header------------->
    <div class="row d-flex align-items-center justify-content-between color-nav">
        <div class="col d-flex flex-column">
            <div class="col d-flex">
                <span class="material-symbols-outlined color-green fs-2 text-shadow-cyan">
                    location_on
                </span>
                <span class="color-cyan fs-5 ms-2 text-shadow-cyan">
                    مشهد
                </span>
            </div>
            <div class="col mt-2  d-flex">
                <span class="material-symbols-outlined color-green fs-2 text-shadow-green" style="cursor: pointer;">
                    phone_in_talk
                </span>
                <a href="tel:09382335182" class="text-decoration-none text-shadow-cyan">
                    <span class="color-cyan fs-5 ms-2">
                        0938 233 5182
                    </span>
                </a>
            </div>
        </div>
        <div class="col d-flex flex-column align-items-end">

            <div class="col report-nav"></div>

            <div id="user-nav" class="col d-flex flex-column align-items-center">
                <span class="material-symbols-outlined fs-1 icon-user-nav color-green">
                    person
                </span>
                <div class=" text-user-nav color-green fs-6 text-nowrap">ورود کارفرما</div>
            </div>
        </div>
    </div>
    <script>
        let usernav = document.getElementById('user-nav')
        usernav.addEventListener("click", e => {
            e.preventDefault();
            let ways = document.getElementsByClassName("text-user-nav");
            if (ways[0].innerHTML == 'ورود کارفرما') {
                location.href = './login.html';
            } else {
                location.href = './destroy-username.php';
            }
        })

    </script>
    <!---------slide bar--------->
    <div class="slideshow-container">

        <div class="mySlides fade">
            <img src="./front-react/public/images/1.jpg" style="width:100%" class="slide-nav">
        </div>

        <div class="mySlides fade">
            <img src="./front-react/public/images/3.jpg" style="width:100%" class="slide-nav">
        </div>

        <div class="mySlides fade">
            <img src="./front-react/public/images/12.jpg" style="width:100%" class="slide-nav">
        </div>

        <div class="mySlides fade">
            <img src="./front-react/public/images/13.jpg" style="width:100%" class="slide-nav">
        </div>

        <div class="mySlides fade">
            <img src="./front-react/public/images/16.jpg" style="width:100%" class="slide-nav">
        </div>

        <div class="mySlides fade">
            <img src="./front-react/public/images/18.jpg" style="width:100%" class="slide-nav">
        </div>

        <div
            class="dropfilter d-flex flex-column align-items-center position-absolute top-50 start-50 translate-middle">
            <div class="mt-md-2 mt-6"><a href="./index.php"><img src="./front-react/public/images/logo-novin.png"
                        class="logo-nav"></a></div>
            <div class="color-cyan fs-1 fw-bold text-shadow-cyan mt-3">گروه فنی مهندسی نوین آشیان </div>
            <div class="color-green fs-4 fw-bold text-shadow-green mt-5">تضمین کمترین زمان </div>
            <div class="color-green fs-4 fw-bold text-shadow-green mt-2">تضمین پایین ترین قیمت</div>
            <div class="col color-green fs-4 fw-bold text-shadow-green mt-2">تضمین بالاترین کیفیت</div>
        </div>
    </div>
    <script>
        let slideIndex = 0;
        showSlides();

        function showSlides() {
            let i;
            let slides = document.getElementsByClassName("mySlides");
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slideIndex++;
            if (slideIndex > slides.length) { slideIndex = 1 }

            slides[slideIndex - 1].style.display = "block";
            setTimeout(showSlides, 3000); // Change image every 2 seconds
        }
    </script>
    <div id="new-page"></div>
    <!-------------bread crumb--------->
    <div id="stem" class="d-flex justify-content-center mt-4">
        <a href="#" class="text-decoration-none">
            <div id="animate" class="color-cyan fs-6 fw-bold">صفحه اول</div>
        </a>
        <span class="material-symbols-outlined color-cyan">
            signpost
        </span>
    </div>
    <!------------services------------>
    <div id="stem" class="container">
        <div class="row mt-3 justify-content-between">
            <div class="col-md-5 mt-5">

            </div>
            <div class="col-md-5 mt-5">
                <div class="row justify-content-around ">
                    <div class="col-4 card_service text-center">
                        <span class="material-symbols-outlined fs-1 mt-3">
                            Foundation
                        </span>
                        <div class="color-green fw-bold fs-5 text-nowrap">گچ کاری</div>
                    </div>
                    <div class="col-4 card_service text-center">
                        <span class="material-symbols-outlined fs-1 mt-3">
                            engineering
                        </span>
                        <div class="color-green fw-bold fs-6">تغییر و ساخت</div>
                    </div>
                </div>
                <div class="row justify-content-around mt-3">
                    <div class="col-4 card_service text-center">
                        <span class="material-symbols-outlined fs-1 mt-3">
                            House_Siding
                        </span>
                        <div class="color-green fw-bold fs-5 text-nowrap">دیوارپوش</div>
                    </div>
                    <div class="col-4 card_service text-center">
                        <span class="material-symbols-outlined fs-1 mt-3">
                            Roofing
                        </span>
                        <div class="color-green fw-bold fs-6">انواع سقف و نورپردازی</div>
                    </div>
                </div>
                <div class="row justify-content-around mt-3">
                    <div class="col-4 card_service text-center">
                        <span class="material-symbols-outlined fs-1 mt-3">
                            carpenter
                        </span>
                        <div class="color-green fw-bold fs-6 ">کابینت و کمد دیواری</div>
                    </div>
                    <div class="col-4 card_service text-center">
                        <span class="material-symbols-outlined fs-1 mt-3">
                            Curtains
                        </span>
                        <div class="color-green fw-bold fs-5 text-nowrap">انواع کفپوش</div>
                    </div>
                </div>
                <div class="row justify-content-around mt-3">
                    <div class="col-4 card_service text-center">
                        <span class="material-symbols-outlined fs-1 mt-3">
                            door_open
                        </span>
                        <div class="color-green fw-bold fs-5 text-nowrap">انواع درب</div>
                    </div>
                    <div class="col-4 card_service text-center">
                        <span class="material-symbols-outlined fs-1 mt-3">
                            brush
                        </span>
                        <div class="color-green fw-bold fs-6 text-nowrap">پتینه و نقاشی</div>
                    </div>
                </div>
                <div class="row justify-content-around mt-3">
                    <div class="col-4 card_service text-center">
                        <span class="material-symbols-outlined fs-1 mt-3">
                            valve
                        </span>
                        <div class="color-green fw-bold fs-6">لوله کشی آب و فاضلاب</div>
                    </div>
                    <div class="col-4 card_service text-center">
                        <span class="material-symbols-outlined fs-1 mt-3">
                            gastroenterology
                        </span>
                        <div class="color-green fw-bold fs-6">تاسیسات برقی و گازی</div>
                    </div>
                </div>
            </div>
        </div>
        <script>
            // animation
            window.addEventListener("scroll", () => {
                let anime = document.getElementById('animate');
                let rect = anime.getBoundingClientRect();
                let viewHight = Math.max(document.documentElement.clientHeight, window.innerHeight);
                let target = document.querySelectorAll(".card_service");
                target.forEach(element => {
                    if ((rect.top + viewHight) <= viewHight) {
                        element.classList.add('addanime');
                    } else {
                        element.classList.remove('addanime')
                    }
                });
            })
        </script>
    </div>

    <hr id="stem" class="animate2 mt-5 mb-5" style=" color:#18191B; width: 70%; margin-left: 15%;">

    <!-------------circle------------->
    <div id="stem" class="container info">
        <div class="circle">
            <div class="color-cyan fs-2 fw-bold text-center">کارگران</div>
            <div class="color-white fs-1 fw-bold text-center">+44</div>
        </div>
        <div class="circle" style="cursor: pointer;">
            <div class="color-cyan fs-2 fw-bold text-center">پروژه ها</div>
            <div class="color-white fs-1 fw-bold text-center">+25</div>
            <div class="fw-bold d-flex fs-7"> لیست پروژه ها <span class="material-symbols-outlined fs-6">
                    ads_click
                </span></div>
        </div>
        <script>
            // animation
            window.addEventListener("scroll", () => {
                let anime2 = document.getElementsByClassName('animate2');
                let rect = anime2[0].getBoundingClientRect();
                let viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
                let target = document.querySelectorAll(".circle");
                if ((rect.bottom + viewHeight / 2) <= viewHeight) {
                    target.forEach(element => {
                        element.classList.add('addanime');
                    });
                } else {
                    target.forEach(element => {
                        element.classList.remove('addanime');
                    });
                }
            })
        </script>
    </div>

    <!-------------footer------------->
    <div class="footer">
        <div class="row justify-content-around">

            <div class="col-md-4">
                <div class="text-center mb-5"><img src="./front-react/public/images/logo-novin.png" width="200px"></div>
                <div class="text-center">
                    <a href="https://eitaa.com/Moeinrahimi110" class="m-2"><img
                            src="./front-react/public/images/Group 2..svg"></a>
                    <a href="tel:/09382335182" class="m-2"><img src="./front-react/public/images/Group 3..svg"></a>
                    <a href="t.me/:rahimimoein1" class="m-2"><img src="./front-react/public/images/telegram..svg"></a>
                    <a href="" class="m-2"><img src="./front-react/public/images/whatsapp..svg"></a>
                </div>
            </div>

            <div class="col-md-4">
                <div class="color-cyan fs-2 fw-bold text-center mb-3 mt-3">درباره سایت</div>
                <div class="color-cyan fs-6 text-center fw-bold border-start border-end p-4">هدف این سایت معرفی و سهولت
                    دسترسی مردم عزیز مشهد به خدمات بازسازی منزل و رفع دغدغه های عزیزانی است که در این زمینه تجربه کافی
                    ندارند و به دنبال فرد قابل اعتماد هستند که گزارش کار را به صورت واضح ارائه دهد و از پس مشکلات فنی
                    کار برآید.
                    همچنین کارفرمایان عزیز میتوانند گزارشات را به صورت آنلاین در قسمت ورود کارفرما ببینند.
                    از تجربیات مان نیز به صورت پرسش و پاسخ در هر بخش گنجانده شده که مقالات مفید و ارزشمندی میتوانند
                    باشند
                </div>
            </div>

            <div class="col-md-4">
                <div class="color-cyan fs-2 fw-bold text-center mb-3 mt-3">درباره نوین آشیان</div>
                <div class="color-cyan fs-6 text-center fw-bold p-4">
                    از سال 94 شروع به فعالیت در حوزه ساخت و ساز زیر نظر مهندسان با تجربه کردیم و با اضافه کردن دانش خود
                    در این زمینه طی تحصیلات آکادمیک و گواهینامه های فنی این راه را ادامه دادیم. تا به امروز در پروژه های
                    مختلف و با حل مشکلات مختلف در پروژه ها تجارب گوناگونی را بدست آورده ایم و امروز آماده خدمت رسانی به
                    شما عزیزان هستیم
                </div>
            </div>
        </div>
    </div>

    <!-------------javascript------- -->
    <script src="./js/index.js"></script>
</body>

</html>