//runtime error, core dump ? 
function solution(numbers,k){
   let numArr = numbers.split('')
   let max=0;
   let possible = combine(numArr, numArr.length-k)
   for(each of possible){
      let number = +each.join('')
      if(number>max) max = number;
   }
   return String(max);


   function combine(arr,k){
      if(k===1) return arr.map(a =>[a]);
      let answer =[]
      arr.forEach((a,ind) =>{
         const rest =arr.slice(ind+1);
         const combination = combine(rest,k-1);
         const attached = combination.map(combi => [a,...combi]);
         answer.push(...attached);
      })
      return answer;
      }
   
}

console.log(secondTry('77777777',4))

//10.12번시간초과
function secondTry(number, k){
   let numArr = number.split('');
   let setNumArr = new Set(numArr)
         if(setNumArr.size===1){
            numArr.slice(0,k);
            return numArr.join('')
         }
   while(k>0){
      for(let i=1; i<number.length; i++){
            if(numArr[i]>numArr[i-1]){
            numArr.splice(i-1,1);
            k--
            break;
            }
       //  else if(numArr[i]<numArr[i-1]) {
        //    continue;
        // }
   }}
   return numArr.join('')
}