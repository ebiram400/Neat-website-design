import SalaryIndex from "@/app/components/AdminPanel/Transactions/Salary";


export default async function InvestAndIncomePage({ params }: { params: Promise<{ id: string }> }){

    const { id } = await params;

    return <SalaryIndex projectId={id} />;
}
