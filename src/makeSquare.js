function printSquare(n,m){
    let output='';
    for(let j=0 ; j<m ;j++){
        for(let i=0; i<n; i++){
            output += '*'
    } output +='\n'
 } return output;
}

console.log(printSquare(5,3));

// process.stdin.setEncoding('utf8');
// process.stdin.on('data', data => {
//     const n = data.split(" ");
//     const a = Number(n[0]), b = Number(n[1]);
//     console.log((('*').repeat(a)+`\n`).repeat(b))
// });