/* 
TASK-C;

Shunday function tuzing, u 2ta string parametr ega bolsin, hamda agar har ikkala string bir hil 
harflardan iborat bolsa true aks holda false qaytarsin.

MASALAN checkSimilarity("laepp", "apple") true return qiladi.;
*/

function getSimilarity(primary, secondary) {
    // const sortString = str.split("").sort().join("");
    // string1.localeCompare(string2)
  
    let one = primary.toLowerCase().split("").sort().join("");
  
    // console.log(one);
    // console.log(primary)
  
    let two = secondary.toLowerCase().split("").sort().join("");
  
    if (one.length !== two.length) {
      return false;
    } else {
      return one === two;
    }
  }
  
  const javob = getSimilarity("apple", "leapp");
  console.log(javob);
  