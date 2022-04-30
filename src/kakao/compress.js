//crazy. I did it by myself without any help. CRAZY
function solution(msg){
    let code = ['A','B','C','D','E','F','G','H','I','J','K','L',"M","N",'O','P',"Q",'R','S','T','U','V','W','X','Y','Z']
    // 'abcdefg'.split('')하는 방법도 있음 ㅎㅎ
    let msgArr =msg.split('');
    console.log(msgArr)
    let answer = []
    let stringArr = createCombos(msg);

    function getCode(stringArr) {
     for(let i =0; i<stringArr.length ; i++){
        if(code.includes(stringArr[i])){
            const index = code.indexOf(stringArr[i]);
            answer.push(index+1);
            code.push(stringArr[i-1]);
            console.log(index)
            let rest = createCombos(stringArr[0].slice(stringArr[i].length));
            console.log(stringArr)
            getCode(rest);
            break;
            }
        }
     }

    function createCombos(rest){
        let combos = []
        for(let i=1; i<=rest.length ; i++){
            combos.push(rest.slice(0,i))
        }
        return combos.reverse();
    }
    
    getCode(stringArr);
    console.log(createCombos(msg))
    return answer;
}

//other's 혼자 해서 뿌듯하다가도 남에 꺼 보면 증말 짜증난다~~
//haven't checked yet
function solution(msg) {
    var list = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    var dic = list.reduce((d, a, i) => (d[a] = i + 1, d), {})

    var result = [];

    var maxLen = 1;
    for (var i = 0; i < msg.length; i++) {

        var w = msg[i];
        var c = msg[i+1];
        while (dic[w+c] && i < msg.length - 1) {
            i++;

            w = w+c;
            c = msg[i+1];
        }

        result.push(dic[w]);

        list.push(dic[w+c]);
        dic[w+c] = list.length;
    }

    return result;
}



console.log(solution('ABABABABABABABAB'))