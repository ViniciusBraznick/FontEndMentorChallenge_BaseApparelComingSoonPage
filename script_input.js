function validaEmail() {
    email = document.getElementById('email').value

    if(email.length > 0){
       if(email.search("@") != -1 && email.search(".com") != -1){
            console.log('emial valido')
       } else{
            console.log('email invalido')
       }
    }
}