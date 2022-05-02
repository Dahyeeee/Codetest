//I did it
function solution(n, arr1, arr2){
    function changeNum(arr){
        return arr.map((a)=> a.toString(2).padStart(n,0).split(''))
    }

    const newArr1 = changeNum(arr1);
    const newArr2 = changeNum(arr2);
    console.log(newArr1)
    let resultArr = [];
    //I don't like this part. any better idea? 
    for(let i =0; i<n ;i++){
        for(let j=0; j<n ; j++){
        // a|b 는 둘 중 1이 있다면 1을 반환함
        resultArr.push(newArr1[i][j]|newArr2[i][j])
        }
        resultArr.push('/')
    }
    let result = resultArr.map((a)=>{
        if(a ===1 ) return '#'
        if(a ===0 ) return ' '
        else return '/'
    })
    result = result.join('').split('/').filter(a =>a !='')
    console.log(result);
    return result;
}

console.log(solution(5,[9, 20, 28, 18, 11],[30,1,21,17,28]))