//I did it by myself :)
function solution(n,t,m,p){
    let allAnswer =[];
    for(let i =0 ; allAnswer.length<=t*m ; i++){
       if( i.toString(n).length>1){
          for(let j =0; j<i.toString(n).length ; j++){
            allAnswer.push(i.toString(n)[j])
          }
       }else{
          allAnswer.push(i.toString(n));
        }    
    
    }
    console.log(allAnswer)
    let answer = allAnswer.filter((a,ind)=> ind%m === p-1);
    answer = answer.slice(0,t).map((a)=>a.toUpperCase());
    return answer.join('');
}

console.log(solution(16,16,2,1))

//other's 
//haven't checked yet
function solution(n, t, m, p) {
    var tubeT = Array.apply(null,Array(t)).map((a,i)=>i*m+p-1);
    var line = '';
    var max = m*t + p;
    for (var i =0;line.length <= max; i++) {
        line += i.toString(n);
    }
    return tubeT.map(a=>line[a]).join('').toUpperCase();
}