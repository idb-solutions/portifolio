// Pega o formulário do HTML
var formulario = document.getElementById('formulario');

// Função para validar o nome
function validarNome(nome) {
    // Nome deve ter no mínimo 3 caracteres
    if (nome.trim().length < 3) {
        return false;
    }
    return true;
}

// Função para validar o email
function validarEmail(email) {
    // Verifica se o email tem um formato válido (contém @ e .)
    var temArroba = email.indexOf('@') > -1;
    var temPonto = email.indexOf('.') > -1;
    
    if (temArroba && temPonto) {
        return true;
    }
    return false;
}

// Função para validar a mensagem
function validarMensagem(mensagem) {
    // Mensagem deve ter no mínimo 10 caracteres
    if (mensagem.trim().length < 10) {
        return false;
    }
    return true;
}

// Função para limpar as mensagens de erro
function limparErros() {
    document.getElementById('erroNome').textContent = '';
    document.getElementById('erroEmail').textContent = '';
    document.getElementById('erroMensagem').textContent = '';
    
    document.getElementById('nome').classList.remove('input-erro');
    document.getElementById('email').classList.remove('input-erro');
    document.getElementById('mensagem').classList.remove('input-erro');
}

// Função para mostrar erros
function mostrarErro(idInput, idErro, mensagem) {
    document.getElementById(idErro).textContent = mensagem;
    document.getElementById(idInput).classList.add('input-erro');
}

// Função que é chamada ao enviar o formulário
function enviarFormulario(evento) {
    // Para o comportamento padrão do formulário
    evento.preventDefault();
    
    // Limpar erros anteriores
    limparErros();
    
    // Pega os valores dos campos
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var mensagem = document.getElementById('mensagem').value;
    
    // Variável para controlar se há erros
    var temErro = false;
    
    // Validar nome
    if (!validarNome(nome)) {
        mostrarErro('nome', 'erroNome', 'Nome deve ter no mínimo 3 caracteres');
        temErro = true;
    }
    
    // Validar email
    if (!validarEmail(email)) {
        mostrarErro('email', 'erroEmail', 'Email inválido. Use o formato: usuario@dominio.com');
        temErro = true;
    }
    
    // Validar mensagem
    if (!validarMensagem(mensagem)) {
        mostrarErro('mensagem', 'erroMensagem', 'Mensagem deve ter no mínimo 10 caracteres');
        temErro = true;
    }
    
    // Se não houver erros, simular envio
    if (!temErro) {
        // Mostrar mensagem de sucesso
        alert('Mensagem enviada com sucesso! Obrigado pelo contato.');
        
        // Limpar os campos do formulário
        formulario.reset();
        
        // Limpar erros
        limparErros();
    }
}

// Quando o formulário for enviado, chamar a função enviarFormulario
formulario.addEventListener('submit', enviarFormulario);
