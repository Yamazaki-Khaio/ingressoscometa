import express from 'express';
import {connection} from './db';


const router = express.Router();

// Criar compra
router.post('/', async (req, res) => {
    const { id_usuario, id_cardc, id_carrinho, preco_total } = req.body;
    try {
        const sql = `INSERT INTO compra (id_usuario, id_cardc, data, id_carrinho, preco_total)
            VALUES (?, ?, CURDATE(), ?, ?)`;
        connection.query(
            sql,
            [id_usuario, id_cardc, id_carrinho, preco_total],
            (error, results, fields) => {
                if (error) {
                    console.error('Erro ao criar compra: ', error);
                    res.status(500).send('Erro ao criar compra.');
                    return;
                }
                res.status(201).send({ id: results.insertId });
            }
        );
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
});
  

// Listar compras
router.get('/', async (req, res) => {
    const sql = 'SELECT * FROM compra';
    connection.query(sql, (error, results, fields) => {
        if (error) {
        console.error('Erro ao buscar compras: ', error);
        res.status(500).send('Erro ao buscar compras.');
        return;
        }
        res.json(results);
    });
});
  

// Buscar compra por ID
router.get('/:id', async (req, res) => {
    const sql = 'SELECT * FROM compra WHERE id_compra=?';
    connection.query(sql, [req.params.id], (error, results, fields) => {
        if (error) {
            console.error('Erro ao buscar compra: ', error);
            res.status(500).send('Erro ao buscar compra.');
            return;
        }
        res.json(results);
    });
});

// Atualizar compra:
router.put('/:id', async (req, res) => {
    const sql = 'UPDATE compra SET ? WHERE id_compra=?';
    connection.query(
        sql,
        [req.body, req.params.id],
        (error, results, fields) => {
        if (error) {
            console.error('Erro ao atualizar compra: ', error);
            res.status(500).send('Erro ao atualizar compra.');
            return;
        }
        res.json(results);
        }
    );
});

