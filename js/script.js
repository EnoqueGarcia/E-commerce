// JS de index.html
const produtosIniciais = [
  {
    _id: "667610111100005a765a0b73",
    nome: "Jaqueta de Couro",
    descricao: "Jaqueta de couro sintético, com acabamento em zíper metálico e cinto ajustável.",
    preco: 350.00,
    imgSrc: "https://img.kwcdn.com/product/fancy/815a9269-cacc-403c-aff9-3101dcba3313.jpg?imageView2/2/w/800/q/70/format/webp",
    fotosAdicionais: [
      "https://img.kwcdn.com/product/fancy/2d3c6a4c-0a83-4b5d-84e7-93e96aa9bb99.jpg?imageView2/2/w/800/q/70/format/webp",
      "https://img.kwcdn.com/product/fancy/9a85920a-e0a3-473c-aac7-9903e92ef559.jpg?imageView2/2/w/800/q/70/format/webp"
    ]
  },
  {
    _id: "667610111100005a765a0b74",
    nome: "Vestido",
    descricao: "Vestido rodado elegante e moderno com mangas bufantes.",
    preco: 150.00,
    imgSrc: "https://img.kwcdn.com/thumbnail/s/eafc231c11bc0e500edd443d514f6581_2106a25a0e4a.jpg?imageView2/2/w/800/q/70/format/webp",
    fotosAdicionais: [
      "https://img.kwcdn.com/product/fancy/8d833a0b-9daa-4a1e-b8c2-a4e6104b826d.jpg?imageView2/2/w/800/q/70/format/webp",
      "https://img.kwcdn.com/product/fancy/b8b74310-c53b-4154-a74f-0dfb51d6b3a0.jpg?imageView2/2/w/800/q/70/format/webp"
    ]
  },
  {
    _id: "667610111100005a765a0b75",
    nome: "Camisa Social Masculina",
    descricao: "Clássica e Casual em Bege/Marrom/Cinza/Azul, ideal para Negócios, Casamentos, Festas do dia a Dia",
    preco: 55.00,
    imgSrc: "https://img.kwcdn.com/product/fancy/34b3e327-6ab5-4ef2-b317-4ba60dd920d5.jpg?imageView2/2/w/800/q/70/format/webp",
    fotosAdicionais: [
      "https://img.kwcdn.com/product/fancy/b4d8a1c6-5b97-47ae-a04e-c50789edaee9.jpg?imageView2/2/w/800/q/70/format/webp",
      "https://img.kwcdn.com/product/fancy/c852a797-02ed-4490-b6a4-57f2fd2be983.jpg?imageView2/2/w/800/q/70/format/webp"
    ]
  },
  {
    _id: "667610111100005a765a0b76",
    nome: "Calça Jeans Masculina Tradicional Básica",
    descricao: "Cal\u00e7a Jeans masculina B\u00e1sica Tradicional, \u00e9 a escolha perfeita para um look casual e despojado. Feita em jeans de algod\u00e3o, oferece conforto e durabilidade.",
    preco: 88.00,
    imgSrc: "https://http2.mlstatic.com/D_NQ_NP_938476-MLB76299642935_052024-O-calca-jeans-masculina-tradicional-basica-casual-moda-luxo.webp",
    fotosAdicionais: [
      "https://http2.mlstatic.com/D_NQ_NP_975950-MLB85575502126_062025-O-calca-jeans-masculina-tradicional-basica-casual-moda-luxo.webp",
      "https://http2.mlstatic.com/D_NQ_NP_955241-MLB76115010656_052024-O-calca-jeans-masculina-tradicional-basica-casual-moda-luxo.webp"
    ],
    
    
  },
  {
    _id: "667610111100005a765a0b77",
    nome: "Sandália Feminina",
    descricao: "A sandália Vizzano é um calçado confeccionado com materiais de qualidade e que combina estilo e praticidade. Sua palmilha acolchoada garante conforto durante todo o dia.",
    preco: 69.90,
    imgSrc: "https://http2.mlstatic.com/D_NQ_NP_935239-MLB77029949492_062024-O-sandalia-feminina-salto-grosso-com-fivela-conforto-original.webp",
    fotosAdicionais: [
      "https://http2.mlstatic.com/D_NQ_NP_888391-MLB77029940102_062024-O-sandalia-feminina-salto-grosso-com-fivela-conforto-original.webp",
      "https://http2.mlstatic.com/D_NQ_NP_626340-MLB77241236185_062024-O-sandalia-feminina-salto-grosso-com-fivela-conforto-original.webp"
    ],
    
    
  },
  {
    _id: "667610111100005a765a0b78",
    nome: "Moletom",
    descricao: "Moletom Blusa De Frio Capuz Liso Canguru Agasalho Flanelado",
    preco: 78.90,
    imgSrc: "https://http2.mlstatic.com/D_NQ_NP_937604-MLB85920398056_062025-O-moletom-blusa-de-frio-capuz-liso-canguru-agasalho-flanelado.webp",
    fotosAdicionais: [
      "https://http2.mlstatic.com/D_NQ_NP_840973-MLB84326237281_052025-O-moletom-blusa-de-frio-capuz-liso-canguru-agasalho-flanelado.webp",
      "https://http2.mlstatic.com/D_NQ_NP_633700-MLB84326034003_052025-O-moletom-blusa-de-frio-capuz-liso-canguru-agasalho-flanelado.webp"
    ],
    
    
  }
];

