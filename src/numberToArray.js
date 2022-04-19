//자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 

function numbertoArray(num){
    const numArr = Array.from(num+'',Number).reverse();
    return numArr;

}

//parseInt(string) =>string 숫자로 바꿔줌