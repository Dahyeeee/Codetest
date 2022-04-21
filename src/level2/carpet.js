//others
    function solution(brown, yellow) {
        var answer = [];
        const size = brown + yellow
        answer = widthHeightPair(size).filter(pair => (pair[0] + pair[1]) * 2 - 4 === brown)[0]
        return answer;
    }
    function widthHeightPair(size){
        let result = []
        for(let i=1; i<=Math.sqrt(size); i++) if(size % i === 0) result.push([size/i, i])
        return result
    }
//함수로 곱셈 가능한 pair를 지어서 array에 넣고 그게 조건에 부합하는 지 확인