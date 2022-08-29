export const Modal = {

//const objet literals. Serve p deixar claro o que é 
//responsabilidade do modal
  wrapper: document.querySelector('.modal-wrapper'),
  message: document.querySelector('.modal .title span'),
  buttonClose: document.querySelector('.modal button.close'),

  open() {
    Modal.wrapper.classList.add('open')
  },
  close() {
    Modal.wrapper.classList.remove('open')

  }
}

Modal.buttonClose.onclick = () =>
  Modal.close()

window.addEventListener('keydown', handleKeyDow)
function handleKeyDow(event) {
  if(event.key === 'Escape'){
    Modal.close()
  }
}

