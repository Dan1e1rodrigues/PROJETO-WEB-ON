//Função evento DOM
document.addEventListener('DOMContentLoaded', function() {

  //Vai buscar as informações contidas dentro do form 
  const form = document.querySelector('form');

  //Function evento de submissão   
  form.addEventListener('submit', function(event) {

    event.preventDefault();

    const email = document.getElementById('email').value;

    const senha = document.getElementById('senha').value;

    // Salve o email e senha no localStorage (não recomendado em um ambiente real)
    localStorage.setItem('email', email);

    localStorage.setItem('senha', senha);

    alert('Cadastro bem-sucedido!');
    window.location.href = '../HTML/login.html'; // Redirecione para a página de login
  });
});

