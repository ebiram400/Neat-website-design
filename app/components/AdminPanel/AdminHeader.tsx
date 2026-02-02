import Link from "next/link";

export default function AdminHeader({breadcrumb,titleLink,hrefLink}:{breadcrumb:string,titleLink:string,hrefLink:string}){
    return(
        <div className="flex items-center justify-center bg-blue-700 rounded-e-full w-full">
            <div className="flex items-center justify-center font-[Vazir] font-bold text-lg w-1/2 bg-[#f9f9f9] rounded-e-full">
                <h1 className='text-blue-700 p-2.5'>
                    {"> "}
                    <span>{breadcrumb}</span>
                </h1>
            </div>
            <div className="flex items-center justify-center font-bold text-lg w-1/2 text-white cursor-pointer">
                <Link href={hrefLink} className="p-2.5">{titleLink}</Link>
            </div>
        </div>
    )
}