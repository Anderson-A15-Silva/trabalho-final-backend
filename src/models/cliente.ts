import { db } from "../database";

export class Cliente{
    private _id: number;
    private _nome: string;
    private _email: string;
    private _telefone: number;

    constructor(id: number, nome: string, email: string, telefone: number){
        this._id = id;
        this._nome = nome;
        this._email = email;
        this._telefone = telefone;
    }

    static async getAll(){
        try {
            const [rows] = await db.query('SELECT * FROM Clientes');
            return rows;
        } catch {
            throw new Error('Erro ao buscar clientes no banco de dados.');
        }
    }
    static async getById(id: number){
        try {
            const [rows] = await db.query('SELECT * FROM Clientes WHERE id = ?', [id]);
            return rows;
        } catch {
            throw new Error('Erro ao buscar cliente no banco de dados.');
        }
    }
    static async create(nome: string, email: string, telefone: number){
        try {
            const [rows] = await db.query('INSERT INTO Clientes (nome, email, telefone) VALUES (?,?,?)', [nome, email, telefone]);
            return rows;
        } catch {
            throw new Error('Erro ao inserir cliente no banco de dados.');
        }
    }
    static async update(id: number, nome: string, email: string, telefone: number){
        try {
            const [rows] = await db.query('UPDATE Clientes SET nome = ?, email = ?, telefone = ? WHERE id = ?', [nome, email, telefone, id]);
            return rows;
        } catch {
            throw new Error('Erro ao buscar cliente no banco de dados.');
        }
    }
    static async delete(id: number){
        try {
            const [rows] = await db.query('DELETE FROM Clientes WHERE id = ?', [id]);
            return rows;
        } catch {
            throw new Error('Erro ao buscar cliente no banco de dados.');
        }
    }
}