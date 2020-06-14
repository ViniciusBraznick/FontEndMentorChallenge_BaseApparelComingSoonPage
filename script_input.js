function validaEmail() {
    email = document.getElementById('email').value
    
       if(email.search("@") != -1 && email.search(".com") != -1 && email.length > 5){
            console.log('emial valido')
            document.getElementById('email').value = ""
            document.getElementById("erro").style.display = "none"
            document.getElementById("textErro").style.display = "none"
       } else{
            document.getElementById("erro").style.display = "block"
            document.getElementById("textErro").style.display = "block"
       }
}