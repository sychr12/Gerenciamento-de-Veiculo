document.getElementById('formCadastroVeiculo').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    const responsavel = document.getElementById('responsavel').value;
    const modelo = document.getElementById('modelo').value;
    const placa = document.getElementById('placa').value;
    const dataCadastro = document.getElementById('dataCadastro').value;
    const setor = document.getElementById('setor').value;

    // Create vehicle object
    const veiculo = {
        responsavel,
        modelo,
        placa,
        dataCadastro,
        setor
    };

    // Save to localStorage
    localStorage.setItem('veiculoCadastrado', JSON.stringify(veiculo));

    // Notify user
    alert('Veículo cadastrado com sucesso!');

    // Clear form
    document.getElementById('formCadastroVeiculo').reset();
});