document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('form');
  
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
  
      // Recupere a senha do localStorage
      const savedPassword = localStorage.getItem('senha');
  
      // Verifique as credenciais
      if (username === 'seuUsuario' && password === savedPassword) {
        alert('Login bem-sucedido! Redirecionando para a página principal.');
        window.location.href = 'pagina_principal.html'; // Redirecione para a página principal
      } else {
        alert('Login falhou. Verifique suas credenciais.');
      }
    });
  });
  
  
  
  