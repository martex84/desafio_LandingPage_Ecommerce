const form = "formEmailColetaSS"
const inputEmail = "inputEmailColetaSS"
const containerMensagemEmail = "containerMensagemSS"
const mensagemEmail = "textoMensagemSS";

function enviaEmail() {
    const elementEmail = document.getElementById(inputEmail);
    const valorInputEmail = JSON.stringify(elementEmail.value);  
    localStorage.setItem('valorEmail', valorInputEmail);
    mostrarComponente(containerMensagemEmail)
    moverComponenteCentroTela(containerMensagemEmail);
    


    pararForm();
}

function pararForm() {
    const elementoForm = document.getElementById(form);
    elementoForm.addEventListener('submit', (e) => {
        e.preventDefault();
    })
}

function moverComponenteCentroTela(componente) {
    let componenteFinal = document.getElementById(componente);
    const valorLarguraTela = window.innerWidth;
    const larguraComponente = componenteFinal.offsetWidth;
    let valorFinal = (valorLarguraTela - larguraComponente) / 2;
    componenteFinal.style.right = `${valorFinal}px`;
}

function mostrarComponente(componente){
    let componenteFinal = document.getElementById(componente);
    componenteFinal.style.display = `block`;
    console.log(componenteFinal)    
}
