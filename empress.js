function validarDados()
{
    const cpf = document.getElementById('cpf').value
    
    if(validarCPF(cpf))
    {
            alert('cpf valido!!!')
        
    }
    else
    {
        alert('cpf inválido');
    }
}

function validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g, ''); // Remover caracteres não numéricos

    // Verificar se o CPF possui 11 dígitos
    if (cpf.length !== 11) {
        return false;
    }

    // Verificar se todos os dígitos são iguais
    if (/(\d)\1{10}/.test(cpf)) {
        return false;
    }

    // Calcular os dígitos verificadores
    let soma1 = 0;
    let soma2 = 0;
    for (let i = 0; i < 9; i++) {
        soma1 += parseInt(cpf.charAt(i)) * (10 - i);
        soma2 += parseInt(cpf.charAt(i)) * (11 - i);
    }
    let dv1 = (soma1 % 11) < 2 ? 0 : 11 - (soma1 % 11);
    let dv2 = (soma2 % 11) < 2 ? 0 : 11 - (soma2 % 11);

    // Verificar se os dígitos verificadores estão corretos
    if (parseInt(cpf.charAt(9)) !== dv1 || parseInt(cpf.charAt(10)) !== dv2) {
        return false;
    }

    return true;
}