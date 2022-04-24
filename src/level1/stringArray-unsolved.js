//문자열로 구성된 리스트 strings와, 정수 n이 주어졌을 때, 
//각 문자열의 인덱스 n번째 글자를 기준으로 오름차순 정렬하려 합니다. 예를 들어 strings가 
//["sun", "bed", "car"]이고 n이 1이면 각 단어의 인덱스 1의 문자 "u", "e", "a"로 strings를 정렬합니다.

function solution(arr, n){
  let newArr=[];
  let map = new Map();
  for( let i =0; i<arr.length ; i++){
      map.set(arr[i],arr[i].slice(n));
      newArr.push(arr[i].slice(n));
  }
  let result =[]
  console.log(map,newArr);
  let order = newArr.sort();
  for(thing of map){
    for(word of newArr){
      if(word === map.get(thing)){
        result.push(map.keys(thing))
      }
    }
  }
  return result;
}

console.log(solution(["ae","be","ce","ae"],1));

function solution2(arr, n ){
  let newArr = arr.map((a)=>a[n]).sort();
  console.log(newArr)
}