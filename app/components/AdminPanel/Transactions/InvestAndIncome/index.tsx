"use client";

import AddPageIcon from "@/public/images/icon/AddPageIcon";
import InvestCard from "./InvestCard";
import AdminHeader from "../../AdminHeader";
import ErrorDelete from "../ErrorDelete";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";


interface consumptionMaterialInfo{
    id:number;
    description:string;
    amount:string;
    date:string;
};

export default function InvestAndIncomeIndex({ projectId } : { projectId: string }) {

    const consumptionMaterialInfos:consumptionMaterialInfo[] = [
        { id:0, description:"واریز محمد", amount:"200000000", date:"1404-06-15" },
        { id:1, description:"واریز علی", amount:"200000000", date:"1404-06-14" },
        { id:2, description:"فروش ضایعات", amount:"200000000", date:"1404-06-11" },
        { id:3, description:"واریز محمد", amount:"200000000", date:"1404-06-11" }
    ]

    const route = useRouter();

    const [deleteErrorShow,setDeleteErrorShow] = useState<boolean>(false);
    const [transactionIdTarget,setTransactionIdTarget] = useState<number | null>(null);
    const [isLoading, setIsLoading ] = useState<boolean>(false);

    const handleEdit = (transactionId:number)=>{
        route.push(`/dashboard/projects/${projectId}/invest&income/new&edit?transactionId=${transactionId}`)
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
            <AdminHeader breadcrumb="درآمد و سرمایه" titleLink={projectId} hrefLink={`/dashboard/projects/${projectId}`} />
            <div className="mt-3 w-[90%] mx-auto grid gap-2">
                {consumptionMaterialInfos.map((item)=>(
                    <InvestCard key={item.id} onSelectDelete={handleDelete} onSelectEdit={handleEdit} id={item.id} description={item.description} amount={item.amount} date={item.date} />
                ))}
            </div>
            <Link
                href={`/dashboard/projects/${projectId}/invest&income/new&edit`}
                className="fixed bottom-5 right-5 h-12 w-12 rounded-full shadow-xl transition hover:-translate-y-0.5 hover:shadow-xl"
                aria-label="افزودن ترنزکشن جدید"
            >
                <AddPageIcon />
            </Link>
            {deleteErrorShow && <ErrorDelete onSelectCancell={()=>setDeleteErrorShow(false)} onSelectOk={handleReqquestDelete} isLoading={isLoading} />}
        </>
    )
}