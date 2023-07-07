import express, { Request, Response } from 'express';
import { connection } from './db';
import { NextApiRequest, NextApiResponse } from 'next';
import { getSession, useSession  } from 'next-auth/react';
import { useState, useEffect} from 'react';




export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const router = express.Router();

  router.use('/', async (req: Request, res: Response) => {
    if (req.method === 'POST') {
      // Criar evento
      const sql = "INSERT INTO evento (id_usuario, nome_evento, data_evento, descricao_evento, ativado, imagem, horario_evento) VALUES (?, ?, ?, ?, ?, ?, ?)";
      const setorSql = "INSERT INTO setor(nome, quantidade_ingresso, id_evento, valor) VALUES (?, ?, ?, ?)"
      const endSql = 'INSERT INTO endereco (id_usuario, cep, rua, numero, complemento, id_evento, cidade, estado)  VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
      const imageBuffer = Buffer.from(req.body.imagem.data);
      
      
      const params = [
        req.body.id_usuario,
        req.body.nome,
        req.body.dataEvento,
        req.body.descricao,
        '1',
        imageBuffer,
        req.body.horarioEvento,
        
      ];
      connection.query(sql, params, (error, results, fields) => {
        if (error) {
          console.error('Erro ao inserir novo evento', error);
          res.status(500).send('Erro ao inserir novo evento.');
          return;
        }

      const eventoId = results.insertId;
      const setorVipParams = [
        req.body.setor_vip,
        req.body.qnt_vip,
        eventoId,
        req.body.preco_vip,
      ];

      const endParams = [
        '0',
        req.body.cep,
        req.body.rua,
        req.body.numero,
        req.body.complemento,
        eventoId,
        req.body.cidade,
        req.body.estado
      ]

      const setorCamaroteParams = [
        req.body.setor_camarote,
        req.body.qnt_camarote,
       eventoId,
       req.body.preco_camarote,
      ];

      const setorBackstageParams = [
        req.body.setor_backstage,
        req.body.qnt_backstage,
       eventoId,
       req.body.preco_backstage,
      ];

      const setorNenhumParams = [
        req.body.setor_nenhum,
        req.body.qnt_nenhum,
       eventoId,
       req.body.preco_nenhum,
      ];

      connection.query(endSql, endParams, (error, results, fields) => {
        if (error) {
          console.error('Erro ao inserir novo endereco: ', error);
          res.status(500).send('Erro ao inserir novo endereco.');
          return;
        }
        res.json(results);
        return;
      });
      if (req.body.setor_vip != ""){
      connection.query(setorSql, setorVipParams, (error, results, fields) => {
        if (error) {
          console.error('Erro ao inserir novo evento', error);
          res.status(500).send('Erro ao inserir novo evento.');
          return;
        }
        res.json(results);
      });
    }
    if (req.body.setor_camarote != ""){
      connection.query(setorSql, setorCamaroteParams, (error, results, fields) => {
        if (error) {
          console.error('Erro ao inserir novo evento', error);
          res.status(500).send('Erro ao inserir novo evento.');
          return;
        }
        res.json(results);
      });
    }
    if (req.body.setor_backstage != ""){
      connection.query(setorSql, setorBackstageParams, (error, results, fields) => {
        if (error) {
          console.error('Erro ao inserir novo evento', error);
          res.status(500).send('Erro ao inserir novo evento.');
          return;
        }
        res.json(results);
      });
    }
    if (req.body.setor_nenhum != ""){
      connection.query(setorSql, setorNenhumParams, (error, results, fields) => {
        if (error) {
          console.error('Erro ao inserir novo evento', error);
          res.status(500).send('Erro ao inserir novo evento.');
          return;
        }
        res.json(results);
      });
    }
  });

    } else if (req.method === 'GET') {
      if (req.query.id) {
        // Buscar evento pelo ID
        const sql = 'SELECT * FROM evento WHERE id=?';
        connection.query(sql, [req.query.id], (error, results, fields) => {
          if (error) {
            console.error('Erro ao buscar evento: ', error);
            res.status(500).send('Erro ao buscar evento.');
            return;
          }
          res.json(results[0]); // Retorna apenas o primeiro resultado (evento)
        });
      } else if (req.query['id_usuario']) {
        // Buscar evento pelo ID
        const sql = 'SELECT * FROM evento WHERE id_usuario=?';
        connection.query(sql, [req.query['id_usuario']], (error, results, fields) => {
          if (error) {
            console.error('Erro ao buscar evento: ', error);
            res.status(500).send('Erro ao buscar evento.');
            return;
          }
          res.json(results); // Retorna apenas o primeiro resultado (evento)
        });
      }
      
      
      else{
        // Listar eventos
        const sql = 'SELECT * FROM evento WHERE id !=0 AND ativado != 0';
        connection.query(sql, (error, results, fields) => {
          if (error) {
            console.error('Erro ao buscar eventos: ', error);
            res.status(500).send('Erro ao buscar eventos.');
            return;
          }
          res.json(results);
        });
      }
    } else if (req.method === 'DELETE') {
      // Remover evento
      const sql = 'DELETE FROM evento WHERE id=?';
      connection.query(sql, [req.query.id], (error, results, fields) => {
        if (error) {
          console.error('Erro ao remover evento: ', error);
          res.status(500).send('Erro ao remover evento.');
          return;
        }
        res.json(results);
      });
    } else if (req.method === 'PUT') {
      // Atualizar evento
      const sql = 'UPDATE evento SET ? WHERE id=?';
      connection.query(sql, [req.body, req.query.id], (error, results, fields) => {
        if (error) {
          console.error('Erro ao atualizar evento: ', error);
          res.status(500).send('Erro ao atualizar evento.');
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
