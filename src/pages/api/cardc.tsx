import express from 'express';
import { connection } from './db';
import { NextApiRequest, NextApiResponse } from 'next';
import { randomInt } from 'crypto';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const router = express.Router();
  var x = randomInt(1000);

  router.use('/', async (req, res) => {
    if (req.method === 'POST') {
      // Criar usuário
      const sql = 'INSERT INTO cardc (id_usuario, nCard, data_validade, cvv, titular) VALUES (?, ?, ?, ?, ?)';
      
      const params = [
        req.body.id,
        req.body.nCard,
        req.body.data_validade,
        req.body.cvv,
        req.body.titular,
      ];
      
      connection.query(sql, params, (error, results, fields) => {
        if (error) {
          console.error('Erro ao inserir novo cartao: ', error);
          res.status(500).send('Erro ao inserir novo cartao.');
          return;
        }
      });

    } else if (req.method === 'GET') {
      if (req.query.id) {
        const sql = 'SELECT * FROM cardc WHERE id_usuario = ?';
        connection.query(sql, [req.query.id], (error, results, fields) => {
          if (error) {
            console.error('Erro ao buscar cartao: ', error);
            res.status(500).send('Erro ao buscar cartao.');
            return;
          }
          res.json(results);
        });
      } else {
        const sql = 'SELECT * FROM cardc';
        connection.query(sql, (error, results, fields) => {
          if (error) {
            console.error('Erro ao buscar cartao: ', error);
            res.status(500).send('Erro ao buscar cartao.');
            return;
          }
          res.json(results);
        });
      }
    
    } else { (req.method === 'PUT') 
      console.log("passou no put cardc")
      const sql = 'UPDATE cardc SET nCard = ?, data_validade = ?, cvv= ? , titular=? WHERE id_usuario = ?';
      connection.query(sql, [req.body.nCard,
        req.body.data_validade,
        req.body.cvv,
        req.body.titular, req.body.id], (error, results, fields) => {
        if (error) {
          console.error('Erro ao atualizar senha: ', error);
          res.status(500).send('Erro ao atualizar senha.');
          return;
        }
        res.json(results);
      });

    }
  });

  router(req, res); // Invoke the router with req and res objects
}
