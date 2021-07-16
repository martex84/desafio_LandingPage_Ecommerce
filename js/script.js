const form = "formEmailColetaSS"
const inputEmail = "inputEmailColetaSS"
const containerMensagemEmail = "containerMensagemSS"
const mensagemEmail = "textoMensagemSS";

function enviaEmail() {
    const elementEmail = document.getElementById(inputEmail);    
    const valorInputEmail = JSON.stringify(elementEmail.value);  
    localStorage.setItem('valorEmail', valorInputEmail);
    mostrarEsconderComponente(containerMensagemEmail,'block')
    moverComponenteCentroTela(containerMensagemEmail);   
    calcularTempoMensagem()
    setTimeout(()=>{mostrarEsconderComponente(containerMensagemEmail,'none')},5000)
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

function mostrarEsconderComponente(componente,valor){
    let componenteFinal = document.getElementById(componente);
    componenteFinal.style.display = valor;      
}

function calcularTempoMensagem(){
    let elementMensagem = document.getElementById(mensagemEmail);    
    setTimeout(()=>{
        elementMensagem.innerHTML= `Enviado!`;
    },3000);    
}