const modal = document.getElementById('modal');
const modalImages = document.getElementById('modal-images');
const closeModalBtn = document.getElementById('close-modal');
const contadorCarrinho = document.getElementById('carrinho-contador');

const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

// A vari\u00e1vel 'produtos' agora ser\u00e1 definida ao carregar a p\u00e1gina
let produtos = [];

function showModal(fotos) {
  if (!fotos || fotos.length === 0) {
    return;
  }
  modalImages.innerHTML = fotos.map(src => `<img src="${src}" alt="Foto do produto"/>`).join('');
  modal.classList.remove('hidden');
}

closeModalBtn.addEventListener('click', () => {
  modal.classList.add('hidden');
  modalImages.innerHTML = '';
});

modal.addEventListener('click', e => {
  if (e.target === modal) {
    modal.classList.add('hidden');
    modalImages.innerHTML = '';
  }
});

function atualizarContadorCarrinho() {
  const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  const totalItens = carrinho.reduce((total, item) => total + item.quantidade, 0);
  
  if (totalItens > 0) {
    contadorCarrinho.textContent = totalItens;
    contadorCarrinho.classList.remove('hidden');
  } else {
    contadorCarrinho.classList.add('hidden');
  }
}

function adicionarAoCarrinho(produto) {
  const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  const produtoExistente = carrinho.find(item => item._id === produto._id);

  if (produtoExistente) {
    produtoExistente.quantidade++;
  } else {
    carrinho.push({ ...produto, quantidade: 1 });
  }

  localStorage.setItem('carrinho', JSON.stringify(carrinho));
  atualizarContadorCarrinho();
}

function bindBuyButtons() {
    document.querySelectorAll('.btn-buy').forEach(button => {
        button.addEventListener('click', () => {
            const id = button.dataset.id;
            const produtoSelecionado = produtos.find(p => p._id === id);
            if (produtoSelecionado) {
                adicionarAoCarrinho(produtoSelecionado);
            }
        });
    });
}

function bindDetailsButtons() {
  document.querySelectorAll('.btn-details').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.id;
      const produtoSelecionado = produtos.find(p => p._id === id);
      if (produtoSelecionado) {
        showModal(produtoSelecionado.fotosAdicionais);
      }
    });
  });
}

function adicionarProdutoNaPagina(produto) {
  const grid = document.getElementById('products-grid');
  const card = document.createElement('div');
  card.classList.add('card');
  card.setAttribute('data-id', produto._id);

  card.innerHTML = `
    <img src="${produto.imgSrc}" alt="${produto.nome}">
    <div>
      <h3>${produto.nome}</h3>
      <p>${produto.descricao}</p>
      <span class="price">R$ ${produto.preco.toFixed(2).replace('.', ',')}</span>
      <button class="btn-details" data-id="${produto._id}">Ver mais fotos</button>
      <button class="btn-buy" data-id="${produto._id}">Adicionar ao Carrinho</button>
    </div>
  `;
  grid.appendChild(card);
}

