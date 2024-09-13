import { Usuario } from './Usuario';

export class Comentario {
    constructor(public usuario: Usuario, public conteudo: string) {}
}
