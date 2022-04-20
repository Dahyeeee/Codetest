function numberCheck(str){
    const strArr = str.split('');
    const pNumber = strArr.filter((item)=>item =='p' || item =='P');
    const yNumber = strArr.filter((item)=>item =='y' || item =='Y');
    return pNumber.length == yNumber.length ? true : false;
}

//match 메소드 i=대소문자 구분없이 but 둘다 없을때 null을 반환함. 
function numPY(s) {
    return s.match(/p/ig).length == s.match(/y/ig).length;
  }

//전부 대문자나 소문자로 바꿔주고 비교. split으로 잘라줬을 때 같은 string이라 갯수가 같으면 잘라진 수가 같음.
  function numPY2(s){

      return s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length;
  }

