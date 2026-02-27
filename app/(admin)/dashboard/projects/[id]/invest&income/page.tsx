import InvestAndIncomeIndex from "@/app/components/AdminPanel/Transactions/InvestAndIncome";


export default async function InvestAndIncomePage({ params }: { params: Promise<{ id: string }> }){

    const { id } = await params;

    return <InvestAndIncomeIndex projectId={id} />;
}
