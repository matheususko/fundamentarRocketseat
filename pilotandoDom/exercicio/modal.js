const buttonOpenModal = document.getElementById('openModal')

const modalWrapper = document.querySelector('.modal-wrapper')

buttonOpenModal.onclick = function(){
    modalWrapper
    .classList
    .remove('invisible')
}

document.addEventListener('keydown', function(event) {

    const isEsqKey = event.key === 'Escape'

    if(isEsqKey){
        modalWrapper.classList.add('invisible')
    }
})