let firstText = ''
let secondText = ''
let resultText = ''
let operator 
let operClick = false;
const blankText = ''
let resultNum = 0

document.addEventListener('click', function (event) {

  if (event.target.className === 'btn btn-primary number' && (operClick === false)) {
    firstText += event.target.value
    document.getElementById('first-number').textContent = firstText
  }

  if (event.target.className === 'btn btn-danger operator') {
  operator = event.target.value
  document.getElementById('operator').textContent = event.target.textContent
  operClick = true
}

  if (event.target.className === 'btn btn-primary number' && operClick){

    secondText += event.target.value
    document.getElementById('second-number').textContent = secondText
  }


  

  if (event.target.className === 'btn btn-success equal') {
    let firstNum = Number(firstText)
    let secondNum = Number(secondText)
    let resultNum

    switch (operator) {
      case 'plus':
      resultNum = firstNum + secondNum
      break;
      case 'minus':
      resultNum = firstNum - secondNum
      break;
      case 'times':
      resultNum = firstNum * secondNum
      break;
      case 'divide':
      resultNum = firstNum / secondNum
      break;
      case 'power':
      resultNum = firstNum ** secondNum
      break;

      default:
        break;
    }
    console.log(resultNum)
    document.getElementById('result').textContent = resultNum

    }
  

  if (event.target.className === 'btn btn-dark clear') {
    firstText = blankText
    secondText = blankText
    operClick = false
    // operator = ''
    document.getElementById('first-number').textContent = blankText
    document.getElementById('operator').textContent = blankText
    document.getElementById('second-number').textContent = blankText
    document.getElementById('result').textContent = blankText
  }

})