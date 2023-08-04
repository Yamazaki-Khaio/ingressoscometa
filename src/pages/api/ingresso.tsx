import express, { Request, Response } from 'express';
import { connection } from './db';
import { NextApiRequest, NextApiResponse } from 'next';
import { randomInt } from 'crypto';




export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const router = express.Router();

  router.use('/', async (req: Request, res: Response) => {
    if (req.method === 'POST') {
      const sql = "INSERT INTO ingresso (tipo, evento_id) VALUES (?, ?)";
      const params = [
        req.body.tipo,
        req.body.evento_id,
      ];
      connection.query(sql, params, (error, results, fields) => {
        if (error) {
          console.error('Erro ao inserir novo ingresso', error);
          res.status(500).send('Erro ao inserir novo ingresso.');
          return;
        }
        const ingressoID = results.insertId;
        const sql2 = "INSERT INTO carrinho (id_ingresso, id_usuario) VALUES (?, ?)";
        const params2 = [
          ingressoID,
          req.body.id_usuario,
        ];
        connection.query(sql2, params2, (error, results, fields) => {
          if (error) {
            console.error('Erro ao inserir novo ingresso', error);
            res.status(500).send('Erro ao inserir novo ingresso.');
            return;
          }
          res.json(results);
        })
      }
    );
      

    } else if (req.method === 'GET') {
      if (req.query.id) {
        // Buscar evento pelo ID
        const sql = 'SELECT * FROM evento AND ativado != 0';
        connection.query(sql, req.query['id_carrinho'], (error, results, fields) => {
          if (error) {
            console.error('Erro ao buscar ingresso: ', error);
            res.status(500).send('Erro ao buscar ingresso.');
            return;
          }
          res.json(results[0]); // Retorna apenas o primeiro resultado (ingresso)
        });
      } else {
        // Listar eventos
        const sql = 'SELECT * FROM ingresso';
        connection.query(sql, (error, results, fields) => {
          if (error) {
            console.error('Erro ao buscar ingressos: ', error);
            res.status(500).send('Erro ao buscar ingressos.');
            return;
          }
          res.json(results);
        });
      }
    } else if (req.method === 'DELETE') {
      // Remover evento
      const sql = 'DELETE FROM ingresso WHERE id=?';
      connection.query(sql, [req.body.idUser], (error, results, fields) => {
        if (error) {
          console.error('Erro ao remover ingresso: ', error);
          res.status(500).send('Erro ao remover ingresso.');
          return;
        }
        res.json(results);
      });
    } else if (req.method === 'PUT') {
      // Atualizar evento
      const sql = 'UPDATE ingresso SET ? WHERE id=?';
      connection.query(sql, [req.body, req.query.id], (error, results, fields) => {
        if (error) {
          console.error('Erro ao atualizar ingresso: ', error);
          res.status(500).send('Erro ao atualizar ingresso.');
          return;
        }
        res.json(results);
      });
    } else {
      res.status(404).send('Rota não encontrada.');
    }
  });

  router(req, res); // Invoca o router com os objetos req e res
}
