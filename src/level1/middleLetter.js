function solution(s){
    if(s.length%2 !=0)
    return s[(s.length-1)/2];
    else return s.slice(s.length/2-1,s.length/2+1);
}