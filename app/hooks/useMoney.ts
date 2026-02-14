'use client'

export default function useMoney(){
    const spread_group:number = 3;
    
    function countToStr(count: number|string){

        let amount:string = count.toString();
        const amount_len:number = amount.length;
        let schritt:number = amount_len % spread_group == 0 ? 3 :  amount_len % spread_group;
        let spread_count:number = 0;

        while(amount_len > schritt){
            const first = amount.slice(0,spread_count + schritt);
            const secound = amount.slice(spread_count + schritt);
            amount = first + "," + secound;
            spread_count = spread_count + 1;
            schritt = schritt + spread_group;
        }
        
        return amount
    }

    return countToStr
}