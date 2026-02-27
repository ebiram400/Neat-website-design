import ExpensesIndex from "@/app/components/AdminPanel/Transactions/Expenses";


export default async function InvestAndIncomePage({ params }: { params: Promise<{ id: string }> }){

    const { id } = await params;

    return <ExpensesIndex projectId={id} />;
}
