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

// функция принимает строку, ищет в строке числа и возвращает сумму этих чисел


function findNumberInString(string) {
  debugger
  const countNumberStr = parseInt(string)
  let countNumber = countNumberStr.split(' ') 
  let resultNumb = 0

  for (let i = 0; i < countNumber.length; i++) {
    resultNumb += countNumber[i]
    
  }
  return resultNumb
}

findNumberInString('ahshbhas6 5463 145643 11')