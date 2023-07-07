import express from "express";
import mysql from "mysql2";


const app = express();

// Configuração do banco de dados
export const connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "adm1",
  database: "cometadb",
});

// Testando conexão com o banco de dados
connection.connect((err) => {
  if (err) {
    console.error("Erro ao conectar ao banco de dados: ", err);
    return;
  }
  console.log("Conexão com o banco de dados estabelecida!");
});

// Adicionando uma rota que retorna os dados do banco de dados
app.get("/dados", (req, res) => {
  const sql = "SELECT * FROM tabela";
  connection.query(sql, (err, result) => {
    if (err) {
      console.error("Erro ao consultar dados: ", err);
      res.status(500).send("Erro ao consultar dados.");
      return;
    }
    res.json(result);
  });
});
// Iniciando o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

export default connection;