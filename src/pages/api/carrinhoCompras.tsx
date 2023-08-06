import express from 'express';
import { connection } from './db';
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    if (req.query.id) {
      const userId = req.query.id;
      const sql = 'SELECT s.valor, s.nome AS nome_setor, e.nome_evento, e.imagem, l.cidade, i.tipo, c.quantidade FROM setor s JOIN evento e ON s.id_evento = e.id JOIN ingresso i ON i.evento_id = e.id JOIN carrinho c ON c.id_ingresso = i.id JOIN endereco l ON e.id = l.id_evento WHERE c.usuario_id = ?';
      connection.query(sql, [userId], (error, results, fields) => {
        if (error) {
          console.error('Erro ao buscar carrinho: ', error);
          res.status(500).send('Erro ao buscar carrinho.');
          return;
        }
        res.json(results);
      });
    }

  }
  else if (req.method === 'POST') {
    console.log('entrou no POST');

    // Verifique se o ingresso ainda está disponível
    const ingressoSql = 'SELECT * FROM ingresso WHERE id = ?';
    const ingressoParams = [req.body.id_ingresso];

    connection.query(ingressoSql, ingressoParams, (error, ingressoResults, fields) => {
      if (error) {
        console.error('Erro ao buscar ingresso: ', error);
        res.status(500).send('Erro ao buscar ingresso.');
        return;
      }

      const ingresso = ingressoResults[0];

      if (!ingresso || ingresso.quantidade_disponivel === 0) {
        res.status(400).send('Ingresso indisponível.');
        return;
      }

      // Inserir novo carrinho de compras
      const carrinhoSql = 'INSERT INTO carrinho (usuario_id) VALUES (?)';
      const carrinhoParams = [req.body.id_usuario];

      connection.query(carrinhoSql, carrinhoParams, (error, carrinhoResults, fields) => {
        if (error) {
          console.error('Erro ao inserir novo carrinho de compras: ', error);
          res.status(500).send('Erro ao inserir novo carrinho de compras.');
          return;
        }

        const carrinhoId = carrinhoResults.insertId;

        // Atualizar tabela carrinho_ingresso
        const carrinhoIngressoSql = 'INSERT INTO carrinho_ingresso (carrinho_id, id_ingresso, quantidade) VALUES (?, ?, ?)';
        const carrinhoIngressoParams = [carrinhoId, req.body.id_ingresso, req.body.quant_ingresso];

        connection.query(carrinhoIngressoSql, carrinhoIngressoParams, (error, carrinhoIngressoResults, fields) => {
          if (error) {
            console.error('Erro ao atualizar tabela carrinho_ingresso: ', error);
            res.status(500).send('Erro ao atualizar tabela carrinho_ingresso.');
            return;
          }

          // Atualizar a quantidade disponível do ingresso
          const novaQuantidade = ingresso.quantidade_disponivel - req.body.quant_ingresso;
          const updateIngressoSql = 'UPDATE ingresso SET quantidade_disponivel = ? WHERE id = ?';
          const updateIngressoParams = [novaQuantidade, ingresso.id];

          connection.query(updateIngressoSql, updateIngressoParams, (error, updateIngressoResults, fields) => {
            if (error) {
              console.error('Erro ao atualizar quantidade disponível do ingresso: ', error);
              res.status(500).send('Erro ao atualizar quantidade disponível do ingresso.');
              return;
            }

            res.json({ message: 'Ingresso adicionado ao carrinho com sucesso!' });
          });
        });
      });
    });
  } else if (req.method === 'DELETE') {
    console.log('entrou aquiiiiiiiiiiiiiiiiiiiiiiiiiiii');
    if (!req.query.id) {
      res.status(400).send('ID do item de carrinho não fornecido.');
      return;
    }

    const itemId = Number(req.query.id);

    const sql = 'DELETE FROM carrinho WHERE id = ?';
    connection.query(sql, [itemId], (error, results, fields) => {
      if (error) {
        console.error('Erro ao excluir item do carrinho: ', error);
        res.status(500).send('Erro ao excluir item do carrinho.');
        return;
      }
      res.json(results);
    });
  }
}
