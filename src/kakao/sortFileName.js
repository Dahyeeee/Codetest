//seems perfect! fail few tests
function solution(files){
    let answer = [];
    capFiles = files;
    const numberReg = /\d/g;
    let fileArr =[]
    capFiles.forEach((file)=>{
        let numberIndex = file.search(numberReg);
        let letterPart = file.slice(0,numberIndex).toUpperCase().trim();
        let numberPart = file.slice(numberIndex).replace(/\D/g,'');
        fileArr.push([letterPart, +numberPart, file]);
    });
    console.log(fileArr);
    fileArr.sort((a,b)=> {
                if (a[0] < b[0]) {
                    return -1;
                }
                if (a[0] > b[0]) {
                    return 1;
                }
                return 0;})
           .sort((a,b)=>{
                if(a[0]===b[0]) return  a[1]-b[1]
                })
    console.log(fileArr);
    for(let file of fileArr){
        answer.push(file[2])
    }
    return answer;
}

console.log(solution(["F-5 Freedom Fighter", "A-C50 Superfortress", "AB-10 Thunderbolt II", "F-14 Tomcat"]))