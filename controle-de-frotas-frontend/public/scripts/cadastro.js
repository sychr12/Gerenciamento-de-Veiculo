
document.getElementById('formCadastroVeiculo').addEventListener('submit', function (event) {
    event.preventDefault();


    const Fucionario = document.getElementById('Fucionario').value;
    const placa = document.getElementById('placa').value;
    const modelo = document.getElementById('modelo').value;
    const dataCadastro = document.getElementById('dataCadastro').value;
    const Setor = document.getElementById('Setor').value;
    const responsavel = document.getElementById('responsavel').value;


    const veiculo = {
        Fucionario:Fucionario,
        placa: placa,
        modelo: modelo,
        dataCadastro: dataCadastro,
        Setor: Setor,
        responsavel: responsavel
    };

    
    localStorage.setItem('veiculoCadastrado', JSON.stringify(veiculo));

    window.location.href = 'home.html';
});