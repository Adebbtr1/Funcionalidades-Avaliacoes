import { Usuario } from './models/Usuario';
import { Item } from './models/Item';

export const usuarios: Usuario[] = [
    new Usuario(1, 'Leonardo'),
    new Usuario(2, 'Debora'),
];

export const itens: Item[] = [
    new Item({ valor: 100, nome: 'Teclado', descricao: 'Mecânico' }),
    new Item({ valor: 50, nome: 'Mouse', descricao: 'Ergonômico' }),
];
