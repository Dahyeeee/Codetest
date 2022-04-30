function solution(numbers, hand){
    //손가락 초기 위치 설정
    let leftNum = 10;
    let rightNum = 12;
    let answer = numbers.map(num =>{
        if(num ===0 ){
            num =11
        }
        // 1,4,7 왼손
        if (num % 3 ===1){
            return leftTo(num);
        }
        else if(num%3 ===0){
            return rightTo(num);
        }else{
            const numLocation = numToLocation(num);
            const leftDistance = distanceBtwnLocation(numToLocation(leftNum),numLocation);
            const rightDistance = distanceBtwnLocation(numToLocation(rightNum),numLocation);
            if(leftDistance === rightDistance){
                return hand === 'left' ? leftTo(num) : rightTo(num);
            }else if(leftDistance > rightDistance){
                return leftTo(num);
            }else if(leftDistance < rightDistance){
                return rightTo(num);
            }
        }
    }).join('');
    return answer;
}
    //왼손을 num 위치로 옮기고 L을 반환해줌
    function leftTo(num){
        leftNum =num;
        return 'L'
    }
    //오른손을 num 위치로 옮기고 R을 반환해줌
    function rightTo(num){
        rightNum =num;
        return 'R'
    }
    //숫자의 위치를 배열로 표시, 이 수식을 어케 구한건지는 모르겠음..
    function numToLocation(num){
        return [Math.floor((num-1)/3), (num-1)%3]
    }
    //숫자 사이의 거리 구하는 공식, 이것도 어케 한건지 모름
    function distanceBtwnLocation(a,b){
        return Math.abs(a[0]-b[0])+Math.abs(a[1]-b[1]);
    }

    //mine
    function mine(numbers,hand){
        let leftHand = 10;
        let rightHand= 12;
        let answer =[];
        for(num of numbers){
            if(num==0) num= 11;
            if(num%3==1){
                leftHand =num;
                answer.push('L');
            }
            if(num%3===0){
                rightHand= num;
                answer.push('R');
            }
            else{
                let location = getlocation(num);
                let leftLocation = getlocation(leftHand);
                let rightLocation = getlocation(rightHand);
                const distanceLeft = getDistance(leftLocation,location);
                const distanceRight = getDistance(rightLocation,location);
                if(distanceLeft>distanceRight){
                    rightHand = num;
                    answer.push('R')
                }
                else if(distanceLeft<distanceRight){
                    leftHand =num;
                    answer.push('L')
                }
                else { 
                    if(hand==='right'){
                        rightHand= num;
                        answer.push('R');
                    }else{
                        leftHand =num;
                        answer.push('L');
                    }
                }
            }
        }
        return answer.join('');
    }

    function getlocation(num){
        return [Math.floor(num-1)/3,(num-1)%3]
    }

    function getDistance(finger, num){
        return Math.abs(finger[0]-num[0])+Math.abs(finger[1]-num[1])
    }

    console.log(mine([1, 2, 3, 4, 5, 6, 7, 8, 9, 0],'right'))