function funnyString(string){
    const stringArr = string.split(' ');
    const singleStringArr = stringArr.map((item)=>item.split(''));
    const newArr = [];
    for(word of singleStringArr){
         newArr.push(word.map((item,index)=>{
            return index%2===0 ? item.toUpperCase() : item.toLowerCase()
        }).join(''))
    }
    return newArr.join(' ');
}

console.log(funnyString('hello there'))


//정규표현식 잘 쓰고 싶다.
function others(s){
return s.toUpperCase().replace
(/(\w)(\w)/g, function(a){return a[0].toUpperCase()+a[1].toLowerCase();})
}