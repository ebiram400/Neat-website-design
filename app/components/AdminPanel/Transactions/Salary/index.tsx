"use client";

import AddPageIcon from "@/public/images/icon/AddPageIcon";
import AdminHeader from "../../AdminHeader";
import ErrorDelete from "../ErrorDelete";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import SalaryCard from "./SalaryCard";


interface consumptionMaterialInfo{
    id:number;
    position:string;
    amount:string;
    date:string;
};

export default function SalaryIndex({ projectId } : { projectId: string }) {

    const consumptionMaterialInfos:consumptionMaterialInfo[] = [
        { id:0, position:"سنگ کار", amount:"10000000", date:"1404-06-15" },
        { id:1, position:"گچ کار", amount:"50000000", date:"1404-06-14" },
        { id:2, position:"لوله کش", amount:"18800000", date:"1404-06-11" },
        { id:3, position:"کارگر و بنا", amount:"520000", date:"1404-06-11" }
    ]

    const route = useRouter();

    const [deleteErrorShow,setDeleteErrorShow] = useState<boolean>(false);
    const [transactionIdTarget,setTransactionIdTarget] = useState<number | null>(null);
    const [isLoading, setIsLoading ] = useState<boolean>(false);

    const handleEdit = (transactionId:number)=>{
        route.push(`/dashboard/projects/${projectId}/salary/new&edit?transactionId=${transactionId}`)
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
            <AdminHeader breadcrumb="دستمزد های پرداختی" titleLink={projectId} hrefLink={`/dashboard/projects/${projectId}`} />
            <div className="mt-3 w-[90%] mx-auto grid gap-2">
                {consumptionMaterialInfos.map((item)=>(
                    <SalaryCard key={item.id} onSelectDelete={handleDelete} onSelectEdit={handleEdit} id={item.id} position={item.position} amount={item.amount} date={item.date} />
                ))}
            </div>
            <Link
                href={`/dashboard/projects/${projectId}/salary/new&edit`}
                className="fixed bottom-5 right-5 h-12 w-12 rounded-full shadow-xl transition hover:-translate-y-0.5 hover:shadow-xl"
                aria-label="افزودن ترنزکشن جدید"
            >
                <AddPageIcon />
            </Link>
            {deleteErrorShow && <ErrorDelete onSelectCancell={()=>setDeleteErrorShow(false)} onSelectOk={handleReqquestDelete} isLoading={isLoading} />}
        </>
    )
}