function getReport(id_list, report, k){
    let reports = [...new Set(report)].map(a=>{return a.split(' ')});
    let counts = new Map();
    for (const bad of reports){
        //get(bad[1]+1||1 이 무슨 뜻이징..
        counts.set(bad[1],counts.get(bad[1])+1||1)
    }
    let good = new Map();
    for(const report of reports){
        if(counts.get(report[1])>=k){
            good.set(report[0],good.get(report[0])+1||1)
        }
    }
    let answer = id_list.map(a=>good.get(a)||0)
    return answer;
}

console.log(getReport(["muzi", "frodo", "apeach", "neo"],["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"],2))