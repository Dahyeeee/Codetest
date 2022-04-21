function solution(priorities,location){
    let answer = 0;
    let documents = priorities.map((prioritiy, index)=>
        ({location: index, prioritiy: prioritiy}))
    let locationPrinted = false;
    while(!locationPrinted){
        const shifted = documents.shift();
        let printAvailable = true;
        if(documents.some((document)=>shifted.prioritiy<document.prioritiy)) printAvailable =false;
        if(printAvailable){
            answer +=1
            if(shifted.location === location) locationPrinted =true;
        }else{
            documents.push(shifted);
        }
    }
   return answer;
}

solution([2, 1, 3, 2],2)


function solution(priorities, location) {
    var list = priorities.map((t,i)=>({
        my : i === location,
        val : t
    }));
    var count = 0;        
    while(true){
        var cur = list.splice(0,1)[0];        
        if(list.some(t=> t.val > cur.val )){
            list.push(cur);                        
        }
        else{            
            count++;
            if(cur.my) return count;
        }
    }
}