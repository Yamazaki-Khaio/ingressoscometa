import { connection } from './db';
import { format } from 'date-fns';
import { NextApiRequest, NextApiResponse } from 'next';
//bloqueia o acesso de um promoter

export default  function handler(req: NextApiRequest, res: NextApiResponse){

    if(req.method === 'GET'){
        if(Object.keys(req.query).length === 0 ){
            const sql = 'SELECT * FROM banimento'
            connection.query(sql,(error, results, fields) =>{
                if (error) {
                    console.error('Erro ao consultar banimentos: ', error);
                    res.status(500).send('Erro ao consultar banimentos');
                    return;
                }
                res.status(200).json(results)
                return; 
            })
            return
        } else if(req.query['id_usuario']){
            const sql = 'SELECT * FROM banimento WHERE id_usuario=? '
            connection.query(sql,[req.query['id_usuario']],(error,results, fields) =>{
                if (error) {
                    console.error('Erro ao consultar banimento: ', error);
                    res.status(500).send('Erro ao consultar banimentos');
                    return;
                }
                const data = JSON.parse(JSON.stringify(results))
                //retorna 1 caso bnido e 0 caso livre
                res.status(200).json({result:data.length})
                return; 
            })
        }
    }else if(req.method === 'POST'){
        
        const date = new Date()
        const dataf = format(date, 'yyyy-MM-dd');

        const sql = 'INSERT INTO banimento(id_usuario,motivo,data) VALUES(?,?,?)'
        connection.query(sql,[req.body.id_usuario,req.body.motivo,dataf
        ],
        (error,results, fields) => {
            if(error){
                console.error('Erro ao inserir novo banimento: ', error);
                res.status(500).send('Erro ao inserir banimento');
                return
            }
            res.status(200).send('ok')
            return
        })
    }else if(req.method === 'PUT'){
        const sql = "UPDATE banimento SET "+
        "motivo = ?"+
        "WHERE id_usuario=?"
        connection.query(sql,[req.body.motivo,req.body.id_usuario],(error,results, fields) =>{
            if(error){
                console.error('Erro ao atualizar banimento: ', error);
                res.status(500).send('Erro ao atualizar banimento');
                return
            }
            res.status(200).send('ok')
            return
        })
        
        
    }else if(req.method==='DELETE'){
        
        const sql = 'DELETE FROM banimento WHERE id_usuario=?'        
        connection.query(sql,[req.query['id_usuario']],(error,results, fields) =>{
            if(error){
                console.error('Erro ao remover banimento: ', error);
                res.status(500).send('Erro ao remover banimento');
                
            }
            res.status(200).send('ok')
            
        })
        
    }

}