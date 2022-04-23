// other's
function solution(people,limit){
    let count = 0;
    const newPeople = people.sort((a,b)=>a-b);
    console.log(newPeople)
    while(newPeople.length != 0) {
        if(newPeople[0]+newPeople[newPeople.length-1]<=limit){
            newPeople.pop();
            newPeople.shift();
        }
        else{
            newPeople.pop();
        }
        count++
    }
    return count;
}

console.log(solution([50,40,20,60,80],120))

//효율성 통과를 못하넹 어케 바꿔야하나?