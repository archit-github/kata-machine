//don't remember the code so writting psuedo code
/*
basic idea:: find middle and compare the value and set lower and higher flag
middle calculation = floor(low + (high - low / 2))
O(logN)
[low,high)
*/
export default function bs_list(haystack: number[], needle: number): boolean {
    let high: number = haystack.length;
    let low: number = 0;
    while(low < high){
        let middle: number = Math.floor(low +(high - low)/2);
        if(haystack[middle] == needle){
            return true;
        } 
        else if(haystack[middle] > needle){
            high = middle;
        }
        else{
            low = middle+1;
        }
    }
    return false;
}