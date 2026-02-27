import NewTransaction from "@/app/components/AdminPanel/Transactions/WorkTime/NewTransaction";

type props = {
    params: Promise<{id: string}>;
    searchParams: Promise<{[key: string]: string | string[] | undefined}>;
}

export default async function NewSalary({ params, searchParams }: props){
    const { id } = await params;
    const { transactionId } = await searchParams;
    
    return <NewTransaction projectId={id} transactionId={transactionId} />
}
