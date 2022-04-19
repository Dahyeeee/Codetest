function addup(num){
    const numArr = Array.from((num+''),Number);
    return numArr.reduce((accu, val)=>accu + val,0);
}