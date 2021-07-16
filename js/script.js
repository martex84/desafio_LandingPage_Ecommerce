const form = document.getElementById("formEmailColetaSS");
const inputEmail = document.getElementById("inputEmailColetaSS");

function enviaEmail(){
    form.addEventListener('submit',(e) => {
        e.preventDefault();
    })
}


enviaEmail();
