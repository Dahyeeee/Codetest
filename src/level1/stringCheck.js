function check(string){
    const reg = /\D/;
    if(string.length == 4 || string.length ==6){
        return reg.test(string) ? false : true;
    }
    else{
        return false;
    }
}

console.log(isFinite('1e22'));

//정규표현식 익숙해질 날이 올까요
function alpha_string46(s){
    var regex = /^\d{6}$|^\d{4}$/;
    return regex.test(s);
  }