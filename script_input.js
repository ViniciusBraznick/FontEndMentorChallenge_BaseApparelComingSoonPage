const btnInput = document.querySelector('button')
const email = document.querySelector('#email')
const error = [document.querySelector('#textErro'), document.querySelector('#erro')]


btnInput.addEventListener('click', () => {
     if(email.value.search("@") != -1 && email.value.search(".com") != -1){
          email.value = ''
          adicionaErro('valid')
     } else{
          adicionaErro('invalid')
     }
})

function adicionaErro(item) {
     for (let index = 0; index < 2; index++) {
          const element = error[index];
          item == 'valid' ? element.classList.remove('invalidMail') : element.classList.add('invalidMail')
     }
}





