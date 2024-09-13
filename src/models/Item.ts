import { Comentario } from './Comentario';

export interface DataItem {
    valor: number;
    nome: string;
    descricao: string;
}

export class Item {
    private _valor: number;
    private _nome: string;
    private _descricao: string;
    private _comentarios: Comentario[] = [];
    private _avaliacoes: number[] = []; 

    constructor(parametro: DataItem) {
        this._valor = parametro.valor;
        this._nome = parametro.nome;
        this._descricao = parametro.descricao;
    }

    public set valor(valor: number) {
        if (valor <= 25) {
            throw new Error("Valor inferior ao exigido");
        }
        this._valor = valor;
    }

    public get valor(): number {
        return this._valor;
    }

    public set nome(nome: string) {
        if (nome.length <= 3) {
            throw new Error("Nome muito curto");
        }
        this._nome = nome;
    }

    public get nome(): string {
        return this._nome;
    }

    public set descricao(descricao: string) {
        if (descricao.length <= 3) {
            throw new Error("Descrição muito curta");
        }
        this._descricao = descricao;
    }

    public get descricao(): string {
        return this._descricao;
    }
    public adicionarComentario(comentario: Comentario) {
        this._comentarios.push(comentario);
    }

    public getComentarios(): Comentario[] {
        return this._comentarios;
    }

    public adicionarAvaliacao(nota: number) {
        if (nota < 0 || nota > 5) {
            throw new Error("Nota deve estar entre 0 e 5");
        }
        this._avaliacoes.push(nota);
    }

    public obterMediaAvaliacoes(): number {
        const total = this._avaliacoes.reduce((acc, nota) => acc + nota, 0);
        return this._avaliacoes.length ? total / this._avaliacoes.length : 0;
    }
}
