import Invoices from "@/app/components/AdminPanel/Invoices";

export default async function InvoicesPage({params}:{ params: Promise<{ id: string }> }) {
    const { id } = await params;
    return <Invoices projectId={id} />
}