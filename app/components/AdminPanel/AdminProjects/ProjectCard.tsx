"use client"

import PencilIcon from "@/public/images/icon/PencilIcon";
import RightArrowIcon from "@/public/images/icon/RightArrowIcon";
import Link from "next/link";

type Props = {
    onSelect: (value:number)=>void;
    project_id: number;
    end_date: string;
    name: string;
}

export default function ProjectCard({onSelect,project_id,end_date,name}:Props){

    return(
        <>
            <div className="flex items-center justify-between w-[80%] h-14 bg-gray-200 rounded-md mx-auto my-4">
                <Link href={`/dashboard/invoice/${project_id}`} className="text-gray-500 m-2" >
                    <RightArrowIcon />
                </Link>
                <div className="text-gray-700 text-xs">{name}</div>
                <div className="text-gray-700 text-xs">{end_date}</div>
                <div className="text-gray-700 text-xs">{project_id}</div>
                <button type="button" onClick={()=>onSelect(project_id)} className="text-gray-300 w-10 h-10 m-2 cursor-pointer">
                    <PencilIcon />
                </button>
            </div>
        </>
    )
}