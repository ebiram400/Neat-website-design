import LoadingSpin from "../LoadingSpin";

type props = {
    onSelectCancell: ()=> void;
    onSelectOk: ()=> void;
    isLoading: boolean;
}
export default function ErrorDelete({onSelectCancell, onSelectOk, isLoading}:props){

    return(
        <>
            <div className="w-screen h-screen pointer-events-auto z-50 fixed inset-0 bg-white/10 backdrop-blur-[2px] backdrop-saturate-50">
                <div tabIndex={-1} className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full">
                    <div className="relative p-4 w-full max-w-md h-full md:h-auto">
                        <div className="relative p-4 text-center bg-linear-180 from-white to-20% shadow rounded-lg sm:p-5">
                            <svg className="text-gray-400 dark:text-gray-500 w-11 h-11 mb-3.5 mx-auto" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd"></path></svg>
                            <p className="mb-4 text-gray-800 ">از حذف این آیتم مطمئن هستید؟</p>
                            <div className="flex justify-center items-center space-x-4">
                                <button onClick={onSelectOk} type="button" className="py-2 px-3 text-sm font-medium text-center text-white bg-red-500 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 ">
                                    {isLoading ? 
                                    <LoadingSpin cssStyle="size-4" />
                                    : "مطئمنم"}
                                </button>
                                <button onClick={onSelectCancell} type="button" className="py-2 px-3 text-sm font-medium text-gray-100 bg-gray-400 rounded-lg border border-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10">
                                    انصراف
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
