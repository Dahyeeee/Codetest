//unsolved
function solution(arr1, arr2){
    let result =[]
    for(let i=0 ; i<arr1.length ; i++){
        let temp = [];
        for(let j =0 ; j<arr2.length ; j++){
            let thing =
            arr1[i][i]*arr2[i][j]+arr1[i][i+1]*arr2[i+1][j]
            temp.push(thing)
        }
        result.push(temp);
    }
    return result;

}