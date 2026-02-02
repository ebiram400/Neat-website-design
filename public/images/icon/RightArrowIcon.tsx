
type props ={
    width?:string,
    height?:string
}

export default function RightArrowIcon({width,height}:props){
    return(
        <svg width={width??"13"} height={height??"22"} viewBox="0 0 13 22" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.5972 11.4901L3.10742 20.9794C2.6499 21.4369 1.90772 21.4369 1.4502 20.9794L0.343261 19.8724C-0.11377 19.4154 -0.114258 18.6752 0.341309 18.2172L7.86231 10.6615L0.341798 3.10535C-0.114257 2.64734 -0.11328 1.9071 0.343752 1.45007L1.45069 0.343139C1.90821 -0.114381 2.65039 -0.114381 3.10791 0.343139L12.5972 9.83289C13.0547 10.2904 13.0547 11.0326 12.5972 11.4901Z"/>
        </svg>
    )
}

