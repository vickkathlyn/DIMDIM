function validarDados() {
    const contaInput = document.getElementById('conta');
    contaInput.addEventListener('input', function() {
      let value = this.value.replace(/\D/g, ''); // Remove qualquer caractere não numérico
      if (value.length > 4) {
        value = value.slice(0, 4) + '-' + value.slice(4, 6); // Adiciona o hífen após o quarto caractere e permite até mais dois caracteres
      }
      this.value = value;
    });
  }