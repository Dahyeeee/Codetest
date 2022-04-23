//other's solution
//남은 기간 map하는 거까지는 나도 생각했는데~~

function solution(progresses, speeds){
    let answer =[];
   const remainDays = progresses.map((prog,index)=> Math.ceil((100-prog)/speeds[index]))
   console.log(remainDays);

   let maxDay = remainDays[0];
   answer.push(0)
   for(let i =0; i<remainDays.length ; i++){
       if(remainDays[i] <= maxDay){
           answer[answer.length -1] += 1
       }
       else{
           answer.push(1);
           maxDay = remainDays[i];
       }
   }
   return answer;
}

console.log(solution([95, 90, 99, 99, 80, 99],[1, 1, 1, 1, 1, 1]))