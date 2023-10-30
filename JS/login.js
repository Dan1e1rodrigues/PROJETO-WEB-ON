document.addEventListener('DOMContentLoaded', function() {
  const loginForm = document.querySelector('form');

  loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Recupere o email e senha do localStorage
    const savedEmail = localStorage.getItem('email');
    const savedPassword = localStorage.getItem('senha');

    // Verifique as credenciais
    if (username === savedEmail && password === savedPassword) {
      alert('Login bem-sucedido! Redirecionando para a página principal.');
      window.location.href = '../HTML/ARQUIVO.HTML'; // Redirecione para minha home
    } else {
      alert('Login falhou. Verifique suas credenciais.');
    }
  });
});

  
  
  
  