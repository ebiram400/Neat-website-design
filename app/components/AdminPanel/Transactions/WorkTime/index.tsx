"use client";

import AddPageIcon from "@/public/images/icon/AddPageIcon";
import AdminHeader from "../../AdminHeader";
import ErrorDelete from "../ErrorDelete";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import WorkTimeCard from "./WorkTimeCard";


interface workTimeInfo{
    id:number;
    name:string;
    working:string;
    salary:string;
    date:string;
};

export default function WorkTimeIndex({ projectId } : { projectId: string }) {

    const workTimeInfos:workTimeInfo[] = [
        { id:0, name:"محمود", working:"360", salary:"700000", date:"1404-06-15" },
        { id:1, name:"مجتبی", working:"270", salary:"600000", date:"1404-06-14" },
        { id:2, name:"رضا", working:"360", salary:"650000", date:"1404-06-11" },
        { id:3, name:"عباس", working:"150", salary:"500000", date:"1404-06-11" }
    ]

    const route = useRouter();

    const [deleteErrorShow,setDeleteErrorShow] = useState<boolean>(false);
    const [transactionIdTarget,setTransactionIdTarget] = useState<number | null>(null);
    const [isLoading, setIsLoading ] = useState<boolean>(false);

    const handleEdit = (transactionId:number)=>{
        route.push(`/dashboard/projects/${projectId}/work_time/new&edit?transactionId=${transactionId}`)
    }

    const handleDelete = (transactionId:number)=>{
        setTransactionIdTarget(transactionId);
        setDeleteErrorShow(true);
    }

    const handleReqquestDelete = ()=>{
        // api useMutate
        setIsLoading(true);

        setIsLoading(false);    
        setTransactionIdTarget(null);
        setDeleteErrorShow(false);
    }

    return(
        <>
            <AdminHeader breadcrumb="کارکرد کارگران" titleLink={projectId} hrefLink={`/dashboard/projects/${projectId}`} />
            <div className="mt-3 w-[90%] mx-auto grid gap-2">
                {workTimeInfos.map((item)=>(
                    <WorkTimeCard key={item.id} onSelectDelete={handleDelete} onSelectEdit={handleEdit} id={item.id} name={item.name} working={item.working} salary={item.salary} />
                ))}
            </div>
            <Link
                href={`/dashboard/projects/${projectId}/work_time/new&edit`}
                className="fixed bottom-5 right-5 h-12 w-12 rounded-full shadow-xl transition hover:-translate-y-0.5 hover:shadow-xl"
                aria-label="افزودن ترنزکشن جدید"
            >
                <AddPageIcon />
            </Link>
            {deleteErrorShow && <ErrorDelete onSelectCancell={()=>setDeleteErrorShow(false)} onSelectOk={handleReqquestDelete} isLoading={isLoading} />}
        </>
    )
}