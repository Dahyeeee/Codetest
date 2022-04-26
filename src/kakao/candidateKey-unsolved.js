//유일성있는 조합을 먼저 다 찾음
//최소성을 만족하지 못하는 애들 걸러냄
function solution(relation){
    //1개가 유일한 애들 찾아냈음..그함수도 이렇게 긴데 ㅎㅅㅎ
    let result = 0;
    let uniqueIndex = [];
    for(let j=0; j<relation[0].length; j++){
        let arr = [];
        for(let i =0; i <relation.length ; i++){
            arr.push(relation[i][j])
        }
        let setArr = new Set([...arr]);
        console.log(arr.length, setArr.size)
        if(arr.length === setArr.size) {
            result++;
            uniqueIndex.push(j);}
    }
    console.log(uniqueIndex)
    const newArr = relation.map((a) => a.filter((b,index)=> index != uniqueIndex[0]))
    console.log(newArr)
    return result;
}

console.log(solution([["100","ryan","music","2"],["200","apeach","math","2"],["300","tube","computer","3"],["400","con","computer","4"],["500","muzi","music","3"],["600","apeach","music","2"]]))

function findCombination(array, comboNum){
    let combo=[];
    for(let i =0; i<array[0].length ; i++)
    for(applier of array)
      if(comboNum ===1 ) combo.push([applier[i]])
        
    }
}