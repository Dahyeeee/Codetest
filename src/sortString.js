function sortString(str){
    const upperCase = str.split('').filter((item)=> item.charCodeAt()>64 && item.charCodeAt()<91);
    const lowerCase = str.split('').filter((item)=> item.charCodeAt()>96 && item.charCodeAt()<123);
    return lowerCase.sort().reverse().concat(upperCase.sort().reverse()).join('');
}

console.log(sortString('fnjeWnjfnD'));

//I knew it could work!
function solution(s) {
  return s
    .split("")
    .sort()
    .reverse()
    .join("");
}