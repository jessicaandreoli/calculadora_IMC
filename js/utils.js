
export function calcImc(weight, height) {
  return (weight / ((height / 100) ** 2)).toFixed(2)
}

export function notANumber(value) {
  //isNaN retorno true se o q recebo é string e false
  //caso não
  return isNaN(value) || value == ""
}


