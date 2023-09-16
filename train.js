/*
📌  B-Task: Shunday function tuzing, u 1ta parametr ega bolsin, hamda osha stringda qatnashgan raqamlarni 
sonini return qilsin. Masalan: getDigits("ag1aw5g6") return qilsin 3 ni
*/
function getDigits(text) {
    let countChar = 0;

    //converting word into array;
    
    let convertedList = text.split('');
    
    //mapping through array;
    
    convertedList.map((element) => {
        const parseElement = Number(element);
        if(Number.isInteger(parseElement)) {
            countChar++;
        } else {
            countChar;
        };
    });
    return countChar;    
};

console.log(getDigits('dsd33sd'));