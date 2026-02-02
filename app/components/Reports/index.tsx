import Invoice from "./Invoice";
import Latter from "./Latter";
import ReportStyles from "@/app/styles/reports.module.css"


export default function Reports(){
    return(
        <>
            <div className={ReportStyles.project_name}>گزارش پروژه <span>فلان</span></div>
            <Latter />
            <Invoice />
        </>
    )
}