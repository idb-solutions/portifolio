// Pega o elemento do formulário
var formulario = document.getElementById('formulario');

// Valida o campo nome - mínimo 3 caracteres
function validarNome(nome) {
    if (nome.trim().length < 3) {
        return false;
    }
    return true;
}

// Valida o email - verifica se tem @ e ponto
function validarEmail(email) {
    var temArroba = email.indexOf('@') > -1;
    var temPonto = email.indexOf('.') > -1;
    
    if (temArroba && temPonto) {
        return true;
    }
    return false;
}

// Valida a mensagem - mínimo 10 caracteres
function validarMensagem(mensagem) {
    if (mensagem.trim().length < 10) {
        return false;
    }
    return true;
}

// Limpa as mensagens de erro quando o formulário é revalidado
function limparErros() {
    document.getElementById('erroNome').textContent = '';
    document.getElementById('erroEmail').textContent = '';
    document.getElementById('erroMensagem').textContent = '';
    
    document.getElementById('nome').classList.remove('input-erro');
    document.getElementById('email').classList.remove('input-erro');
    document.getElementById('mensagem').classList.remove('input-erro');
}

// Exibe mensagem de erro no campo específico
function mostrarErro(idInput, idErro, mensagem) {
    document.getElementById(idErro).textContent = mensagem;
    document.getElementById(idInput).classList.add('input-erro');
}

// Função principal - processa o envio do formulário
function enviarFormulario(evento) {
    // Previne o envio padrão do formulário
    evento.preventDefault();
    
    // Limpa erros anteriores
    limparErros();
    
    // Coleta os valores dos campos
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var mensagem = document.getElementById('mensagem').value;
    
    var temErro = false;
    
    // Valida cada campo
    if (!validarNome(nome)) {
        mostrarErro('nome', 'erroNome', 'Nome deve ter no mínimo 3 caracteres');
        temErro = true;
    }
    
    if (!validarEmail(email)) {
        mostrarErro('email', 'erroEmail', 'Email inválido. Use o formato: usuario@dominio.com');
        temErro = true;
    }
    
    if (!validarMensagem(mensagem)) {
        mostrarErro('mensagem', 'erroMensagem', 'Mensagem deve ter no mínimo 10 caracteres');
        temErro = true;
    }
    
    // Se não há erros, simula o envio
    if (!temErro) {
        alert('Mensagem enviada com sucesso! Obrigado pelo contato.');
        formulario.reset();
        limparErros();
    }
}

// Listener para o evento de submit do formulário
formulario.addEventListener('submit', enviarFormulario);
