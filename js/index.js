import { Modal } from "./modal.js"
import { AlertError } from "./alert-error.js"
import {calcImc, notANumber} from "./utils.js"

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

//o oninput verifica se estou recebendo algo novo no 
//meu input
inputWeight.oninput = () => AlertError.close()
inputHeight.oninput = () => AlertError.close()

form.onsubmit = function (event) {
  event.preventDefault()

  const weight = inputWeight.value
  const height = inputHeight.value

  const weightOrHeightIsNotANumber = notANumber(weight) || notANumber(height)
  if (weightOrHeightIsNotANumber) {
    AlertError.open()
    return
  }
  AlertError.close()

  const result = calcImc(weight, height)
  displayResultMessage(result)
}

function displayResultMessage(result) {
  const message = `Seu IMC é de: ${result}`
  Modal.open()
  Modal.message.innerText = message
}







