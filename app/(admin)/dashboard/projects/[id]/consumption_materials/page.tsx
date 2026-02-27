import ConsumptionMaterialsIndex from "@/app/components/AdminPanel/Transactions/ConsumptionMaterials";


export default async function ConsumptionMaterialsPage({ params }: { params: Promise<{ id: string }> }){

    const { id } = await params;

    return <ConsumptionMaterialsIndex projectId={id} />;
}
