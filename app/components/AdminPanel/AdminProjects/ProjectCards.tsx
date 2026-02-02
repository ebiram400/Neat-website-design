"use client"

import AddPageIcon from "@/public/images/icon/AddPageIcon";
import ProjectCard from "./ProjectCard";
import { useState } from "react";
import EditProject from "./EditProject";

interface ProjectCardInterface{
    id:number,
    end_date:string,
    project_name:string
}

export default function ProjectCards(){
    const projects:ProjectCardInterface[] = [
        { id : 1, end_date : "1401/06/23", project_name : "کاشانی 59"},
        { id : 2, end_date : "1401/09/20", project_name : "حجت 51"},
        { id : 3, end_date : "1402/09/03", project_name : "حسین باشی"}
    ]

    const [editProjectShow,setEditProjectShow] = useState<boolean>(false);
    const [projectIdTarget,setProjectIdTarget] = useState<number|null>(null);
    
    const handleEditProject = (projectId?:number)=>{
        setProjectIdTarget(projectId??null);
        setEditProjectShow(true);
    };

    return(
        <>
            {projects.map((project)=>(
                <ProjectCard onSelect={handleEditProject} key={project.id} project_id={project.id} end_date={project.end_date} name={project.project_name} />
            ))}
            {editProjectShow &&
                <EditProject project_id={projectIdTarget} onSelectShow={setEditProjectShow} />
            }
            <button onClick={()=>handleEditProject()} className="w-12 h-12 fixed bottom-4 right-4 cursor-pointer">
                <AddPageIcon />
            </button>
        </>
    )
}