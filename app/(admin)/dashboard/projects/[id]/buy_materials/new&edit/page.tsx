import NewTransaction from "@/app/components/AdminPanel/Transactions/BuyMaterials/NewTransaction";

type props = {
    params: Promise<{id: string}>;
    searchParams: Promise<{[key: string]: string | string[] | undefined}>;
}

export default async function NewBuyMaterial({ params, searchParams }: props){
    const { id } = await params;
    const { transactionId } = await searchParams;
    
    return <NewTransaction pojectId={id} transactionId={transactionId} />
}