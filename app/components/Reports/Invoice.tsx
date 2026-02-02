import InvoiceStyles from "@/app/styles/invoice.module.css"
import Image from "next/image"

export default function Invoice(){
    return(
        <>
            <div className={InvoiceStyles.template}>
                <div className={InvoiceStyles.background_pattern}></div>
                <div className={InvoiceStyles.content_wrapper}>
                    <header className={InvoiceStyles.latterhead}>
                        <Image src="/images/logo.png" className={InvoiceStyles.logo_img} alt="logo" width={163} height={136} />
                        <div className={InvoiceStyles.invoice_info}>
                            <div>
                                <span>نام پروژه:</span>
                                <span>بهجت12</span>
                            </div>
                            <div>
                                <span>از تاریخ:</span>
                                <span>1401/06/21</span>
                            </div>
                            <div>
                                <span>تا تاریخ:</span>
                                <span>1401/09/09</span>
                            </div>
                        </div>
                    </header>

                    <table className={InvoiceStyles.table_area}>
                        <thead>
                            <tr>
                                <th>تاریخ</th>
                                <th>شرح</th>
                                <th>دریافتی</th>
                                <th>پرداختی</th>
                                <th>مانده</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1403/06/23</td>
                                <td>تسویه کارگر و بنا</td>
                                <td></td>
                                <td>3000000</td>
                                <td>-3000000</td>
                            </tr>
                            <tr>
                                <td>1403/06/23</td>
                                <td>واریز کارفرما</td>
                                <td>5000000</td>
                                <td></td>
                                <td>2000000</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan={3}></td>
                                <td rowSpan={1}>جمع دریافتی</td>
                                <td rowSpan={1}>5000000</td>
                            </tr>
                            <tr>
                                <td colSpan={3}></td>
                                <td rowSpan={1}>جمع پرداختی</td>
                                <td rowSpan={1}>3000000</td>
                            </tr>
                            <tr>
                                <td colSpan={3}></td>
                                <td rowSpan={1}>مانده حساب</td>
                                <td rowSpan={1}>2000000</td>
                            </tr>
                        </tfoot>
                    </table>

                    <footer className={InvoiceStyles.footer_invoice}>tell: +98 915 250 0654</footer>
                </div>
            </div>
        </>
    )
}