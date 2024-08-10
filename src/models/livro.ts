import { db } from "../database";

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

    static async getAll(){
        try {
            const [rows] = await db.query('SELECT * FROM Livros');
            return rows;
        } catch {
            throw new Error('Erro ao buscar livros no banco de dados.');
        }
    }
    static async getById(id: number){
        try {
            const [rows] = await db.query('SELECT * FROM Livros WHERE id = ?', [id]);
            return rows;
        } catch {
            throw new Error('Erro ao buscar livro banco de dados.');
        }
    }
    static async create(titulo: string, descricao: string, paginas: number, autor: string, anoPublicacao: number, quantidade: number){
        try {
            const [rows] = await db.query('INSERT INTO Livros (titulo, descricao, paginas, autor, ano_publicacao, quantidade) VALUES (?,?,?,?,?,?)', [titulo, descricao, paginas, autor, anoPublicacao, quantidade]);
            return rows;
        } catch {
            throw new Error('Erro ao inserir livros no banco de dados.');
        }
    }
    static async update(id: number, titulo: string, descricao: string, paginas: number, autor: string, anoPublicacao: number, quantidade: number){
        try {
            const [rows] = await db.query('UPDATE Livros SET titulo = ?, descricao = ?, paginas = ?, autor = ?, ano_publicacao = ?, quantidade = ? WHERE id = ?', [titulo, descricao, paginas, autor, anoPublicacao, quantidade, id]);
            return rows;
        } catch {
            throw new Error('Erro ao atualizar livro no banco de dados.');
        }
    }
    static async delete(id: number){
        try {
            const [rows] = await db.query('DELETE FROM Livros WHERE id = ?', [id]);
            return rows;
        } catch {
            throw new Error('Erro ao deletar livro no banco de dados.');
        }
    }
}