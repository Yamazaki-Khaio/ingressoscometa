import { NextApiRequest, NextApiResponse } from 'next';
import mysql from 'mysql2';
import fs from 'fs';
import path from 'path';
import connection from './db';
import mysqldump from 'mysqldump';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const backupDirectory = '/backup/dumps';
      const backupFileName = `backup-${Date.now()}.sql`;
      const backupFilePath = path.join(backupDirectory, backupFileName);

      // Criar diretório se não existir
      if (!fs.existsSync(backupDirectory)) {
        fs.mkdirSync(backupDirectory, { recursive: true });
      }

      // Verificar se as propriedades' está definida
      if (!connection.config.user || !connection.config.password || !connection.config.database) {
        throw new Error('Dados do banco de dados não definido');
      }


      // Usar a biblioteca mysqldump para exportar o banco de dados para um arquivo SQL
      await mysqldump({
        connection: {
          host: connection.config.host,
          user: connection.config.user,
          password: connection.config.password,
          database: connection.config.database
        },
        dumpToFile: backupFilePath
      });

      const fileStream = fs.createReadStream(backupFilePath);

      res.setHeader('Content-Disposition', `attachment; filename=${backupFileName}`);
      res.setHeader('Content-Type', 'application/octet-stream');

      fileStream.pipe(res);

      fileStream.on('close', () => {
        // Remover o arquivo de backup após o download
        fs.unlink(backupFilePath, (err) => {
          if (err) {
            console.error(`Erro ao remover o arquivo de backup: ${err}`);
          }
        });
      });
    } catch (error) {
      console.error(`Erro ao criar o backup: ${error}`);
      res.status(500).send("Erro ao criar o backup.");
    }
  } else {
    res.status(405).send("Método não permitido.");
  }
}

// Certifique-se de encerrar a conexão com o banco de dados ao encerrar o servidor
process.on('SIGINT', () => {
  connection.end();
});
