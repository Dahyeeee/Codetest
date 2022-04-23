function solution(arr){
    let result =[]
    for(let i=0 ; i<arr.length ; i++){
        if(result[result.length-1] !== arr[i]){
            result.push(arr[i])
        }
    }
    return result;
}

console.log(solution([1,1,3,3,0,1,1,1]))


//I'm just gonna say myself i did a great job..
function solution(arr)
{
    return arr.filter((val,index) => val != arr[index+1]);
}