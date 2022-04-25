function removeSmallest(arr){
    let smallest = arr[0];
    for(element of arr){
        if(element <smallest){
            smallest = element;
        }
    }
    const newArr = arr.filter((item)=>item !=smallest);
    return newArr.length > 1 ? newArr : [-1]
}

console.log(removeSmallest([5,6,9,1,5]))


//...arr 하면 뭐가 되는거지?
//arr안의 요소를 다 펼쳐줌.
function solution(arr) {
    arr.splice(arr.indexOf(Math.min(...arr)),1);
    if(arr.length<1)return[-1];
    return arr;
}

//대박, array 에서 제일 큰 수 찾는 함수가 있었네!
Math.max.apply(null, [1,2,3]); // Will also return 3