import { db } from "../database";
import { RowDataPacket, ResultSetHeader } from "mysql2";

export class Livro{
    private _id: number;
    private _titulo: string;
    private _descricao: string;
    private _paginas: number;
    private _autor: string;
    private _anoPublicacao: number;
    private _quantidade: number;

    constructor(id: number, titulo: string, descricao: string, paginas: number, autor: string, anoPublicacao: number, quantidade: number){
        this._id = id;
        this._titulo = titulo;
        this._descricao = descricao;
        this._paginas = paginas;
        this._autor = autor;
        this._anoPublicacao = anoPublicacao;
        this._quantidade = quantidade;
    }

    static async getAll(): Promise<RowDataPacket[]>{
        try {
            const [rows] = await db.query<RowDataPacket[]>('SELECT * FROM Livros');
            return rows;
        } catch(error) {
            if(error instanceof Error){
                throw new Error('Erro ao buscar livros no banco de dados.');
            } else {
                throw new Error('Erro desconhecido.');
            }
        }
    }
    static async getById(id: number): Promise<RowDataPacket[]>{
        try {
            const [rows] = await db.query<RowDataPacket[]>('SELECT * FROM Livros WHERE id = ?', [id]);
            return rows;
        } catch(error) {
            if(error instanceof Error){
                throw new Error('Erro ao buscar livro banco de dados.');
            } else {
                throw new Error('Erro desconhecido.');
            }
        }
    }
    static async create(titulo: string, descricao: string, paginas: number, autor: string, anoPublicacao: number, quantidade: number): Promise<ResultSetHeader>{
        try {
            const [rows] = await db.query<ResultSetHeader>('INSERT INTO Livros (titulo, descricao, paginas, autor, ano_publicacao, quantidade) VALUES (?,?,?,?,?,?)', [titulo, descricao, paginas, autor, anoPublicacao, quantidade]);
            return rows;
        } catch(error) {
            if(error instanceof Error){
                throw new Error('Erro ao inserir livros no banco de dados.');
            } else {
                throw new Error('Erro desconhecido.');
            }
        }
    }
    static async update(id: number, titulo: string, descricao: string, paginas: number, autor: string, anoPublicacao: number, quantidade: number): Promise<ResultSetHeader>{
        try {
            const [rows] = await db.query<ResultSetHeader>('UPDATE Livros SET titulo = ?, descricao = ?, paginas = ?, autor = ?, ano_publicacao = ?, quantidade = ? WHERE id = ?', [titulo, descricao, paginas, autor, anoPublicacao, quantidade, id]);
            return rows;
        } catch(error) {
            if(error instanceof Error){
                throw new Error('Erro ao atualizar livro no banco de dados.');
            } else {
                throw new Error('Erro desconhecido.');
            }
        }
    }
    static async delete(id: number): Promise<ResultSetHeader>{
        try {
            const [rows] = await db.query<ResultSetHeader>('DELETE FROM Livros WHERE id = ?', [id]);
            return rows;
        } catch(error) {
            if(error instanceof Error){
                throw new Error('Erro ao deletar livro no banco de dados.');
            } else {
                throw new Error('Erro desconhecido.');
            }
        }
    }
}