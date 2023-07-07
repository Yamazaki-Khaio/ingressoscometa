import express, { Request, Response } from 'express';
import { connection } from './db';
import { NextApiRequest, NextApiResponse } from 'next';
import { randomInt } from 'crypto';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const router = express.Router();

  if (req.method === 'GET') {
      if (req.query.id) {
        // Buscar evento pelo ID
        const sql = 'SELECT * FROM setor WHERE id=?';
        connection.query(sql, [req.query.id], (error, results, fields) => {
          if (error) {
            console.error('Erro ao buscar setor: ', error);
            res.status(500).send('Erro ao buscar setor.');
            return;
          }
          res.json(results[0]); // Retorna apenas o primeiro resultado (setor)
        });
      } else {
        // Listar eventos
        const sql = 'SELECT * FROM setor';
        connection.query(sql, (error, results, fields) => {
          if (error) {
            console.error('Erro ao buscar setores: ', error);
            res.status(500).send('Erro ao buscar setores.');
            return;
          }
          res.json(results);
        });
      }
    } else if (req.method === 'DELETE') {
      // Remover evento
      const sql = 'DELETE FROM setor WHERE id=?';
      connection.query(sql, [req.body.idUser], (error, results, fields) => {
        if (error) {
          console.error('Erro ao remover setor: ', error);
          res.status(500).send('Erro ao remover setor.');
          return;
        }
        res.json(results);
      });
    } else if (req.method === 'PUT') {
      // Atualizar evento
      const sql = 'UPDATE setor SET ? WHERE id=?';
      connection.query(sql, [req.body, req.query.id], (error, results, fields) => {
        if (error) {
          console.error('Erro ao atualizar setor: ', error);
          res.status(500).send('Erro ao atualizar setor.');
          return;
        }
        res.json(results);
      });
    } else {
      res.status(404).send('Rota não encontrada.');
    }

  router(req, res); // Invoca o router com os objetos req e res
}
