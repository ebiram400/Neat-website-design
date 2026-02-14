import BuyMaterialsIndex from "@/app/components/AdminPanel/Transactions/BuyMaterials";


export default async function BuyMaterials({params}:{ params: Promise<{ id: string }> }){

    const { id } = await params;

    return <BuyMaterialsIndex projectId={id} />
}