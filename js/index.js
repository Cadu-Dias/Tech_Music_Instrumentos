$(document).ready(function(){

    $(window).scroll(function(){
      if($(this).scrollTop() > 40){
        $('#topBtn').fadeIn();
      } else{
        $('#topBtn').fadeOut();
      }
    });
  
    $("#topBtn").click(function(){
      $('html ,body').animate({scrollTop : 0},800);
    });
});

const listaProdutos = [
    {
        id: 1,
        nome: "Violão",
        imagem: "/img/imagem_violao_produto.png",
        descricao: "Com cordas não utilizadas de qualidade", 
        preco: "R$ 150,00",
        classe: "Corda"
    },
    {
        id: 2,
        nome: "Piano",
        imagem: "/img/imagem_piano.png",
        descricao: "Importado da Irlanda de um grande construtor", 
        preco: "R$ 7.500,00",
        classe: "Corda"
    },
    {
        id: 3,
        nome: "Saxophone",
        imagem: "/img/imagem_saxophone.png",
        descricao: "Vindo de uma produtora de sax para orquestras", 
        preco: "R$ 1.000,00",
        classe: "Percussão"
    },
    {
        id: 4,
        nome: "Guitarra",
        imagem: "/img/imagem_guitarra.png",
        descricao: "Guitarra de qualidade utilizada por Ozzy Osbourn", 
        preco: "R$ 3.000,00",
        classe: "Corda"
    },
    {
        id: 5,
        nome: "Trompete",
        imagem: "/img/imagem_trompete.png",
        descricao: "Obtida de uma produtora de Trompete para orquestras", 
        preco: "R$ 700,00",
        classe: "Percussão"
    },
    {
        id: 6,
        nome: "Flauta",
        imagem: "/img/imagem_flauta.png",
        descricao: "Adquirida de um tocador de flauta profissional", 
        preco: "R$ 1.364,00",
        classe: "Percussão"
    },
    {
        id: 7,
        nome: "Acordeão",
        imagem: "/img/imagem_acordeao.png",
        descricao: "Pertencente a um grande músico do Nordeste", 
        preco: "R$ 606,00",
        classe: "Percussão"
    },
    {
        id: 8,
        nome: "Bateria",
        imagem: "/img/imagem_bateria.png",
        descricao: "Modelo utilizado em grandes espetáculos", 
        preco: "R$ 4.000,00",
        classe: "Percussão"
    },
    {
        id: 9,
        nome: "Arpa",
        imagem: "/img/imagem_arpa.png",
        descricao: "Construída em 1785 e conservada até hoje", 
        preco: "R$ 10.925,00",
        classe: "Corda"
    },
]


function avisoBoasVindas() {
    Swal.fire({
        icon: 'success',
        title: 'Boas Vindas!',
        text: 'Você realizou o Login',
        showCloseButton: true
    });
}

function formularioEnviado(){

    const nomeCompleto = document.querySelector("#nomeCompleto").value
    const email = document.querySelector("#email").value
    const telefone = document.querySelector("#telefone").value
    const mensagem = document.querySelector("#mensagem").value

    var params = {
        from_name: nomeCompleto,
        from_email: email,
        from_telefone: telefone,
        message: mensagem, 
        contact: document.querySelector("input[name='contato']:checked").value   
    }
        
       
    emailjs.send("service_8x1v02j", "template_qzu76up", params).then(function(res) {
        Swal.fire({
        icon: 'success',
        title: 'Formulário de Contato enviado',
        showCloseButton: true,
    });
        document.querySelector('#nomeCompleto').value = ''
        document.querySelector('#email').value = ''
        document.querySelector('#telefone').value = ''
        document.querySelector('#mensagem').value = ''
    })
}

function termoDeBusca() {
    const input_pesquisa = document.querySelector('#input-pesquisa')
    let termoDeBusca = input_pesquisa.value

    if(termoDeBusca === "") {
        Swal.fire({
            icon: 'error',
            title: 'Você deve escrever algo para pesquisar um produto',
            showCloseButton: true,
        });
    }
    else{
        localStorage.setItem("produto_pesquisa", termoDeBusca)
        window.location.href = '/html/produtos.html'
    }
}

const classe_percussao = document.querySelector(".classe_percussao")
classe_percussao.addEventListener("click", () => {

    localStorage.setItem("classe_produto", "Percussão")
})

