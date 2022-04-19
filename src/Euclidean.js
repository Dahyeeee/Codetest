function Euclidean(a,b){
    let arr = [];
    while (b != 0){
        let r = a% b;
        a =b ;
        b= r;
        arr.push(a);
    }
    return arr;
}

console.log(Euclidean(2,6));
