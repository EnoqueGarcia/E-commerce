 //  JS do carrinho.html
 
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
        itemElement.innerHTML = `
          <img src="${item.imgSrc}" alt="${item.nome}">
          <div>
            <h3>${item.nome}</h3>
            <span class="price">R$ ${item.preco.toFixed(2).replace('.', ',')}</span>
            <p>Qtd: ${item.quantidade}</p>
            <button class="btn-remover" data-id="${item._id}">Remover</button>
          </div>
        `;
        listaCarrinho.appendChild(itemElement);
        total += item.preco * item.quantidade;
      });

      totalElement.textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;

      document.querySelectorAll('.btn-remover').forEach(btn => {
        btn.addEventListener('click', () => {
          const id = btn.dataset.id;
          removerItem(id);
        });
      });
    }

    function removerItem(id) {
      let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
      
      carrinho = carrinho.filter(item => item._id !== id);
      
      localStorage.setItem('carrinho', JSON.stringify(carrinho));
      
      carregarCarrinho();
    }

    window.addEventListener('DOMContentLoaded', carregarCarrinho);