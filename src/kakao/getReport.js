//I did it with tiny little help at the end.
function getReport(id_list, report, k){
    let newReport = report.map(each => each.split(' '));
    let reported = new Map()
    for(let reports of newReport){
        reported.set(reports[1], reported.get(reports[1])+1||1)
    }
    console.log(reported)
    let reporting = new Map()
    for(const [key,value] of reported.entries()){
        if(value>=k) {
            newReport.forEach((a)=>{
            if(a[1]=== key) reporting.set(a[0], reporting.get(a[0])+1||1); 
            })
        }
    }
    const result = id_list.map((a)=> reporting.get(a)||0)
    
    console.log(reporting)
    return result;
}

console.log(getReport(["muzi", "frodo", "apeach", "neo"],["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"],2))

//