const classe_corda = document.querySelector(".classe_corda")
classe_corda.addEventListener("click", () => {

    localStorage.setItem("classe_produto", "Corda")
})

function carregarProdutoFiltro() {

    let produtoFiltro = localStorage.getItem("produto_pesquisa")
    let classeProduto = localStorage.getItem("classe_produto")

    if(produtoFiltro != null) {
        const main_produtos = document.querySelector(".inicio_produtos")
        main_produtos.innerHTML = ''

        localStorage.removeItem("produto_pesquisa")
        
        let article_produtos = document.createElement("article")
        article_produtos.classList.add("container-md")

        let texto_conferir = document.createElement("h1")
        texto_conferir.classList.add("margHead")
        texto_conferir.setAttribute("id", "titulo_principal")
        texto_conferir.innerText = "Confira nossos produtos disponíveis!"

        let section_produtos = document.createElement("section")
        section_produtos.classList.add("row")

        article_produtos.appendChild(texto_conferir)
        article_produtos.appendChild(section_produtos)

        main_produtos.appendChild(article_produtos)

        for(let i = 0; i <= listaProdutos.length - 1; i++) {
            if(listaProdutos[i]['nome'].toLocaleLowerCase().includes(produtoFiltro.toLocaleLowerCase()) === true || listaProdutos[i]['descricao'].toLocaleLowerCase().includes(produtoFiltro.toLocaleLowerCase()) == true) {

                let section_produto_especifico = document.createElement('section')
                section_produto_especifico.classList.add("col-md-3", "col-sm-5", "col-11", "border", "border-1", "border-dark", "rounded-1", "p-2", "m-3")

                let nome_produto = document.createElement("h2")
                nome_produto.classList.add("text-center")
                nome_produto.innerText = listaProdutos[i]['nome']

                let div1 = document.createElement("div")
                div1.classList.add("text-center")

                let imagem_produto = document.createElement("img")
                imagem_produto.classList.add("imagem_produto", "col-sm-12", "col-8")
                imagem_produto.src = listaProdutos[i]['imagem']

                let descricao_produto = document.createElement("p")
                descricao_produto.classList.add("produto-descricao", "font18px")
                descricao_produto.innerText = listaProdutos[i]['descricao']

                let preco_produto = document.createElement("span")
                preco_produto.classList.add("produto-preco", "font21px", "neg")
                preco_produto.innerText = listaProdutos[i]['preco']
                
                let botao_carrinho = document.createElement('button')
                botao_carrinho.classList.add('botao_carrinho')
                botao_carrinho.setAttribute('id', listaProdutos[i]['id'])
                botao_carrinho.innerHTML = 'Adicionar ao Carrinho'
                
                let botao_comprar = document.createElement('button')
                botao_comprar.classList.add('botao_comprar')
                botao_comprar.innerHTML = 'Comprar um Item'

                div1.appendChild(imagem_produto)
                div1.appendChild(descricao_produto)
                div1.appendChild(preco_produto)
                div1.appendChild(botao_carrinho)
                div1.appendChild(botao_comprar)


                section_produto_especifico.appendChild(nome_produto)
                section_produto_especifico.appendChild(div1)

                section_produtos.appendChild(section_produto_especifico)
            }
        }
        if (section_produtos.childElementCount === 0) {

            const texto_nao_encontrado = document.createElement("h2")
            texto_nao_encontrado.classList.add("margHead", "mt-5")
            texto_nao_encontrado.innerText = "Nenhum produto foi encontrado!"

            section_produtos.appendChild(texto_nao_encontrado)
        }
    } 
    else if(classeProduto != null) {

        const main_produtos = document.querySelector(".inicio_produtos")
        main_produtos.innerHTML = ''

        let article_produtos = document.createElement("article")
        article_produtos.classList.add("container-md")

        let texto_conferir = document.createElement("h1")
        texto_conferir.classList.add("margHead")
        texto_conferir.setAttribute("id", "titulo_principal")
        texto_conferir.innerText = "Confira nossos produtos disponíveis do tipo " + classeProduto + "!"

        let section_produtos = document.createElement("section")
        section_produtos.classList.add("row")

        article_produtos.appendChild(texto_conferir)
        article_produtos.appendChild(section_produtos)

        main_produtos.appendChild(article_produtos)

        localStorage.removeItem("classe_produto")

        if(classeProduto === "Corda") {
            for(let i = 0; i <= listaProdutos.length - 1; i++) {
                if(listaProdutos[i]['classe'] === classeProduto) {
                    let section_produto_especifico = document.createElement('section')
                    section_produto_especifico.classList.add("col-md-3", "col-sm-5", "col-11", "border", "border-1", "border-dark", "rounded-1", "p-2", "m-3")

                    let nome_produto = document.createElement("h2")
                    nome_produto.classList.add("text-center")
                    nome_produto.innerText = listaProdutos[i]['nome']

                    let div1 = document.createElement("div")
                    div1.classList.add("text-center")

                    let imagem_produto = document.createElement("img")
                    imagem_produto.classList.add("imagem_produto", "col-sm-12", "col-8")
                    imagem_produto.src = listaProdutos[i]['imagem']

                    let descricao_produto = document.createElement("p")
                    descricao_produto.classList.add("produto-descricao", "font18px")
                    descricao_produto.innerText = listaProdutos[i]['descricao']

                    let preco_produto = document.createElement("span")
                    preco_produto.classList.add("produto-preco", "font21px", "neg")
                    preco_produto.innerText = listaProdutos[i]['preco']
                    
                    let botao_carrinho = document.createElement('button')
                    botao_carrinho.classList.add('botao_carrinho')
                    botao_carrinho.setAttribute('id', listaProdutos[i]['id'])
                    botao_carrinho.innerHTML = 'Adicionar ao Carrinho'
                    
                    let botao_comprar = document.createElement('button')
                    botao_comprar.classList.add('botao_comprar')
                    botao_comprar.innerHTML = 'Comprar um Item'

                    div1.appendChild(imagem_produto)
                    div1.appendChild(descricao_produto)
                    div1.appendChild(preco_produto)
                    div1.appendChild(botao_carrinho)
                    div1.appendChild(botao_comprar)


                    section_produto_especifico.appendChild(nome_produto)
                    section_produto_especifico.appendChild(div1)

                    section_produtos.appendChild(section_produto_especifico)
                }
            }
        }
        else if (classeProduto === "Percussão") {
            for(let i = 0; i <= listaProdutos.length - 1; i++) {
                if(listaProdutos[i]['classe'] === classeProduto) {
                    let section_produto_especifico = document.createElement('section')
                    section_produto_especifico.classList.add("col-md-3", "col-sm-5", "col-11", "border", "border-1", "border-dark", "rounded-1", "p-2", "m-3")

                    let nome_produto = document.createElement("h2")
                    nome_produto.classList.add("text-center")
                    nome_produto.innerText = listaProdutos[i]['nome']

                    let div1 = document.createElement("div")
                    div1.classList.add("text-center")

                    let imagem_produto = document.createElement("img")
                    imagem_produto.classList.add("imagem_produto", "col-sm-12", "col-8")
                    imagem_produto.src = listaProdutos[i]['imagem']

                    let descricao_produto = document.createElement("p")
                    descricao_produto.classList.add("produto-descricao", "font18px")
                    descricao_produto.innerText = listaProdutos[i]['descricao']

                    let preco_produto = document.createElement("span")
                    preco_produto.classList.add("produto-preco", "font21px", "neg")
                    preco_produto.innerText = listaProdutos[i]['preco']
                    
                    let botao_carrinho = document.createElement('button')
                    botao_carrinho.classList.add('botao_carrinho')
                    botao_carrinho.setAttribute('id', listaProdutos[i]['id'])
                    botao_carrinho.innerHTML = 'Adicionar ao Carrinho'
                    
                    let botao_comprar = document.createElement('button')
                    botao_comprar.classList.add('botao_comprar')
                    botao_comprar.innerHTML = 'Comprar um Item'

                    div1.appendChild(imagem_produto)
                    div1.appendChild(descricao_produto)
                    div1.appendChild(preco_produto)
                    div1.appendChild(botao_carrinho)
                    div1.appendChild(botao_comprar)


                    section_produto_especifico.appendChild(nome_produto)
                    section_produto_especifico.appendChild(div1)

                    section_produtos.appendChild(section_produto_especifico)
                }
            }
        }
    }
}
