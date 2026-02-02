import AdminHeader from "../AdminHeader";
import ProjectCards from "./ProjectCards";


export default function AdminProjects(){
    return(
        <>
            <AdminHeader breadcrumb="پروژه ها" titleLink="داشبورد" hrefLink="/dashboard" />
            <ProjectCards />
        </>
    )
}