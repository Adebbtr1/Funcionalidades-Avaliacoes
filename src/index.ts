import { usuarios, itens } from './Database';
import { Comentario } from './models/Comentario';

const usuario = usuarios[0]; 
const item = itens[0];       


usuario.adicionarAoCarrinho(item);


const comentario = new Comentario(usuario, "Ótimo teclado!");
usuario.criarComentario(item, comentario);


item.adicionarAvaliacao(3); 
item.adicionarAvaliacao(5); 


console.log("Itens no carrinho:");
usuario.listarCarrinho().forEach(item => {
    console.log(`Item: ${item.nome}, Preço: ${item.valor}`);
    console.log(`Média de avaliações: ${item.obterMediaAvaliacoes().toFixed(2)}`);
    item.getComentarios().forEach(comentario => {
        console.log(`Comentário de ${comentario.usuario.nome}: ${comentario.conteudo}`);
    });
});
