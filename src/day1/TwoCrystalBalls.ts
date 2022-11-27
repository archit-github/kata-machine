/*
problem statement:
 [f,f,f,f,f,t,t,t,t,t]
 approach 1 : linear search the true. O(N)
 approach 2 : binary search. O(N+logN)
 approach 3 : iterate sqrt(N) times. O(sqrt(N))
*/

export default function two_crystal_balls(breaks: boolean[]): number {
    let index = 0;
    let lowIndex = 0;
    for(index =0; index < breaks.length; index = index + Math.sqrt(breaks.length)){
        if(breaks[index] === true){
            lowIndex = index - Math.sqrt(breaks.length)
            break;
        }
    }
    for(let i = lowIndex; i <= index; i++){
        if(breaks[i] === true){
            return i;
        }
    }
    return -1;
}