// HOME WORK 1
// написать функцию которая возвращает строку задом наперед

function reversString(string) {

    let newStr = string.reverse()
    let reverseStr = ''
    for (let i = 0; i < newStr.length; i++) {
      const arrStr = newStr[i];
      reverseStr = arrStr
    } 
    return reverseStr
  }
  
  console.log(reversString('hgagjsvjgv asjdvjhavsjdva bajshgdjhvasdb'));