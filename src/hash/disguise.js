function disguise(clothes){
 let spyWear ={};
 for(let clothtype of clothes){
     if(!spyWear[clothtype[1]]) spyWear[clothtype[1]] = []
     spyWear[clothtype[1]].push(clothtype[0])
 }
 const clothesCount = [];
 for(const part in spyWear) clothesCount.push(spyWear[part].length+1);
 answer = clothesCount.reduce((a,b)=>a*b, 1) -1;
 return answer;
  
}

disguise([["yellowhat", "headgear"], ["bluesunglasses", "eyewear"], ["green_turban", "headgear"]])

//How long would it take to think up with this kinda idea..
function solution(clothes) {
    return Object.values(clothes.reduce((obj, t)=> {
        obj[t[1]] = obj[t[1]] ? obj[t[1]] + 1 : 1;
        return obj;
    } , {})).reduce((a,b)=> a*(b+1), 1)-1;    
}