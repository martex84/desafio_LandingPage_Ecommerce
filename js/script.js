const form = "formEmailColetaSS"
const inputEmail = "inputEmailColetaSS"
const containerMensagemEmail = "containerMensagemSS"
const mensagemEmail = "textoMensagemSS";

function enviaEmail() {
    const elementEmail = document.getElementById(inputEmail);
    const valorInputEmail = JSON.stringify(elementEmail.value);  
    localStorage.setItem('valorEmail', valorInputEmail);

    

    pararForm();
}

function pararForm() {
    const elementoForm = document.getElementById(form);
    elementoForm.addEventListener('submit', (e) => {
        e.preventDefault();
    })
}

/* function moverCentroTela(componente) {
    const valorLarguraTela = window.innerWidth;
    const larguraComponente = componente.offSetWidth;
    let valorFinal = (valorLarguraTela - componente.offSetWidth) / 2;
    console.log(componente.offSetWidth);
} */
