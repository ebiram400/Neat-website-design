"use client";

import AddPageIcon from "@/public/images/icon/AddPageIcon";
import BuyMaterialCard from "./BuyMaterialCard";
import AdminHeader from "../../AdminHeader";
import { useState } from "react";
import ErrorDelete from "../ErrorDelete";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface BuyMaterialInfo{
    id:number;
    type:string;
    quantity:number;
    unit:string;
    amount:string;
    date:string;
};

export default function BuyMaterialsIndex({ projectId }: { projectId: string }) {

    const BuyMaterialInfos:BuyMaterialInfo[] = [
        { id:0, type:"آهن", quantity:2, unit:"شاخه", amount:"65000000", date:"1404-06-15" },
        { id:1, type:"گچ", quantity:4, unit:"کیسه", amount:"2000000", date:"1404-06-14" },
        { id:2, type:"سیمان", quantity:10, unit:"کیسه", amount:"4000000", date:"1404-06-11" },
        { id:3, type:"شن", quantity:1, unit:"وانت", amount:"9000000", date:"1404-06-11" }
    ]

    const route = useRouter();

    const [deleteErrorShow,setDeleteErrorShow] = useState<boolean>(false);
    const [transactionIdTarget,setTransactionIdTarget] = useState<number | null>(null);
    const [isLoading, setIsLoading ] = useState<boolean>(false);

    const handleEdit = (transactionId:number)=>{
        route.push(`/dashboard/projects/${projectId}/buy-materials/new?transactionId=${transactionId}`)
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
            <AdminHeader breadcrumb="هزینه مصالح" titleLink={projectId} hrefLink={`/dashboard/projects/${projectId}`} />
            <div className="mt-3 w-[90%] mx-auto grid gap-2">
                {BuyMaterialInfos.map((item)=>(
                    <BuyMaterialCard key={item.id} onSelectDelete={handleDelete} onSelectEdit={handleEdit} id={item.id} type={item.type} quantity={item.quantity} unit={item.unit} amount={item.amount} date={item.date} />
                ))}
            </div>
            <Link
                href={`/dashboard/projects/${projectId}/buy-materials/new`}
                className="fixed bottom-5 right-5 h-12 w-12 rounded-full shadow-xl transition hover:-translate-y-0.5 hover:shadow-xl"
                aria-label="افزودن ترنزکشن جدید"
            >
                <AddPageIcon />
            </Link>
            {deleteErrorShow && <ErrorDelete onSelectCancell={()=>setDeleteErrorShow(false)} onSelectOk={handleReqquestDelete} isLoading={isLoading} />}
        </>
    )
}