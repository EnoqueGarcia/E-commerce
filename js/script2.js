function salvarCarrinho(carrinho) {
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
}

function carregarCarrinho() {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const listaCarrinho = document.getElementById('carrinho-lista');
    const totalElement = document.getElementById('carrinho-total');
    const carrinhoVazio = document.getElementById('carrinho-vazio');
    const carrinhoConteudo = document.getElementById('carrinho-conteudo');
    let total = 0;

    listaCarrinho.innerHTML = ''; 

    if (carrinho.length === 0) {
        carrinhoVazio.classList.remove('hidden');
        carrinhoConteudo.classList.add('hidden');
        return;
    }

    carrinhoVazio.classList.add('hidden');
    carrinhoConteudo.classList.remove('hidden');

    carrinho.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('carrinho-item');
        
        // NOVO HTML: Inclui os botões de Qtd e remove o botão "Remover"
        itemElement.innerHTML = `
            <img src="${item.imgSrc}" alt="${item.nome}">
            <div class="item-info">
                <h3>${item.nome}</h3>
                <span class="price">R$ ${item.preco.toFixed(2).replace('.', ',')}</span>
                <div class="quantidade-controle">
                    <button class="btn-quantidade btn-decremento" data-id="${item._id}">-</button>
                    <span class="quantidade-valor" data-id="${item._id}">${item.quantidade}</span>
                    <button class="btn-quantidade btn-incremento" data-id="${item._id}">+</button>
                </div>
            </div>
        `;
        listaCarrinho.appendChild(itemElement);
        total += item.preco * item.quantidade;
    });

    totalElement.textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;

    // Adiciona event listeners para os novos botões
    document.querySelectorAll('.btn-incremento').forEach(btn => {
        btn.addEventListener('click', () => {
            atualizarQuantidade(btn.dataset.id, 1);
        });
    });

    document.querySelectorAll('.btn-decremento').forEach(btn => {
        btn.addEventListener('click', () => {
            atualizarQuantidade(btn.dataset.id, -1);
        });
    });
}

// NOVA FUNÇÃO: Lógica de atualização de quantidade
function atualizarQuantidade(id, delta) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    
    // Encontra o índice do item
    const itemIndex = carrinho.findIndex(item => item._id === id);
    
    if (itemIndex !== -1) {
        const novoQtd = carrinho[itemIndex].quantidade + delta;

        if (novoQtd > 0) {
            // Aumenta ou diminui a quantidade
            carrinho[itemIndex].quantidade = novoQtd;
        } else {
            // Se a quantidade for para 0 ou menos, remove o item
            carrinho.splice(itemIndex, 1);
        }
        
        salvarCarrinho(carrinho);
        carregarCarrinho(); // Recarrega o carrinho para atualizar a visualização e o total
    }
}

// A função removerItem não é mais necessária, pois a lógica está em atualizarQuantidade

window.addEventListener('DOMContentLoaded', carregarCarrinho);