import { db } from "../database";

export class Fileira{
    private _id: number;
    private _nome: string;
    private _genero: string;
    private _idLivro: number;
    private _idFornecedor: number;

    constructor(id: number, nome: string, genero: string, idLivro: number, idFornecedor: number){
        this._id = id;
        this._nome = nome;
        this._genero = genero;
        this._idLivro = idLivro;
        this._idFornecedor = idFornecedor;
    }

    static async getAll(){
        try {
            const [rows] = await db.query('SELECT * FROM Fileiras');
            return rows;
        } catch {
            throw new Error('Erro ao buscar fileiras no banco de dados.');
        }
    }
    static async getById(id: number){
        try {
            const [rows] = await db.query('SELECT * FROM Fileiras WHERE id = ?', [id]);
            return rows;
        } catch {
            throw new Error('Erro ao buscar fileira no banco de dados.');
        }
    }
    static async create(nome: string, genero: string, idLivro: number, idFornecedor: number){
        try {
            const [rows] = await db.query('INSERT INTO Fileiras (nome, genero, id_livro, id_fornecedor) VALUES (?,?,?,?)', [nome, genero, idLivro, idFornecedor]);
            return rows;
        } catch {
            throw new Error('Erro ao inserir fileira no banco de dados.');
        }
    }
    static async update(id: number, nome: string, genero: string, idLivro: number, idFornecedor: number){
        try {
            const [rows] = await db.query('UPDATE Fileiras SET nome = ?, genero = ?, id_livro = ?, id_fornecedor = ? WHERE id = ?', [nome, genero, idLivro, idFornecedor, id]);
            return rows;
        } catch {
            throw new Error('Erro ao atualizar fileira no banco de dados.');
        }
    }
    static async delete(id: number){
        try {
            const [rows] = await db.query('DELETE FROM Fileiras WHERE id = ?', [id]);
            return rows;
        } catch {
            throw new Error('Erro ao deletar fileira no banco de dados.');
        }
    }
}