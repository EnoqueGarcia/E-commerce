//JS do adm.html

document.getElementById('product-form').addEventListener('submit', function(event) {
        event.preventDefault();

        // Pega os valores do formul\u00e1rio
        const nome = document.getElementById('nome').value;
        const descricao = document.getElementById('descricao').value;
        const preco = parseFloat(document.getElementById('preco').value);
        const imgSrc = document.getElementById('imgSrc').value;
        const fotosAdicionais = document.getElementById('fotosAdicionais').value
            .split(',')
            .map(url => url.trim())
            .filter(url => url !== '');

        // Cria o objeto do novo produto com um ID \u00fanico
        const novoProduto = {
            _id: Date.now().toString(), // Um ID simples baseado no timestamp
            nome,
            descricao,
            preco,
            imgSrc,
            fotosAdicionais
        };

        // Pega os produtos existentes do localStorage ou cria um array vazio
        const produtosSalvos = JSON.parse(localStorage.getItem('produtos')) || [];

        // Adiciona o novo produto ao array
        produtosSalvos.push(novoProduto);

        // Salva o array atualizado de volta no localStorage
        localStorage.setItem('produtos', JSON.stringify(produtosSalvos));

        // Redireciona para a p\u00e1gina inicial
        window.location.href = 'index.html';
    });