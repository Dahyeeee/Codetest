function solution(phone_number) {
    let phoneNumberArr = phone_number.split('');
    console.log(phoneNumberArr);
    let mappedArr = phoneNumberArr.map((item,index)=> {
        if(index < phoneNumberArr.length-4){
            return  item = '*'}
        else{
            return item;
        }});
    answer = mappedArr.join('');
    return answer;
}

console.log(solution('1239958390'));

//정규표현식.. 

function hide_numbers(s) {
    return s.replace(/\d(?=\d{4})/g, "*");
  }

//똑똑한 사람들..

  function hide_numbers(s){
    var result = "*".repeat(s.length - 4) + s.slice(-4);
  
    return result;
  }