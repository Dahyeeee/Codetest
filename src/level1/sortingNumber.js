function sorting(num){
    let newArr = Array.from(String(num),Number).sort().reverse();
    return +newArr.join('');
}

console.log(sorting(4561230));

//숫자를 하나씩 배열로 만드는 법
const newN = n+''; //string만들기
const newA = newN.split('') //string->array