function carregarProdutos() {
  const loadingMessage = document.getElementById('loading-message');
  const grid = document.getElementById('products-grid');
  
  // Limpa o grid para evitar duplicatas
  grid.innerHTML = '';
  
  // Pega os produtos do localStorage. Se n\u00e3o tiver, usa um array vazio.
  const produtosDoLocalStorage = JSON.parse(localStorage.getItem('produtos')) || [];

  // Junta os produtos iniciais com os do localStorage.
  // Isso garante que os produtos iniciais sempre apare\u00e7am.
  produtos = [...produtosIniciais, ...produtosDoLocalStorage];

  if (produtos && produtos.length > 0) {
    produtos.forEach(prod => adicionarProdutoNaPagina(prod));
  } else {
    const noResultsMessage = document.createElement('p');
    noResultsMessage.classList.add('col-span-full', 'text-center', 'text-gray-500');
    noResultsMessage.textContent = 'Nenhum produto encontrado no cat\u00e1logo.';
    grid.appendChild(noResultsMessage);
  }

  bindDetailsButtons();
  bindBuyButtons();
  atualizarContadorCarrinho();
}

function filterProducts() {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredProducts = produtos.filter(produto => 
        produto.nome.toLowerCase().includes(searchTerm) ||
        produto.descricao.toLowerCase().includes(searchTerm)
    );
    
    const grid = document.getElementById('products-grid');
    grid.innerHTML = '';
    
    if (filteredProducts.length > 0) {
      filteredProducts.forEach(prod => adicionarProdutoNaPagina(prod));
    } else {
      const noResultsMessage = document.createElement('p');
      noResultsMessage.classList.add('col-span-full', 'text-center', 'text-gray-500');
      noResultsMessage.textContent = 'Nenhum produto encontrado no cat\u00e1logo.';
      grid.appendChild(noResultsMessage);
    }
    
    bindDetailsButtons();
    bindBuyButtons();
}

// Inicializa a p\u00e1gina
window.addEventListener('DOMContentLoaded', () => {
    carregarProdutos();
});

// Event listeners para a pesquisa
searchButton.addEventListener('click', filterProducts);
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        filterProducts();
    }
});


//Nova função ao clicar no produto:

// FUNÇÃO ATUALIZADA: Adiciona o wrapper 'image-link' em volta da imagem
function adicionarProdutoNaPagina(produto) {
    const grid = document.getElementById('products-grid');
    const card = document.createElement('div');
    card.classList.add('card');
    card.setAttribute('data-id', produto._id);

    card.innerHTML = `
        <div class="image-link" data-id="${produto._id}">
            <img src="${produto.imgSrc}" alt="${produto.nome}">
        </div>
        <div>
            <h3>${produto.nome}</h3>
            <p>${produto.descricao}</p>
            <span class="price">R$ ${produto.preco.toFixed(2).replace('.', ',')}</span>
            <button class="btn-details" data-id="${produto._id}">Ver mais fotos</button>
            <button class="btn-buy" data-id="${produto._id}">Adicionar ao Carrinho</button>
        </div>
    `;
    grid.appendChild(card);
}

// FUNÇÃO ATUALIZADA: Adiciona o event listener para o novo 'image-link'
function bindDetailsButtons() {
    // 1. Vincula o botão "Ver mais fotos" (código que você já tinha)
    document.querySelectorAll('.btn-details').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = btn.dataset.id;
            const produtoSelecionado = produtos.find(p => p._id === id);
            if (produtoSelecionado) {
                showModal(produtoSelecionado.fotosAdicionais);
            }
        });
    });

    // 2. NOVO: Vincula o clique na imagem
    document.querySelectorAll('.image-link').forEach(link => {
        link.addEventListener('click', () => {
            const id = link.dataset.id;
            const produtoSelecionado = produtos.find(p => p._id === id);
            if (produtoSelecionado) {
                showModal(produtoSelecionado.fotosAdicionais); // Chama a mesma função!
            }
        });
    });
}