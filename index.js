// HOME WORK 1
// написать функцию которая возвращает строку задом наперед
function reversString(string) {
    const arrString = string.split('');
    const newArrString = [];
  
    for (let i = arrString.length; i > -1; i--) {
      newArrString.push(arrString[i])
    }
    return newArrString
  }
  
  console.log(reversString('12345677890'));

//   