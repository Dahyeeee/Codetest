function Euclidean(a,b){
   let result = [];
   let gbc = 0;
   for(let i=1; i<Math.min(a,b); i++){
       if(a % i === 0 && b % i === 0){
        gbc = i;
       }
   }
    result.push(gbc);

    let lcm = a*b / gbc;
    result.push(lcm);

    return result;
}

console.log(Euclidean(8, 12));

//이해하고 싶다 

function gcdlcm(a, b) {
    var r;
    for(var ab= a*b;r = a % b;a = b, b = r){}
    return [b, ab/b];
}