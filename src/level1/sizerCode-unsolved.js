//시저암호

function sizerCode(str,num){
    let answer = '';
    for(let i =0 ; i<str.length ; i++){
    let charCode = str.charCodeAt(i);
        if(str[i] == ' '){
            answer += ' ';
        }
        else if(str[i] == 'z'){
            answer += String.fromCharCode(97+num-1);
        }
        else if(str[i] == 'Z'){
            answer += String.fromCharCode(65+num-1);
        }
        else{
            if(charCode+num > 122){
            answer += String.fromCharCode(charCode+num-26)}
            else{
            answer += String.fromCharCode(charCode+num)
            };
    }   
    }
    return answer;
}

console.log(sizerCode('a   eZLo',25));