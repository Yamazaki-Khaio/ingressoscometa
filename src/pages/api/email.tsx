import { NextApiRequest, NextApiResponse } from 'next';
import { connection } from './db';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    if (req.query.email) {
      // Buscar email específico
      const sql = 'SELECT * FROM email WHERE email = ?';
      const param = req.query.email;
      
      connection.query(sql, param, (error, results, fields) => {
        if (error) {
          console.error('Erro ao buscar email:', error);
          res.status(500).send('Erro ao buscar email.');
          return;
        }
        
        if (results.length > 0) {
          console.log("email no banco")
          res.json(results);
          return;
        } else {
          console.log("email não esta no banco")
          res.status(500).send("email não esta no banco");
          return;
        }
      });
    
    }else if (req.query.id){
      const sql = 'SELECT * FROM email WHERE id_usuario = ?';
      const param = req.query.id;
      
      connection.query(sql, param, (error, results, fields) => {
        if (error) {
          console.error('Erro ao buscar email:', error);
          res.status(500).send('Erro ao buscar email.');
          return;
        }
        
        if (results.length > 0) {
          console.log("email no banco")
          res.json(results);
          return;
        } else {
          console.log("email não esta no banco")
          res.status(500).send("email não esta no banco");
          return;
        }
      });

    }else {
      // Listar todos os emails
      const sql = 'SELECT * FROM email';

      connection.query(sql, (error, results, fields) => {
        if (error) {
          console.error('Erro ao buscar emails:', error);
          res.status(500).send('Erro ao buscar emails.');
          return;
        }
        res.json(results);
      });
    }
  } else if (req.method === 'DELETE') {
    // Rest of your code for DELETE method
  } else if (req.method === 'PUT') {
    // Rest of your code for PUT method
  } else {
    res.status(404).send('Rota não encontrada.');
  }
}
