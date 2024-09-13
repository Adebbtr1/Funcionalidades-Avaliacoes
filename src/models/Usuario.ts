import { Item } from './Item';
import { Comentario } from './Comentario';

export class Usuario {
    private _carrinho: Item[] = [];

    constructor(public id: number, public nome: string) {}

    public adicionarAoCarrinho(item: Item) {
        this._carrinho.push(item);
    }

    public criarComentario(item: Item, comentario: Comentario) {
        item.adicionarComentario(comentario);
    }
    
    public listarCarrinho(): Item[] {
        return this._carrinho;
    }
}
