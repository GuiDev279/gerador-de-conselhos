
const botaoConselho = document.getElementById('btn')
const tituloConselho = document.querySelector('.advice-id')
const pegarDescricao = document.getElementById('conselho')

async function gerarMensagem(){
    try{
        const url = 'https://api.adviceslip.com/advice'
        const resposta = await fetch(url)

        if(!resposta.ok){
            throw new Error("Ocorreu um erro ao tentar buscar as informações da API");
        }

        const conteudo = await resposta.json()
        const conselhoId = `Advice #${conteudo.slip.id}`;
        const conselhoTexto = `"${conteudo.slip.advice}"`;

        tituloConselho.innerText = conselhoId;
        pegarDescricao.innerText = conselhoTexto;

    }catch(error){
            console.error("Erro ao tentar buscar as informações da API", error);
        }
}

botaoConselho.addEventListener('click', gerarMensagem);

gerarMensagem()


