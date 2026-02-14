

export default function LoadingSpin({cssStyle}:{cssStyle:string}){

    return(
        <div className={`animate-spin border-2 border-current border-t-transparent rounded-full text-primary ${cssStyle}`}>
            <span className="sr-only">Loading...</span>
        </div>
    )
}