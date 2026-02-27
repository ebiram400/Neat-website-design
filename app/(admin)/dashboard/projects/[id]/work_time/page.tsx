import WorkTimeIndex from "@/app/components/AdminPanel/Transactions/WorkTime";


export default async function InvestAndIncomePage({ params }: { params: Promise<{ id: string }> }){

    const { id } = await params;

    return <WorkTimeIndex projectId={id} />;
}
