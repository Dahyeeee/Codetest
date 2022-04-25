//try agian
function solution(n, arr1, arr2){
    let result=[];
    console.log(newArr1, newArr2)
    for(let i =0 ; i<n ; i++){
        // '|'는 둘중 하나가 1일 때 1로 모두를 바꾸는 기능...
        let row = (arr1[i]|arr2[i]).toString(2).padStart(n,'0').split('');
        let newRow = row.map((a)=> a==='1'? '#' : ' ');
        //row.replace(/0/g,' ').replace(/1/g,'#')으로 할수도있음. string일때
        result.push(newRow.join(''));
        console.log(row); 
    }
    return result;
}

console.log(solution(5,[9, 20, 28, 18, 11],[30,1,21,17,28]))