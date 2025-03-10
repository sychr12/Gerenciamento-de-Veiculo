
const veiculoCadastrado = JSON.parse(localStorage.getItem('veiculoCadastrado'));
const Veiculos = JSON.parse(localStorage.getItem('Veiculos'));


const detalhesVeiculo = document.getElementById('detalhesVeiculo');
if (veiculoCadastrado) {
    detalhesVeiculo.innerHTML = `
        <p><strong>Fucionario:</strong> ${veiculoCadastrado.Fucionario}</p>
        <p><strong>Placa:</strong> ${veiculoCadastrado.placa}</p>
        <p><strong>Modelo:</strong> ${veiculoCadastrado.modelo}</p>
        <p><strong>Data de Cadastro:</strong> ${veiculoCadastrado.dataCadastro}</p>
        <p><strong>Setor:</strong> ${veiculoCadastrado.Setor}</p>
        <p><strong>Responsável:</strong> ${veiculoCadastrado.responsavel}</p>
    `;
} else {
    detalhesVeiculo.innerHTML = '<p>Nenhum veículo cadastrado ainda.</p>';
}


    window.onload = function() {

        const params = new URLSearchParams(window.location.search);
        
        const veiculo = params.get('veiculo');
        const placa = params.get('placa');
        const ano = params.get('ano');
        const cor = params.get('cor');

   
        document.getElementById('veiculo-info').innerHTML = `
            Veículo: ${veiculo}<br>
            Placa: ${placa}<br>
            Ano: ${ano}<br>
            Cor: ${cor}
        `;
    }


    function getVeiculoFromURL() {
        const urlParams = new URLSearchParams(window.location.search);
        const veiculoEncoded = urlParams.get('veiculo');

        if (veiculoEncoded) {
            const veiculoJSON = decodeURIComponent(veiculoEncoded);
            return JSON.parse(veiculoJSON);
        }
        return null;
    }


    function preencherCampos() {
        const veiculo = getVeiculoFromURL();

        if (veiculo) {
            document.getElementById('nome-veiculo').value = veiculo.nome;
            document.getElementById('placa-veiculo').value = veiculo.placa;
            document.getElementById('ano-veiculo').value = veiculo.ano;
            document.getElementById('cor-veiculo').value = veiculo.cor;
        }
    }

 
    window.onload = preencherCampos;


