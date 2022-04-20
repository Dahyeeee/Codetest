function possibleSum(arr){
    let newArr =[];
    for(let i =0; i<arr.length-1 ; i++){
        for(let j=i+1; j<arr.length ; j++){
            newArr.push(arr[i]+arr[j]);
        }
    }
    const realNewArr = newArr.sort((a,b)=>a-b);
    const result = [...new Set(realNewArr)];
    return result;
}

possibleSum([5,0,2,7])