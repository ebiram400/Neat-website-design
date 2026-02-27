'use client'

export default function useTime(){
    
    function countToStr(count: number|string){

        const time:number = Number(count);
        const min = time % 60 ; 
        const hour = Math.floor(time / 60);
        const formattedHour = String(hour).padStart(2, "0");
        const formattedMin = String(min).padStart(2, "0");

        const output = `${formattedHour}:${formattedMin}`;
        
        return output;
    }

    return countToStr
}
