var campoCep = document.querySelector('#cep')


campoCep.oninvalid = function(){
    campoCep.setCustomValidity('')

    if(!campoCep.validity.valid){
        campoCep.setCustomValidity('Ops! Tem algo errado no campo CEP')
        campoCep.parentNode.classList.add('contatoCampo--erro')
    }
}

