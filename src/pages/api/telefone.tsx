import { NextApiRequest, NextApiResponse } from 'next';
import {connection} from './db';

export default function handler(req: NextApiRequest,res: NextApiResponse){
    //caso metodo get
    if(req.method==='GET'){
        //caso não haver paramentros
        if(!req.query){
            const sql = 'SELECT * FROM telefone'
            try{
                connection.query(sql, (error, results, fields) => {
                    res.status(200).send(results)
                    return
                })
            }catch(error){
                console.error('Erro ao buscar telefones: ', error);
                res.status(500).send('Erro ao buscar telefones.');
            }
          
        }else{
            //se não
            //busca por telefone
            if(req.query['telefone']){
                const sql = 'SELECT * FROM telefone WHERE telefone=?'
                try{
                    connection.query(sql,[req.query['telefone']], (error, results, fields) => {
                        res.status(200).send(results)
                        return;
                    })
                }catch(error){
                    console.error('Erro ao buscar telefones: ', error);
                    res.status(500).send('Erro ao buscar telefones.');
                }

            }

            // busca por id de telefone
            if(req.query['id']){
                try{
                    const sql = 'SELECT * FROM telefone WHERE id_usuario=?'
                    connection.query(sql,[req.query['id']], (error, results, fields) => {
                        res.status(200).send(results)
                        return;
                    })
                }catch(error){
                    console.error('Erro ao buscar telefones: ', error);
                    res.status(500).send('Erro ao buscar telefones.');
                }
            }
            //busca por id de celular 
            if(req.query['id_usuario']){
                try{
                    const sql = 'SELECT * FROM telefone WHERE id_usuario=?'
                    connection.query(sql,[req.query['id_usuario']], (error, results, fields) => {
                        res.status(200).send(results)
                        return;
                    })
                }catch(error){
                    console.error('Erro ao buscar telefones: ', error);
                    res.status(500).send('Erro ao buscar telefones.');
                }
            }
        }

    }
    //caso metodo post
    if(req.method==='POST'){
        const sql = 'INSERT INTO telefone(id_usuario, telefone) VALUES('+req.body.idUser+','+req.body.telefone+')';
        connection.query(sql, (error, results, fields) => {
            if (error) {
            console.error('Erro ao inserir novo telefone: ', error);
            res.status(500).send('Erro ao inserir novo telefone.');
            return;
            }
            res.status(200).send('ok')
            return;
        });
    }
    //caso metodo put
    if(req.method==='PUT'){
        const sql ='UPDATE telefone SET telefone=? WHERE id_usuario=?';
        connection.query(sql,[req.body, req.query.id], (error, results, fields) => {
            if (error) {
                console.error('Erro ao atualizar telefone: ', error);
                res.status(500).send('Erro ao atualizar telefone.');
                return;
            }
            res.status(200).send('ok')
            return;
        });
    }
    //caso metodo delete
    if(req.method==='DELETE'){
        const sql ='DELETE from telefone WHERE id_usuario=?';
        connection.query(sql,(error, results, fields) => {
            if (error) {
                console.error('Erro ao deletar telefone: ', error);
                res.status(500).send('Erro ao deletar telefone.');
                return;
            }
            res.status(200).send('ok')
            return;
        });

    }
}