function sizerCode(str, num) {
  return str
    .split("")
    .map((each) => {
      if (each === " ") return " ";
      const unicode = each.charCodeAt(0);
      const newUnicdoe = unicode + num;
      if (unicode < 91) {
        return String.fromCharCode(
          newUnicdoe > 90 ? newUnicdoe - 26 : newUnicdoe
        );
      } else {
        return String.fromCharCode(
          newUnicdoe > 122 ? newUnicdoe - 26 : newUnicdoe
        );
      }
    })
    .join("");
}

console.log(sizerCode("a   eZLo", 25));
