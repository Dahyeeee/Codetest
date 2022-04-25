function solution(a, b) {
    var answer = '';
    const days = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
    let date = new Date(`${a} ${b} 2016`);
    let day = date.getDay();
    console.log(date)
    return days[day];
}

console.log(solution(6,24))