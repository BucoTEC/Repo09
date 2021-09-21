// Only change code below this line
function logicOrder(num) {
  if (num < 50) {
    return "Less than 50";
  } else if (num < 100) {
    return "Less than 100";
  } else {
    return "Greater than or equal to 100";
  }
}

console.log(logicOrder(28));
console.log(logicOrder(60));
console.log(logicOrder(110));

// U postavci zadatka ima logicka greska,nismo
// uzeli u obzir da korisnik moze ubaciti negativan
// broj. Ja sam zbo AC uradio ovako, ali bi
// bilo bolje da sam umjesto zadnje elsa ubacio
// if else koje bi ispitalo 'greather than or equal to 100'
// i onda nakon toga else koji pokriva sve ostale opcije
// u kojem bi vratili neki error poruku

// Only change code above this line

module.exports = logicOrder;
