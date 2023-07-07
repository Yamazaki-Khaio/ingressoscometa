import request from 'supertest';
import app from '../db';

describe('Rota API', () => {
  const baseURL = 'http://localhost:3000/api/usuario';

  it('should create a new user', async () => {
    const response = await request(app)
      .post(baseURL)
      .send({
        cpf: '123456789',
        nome: 'John Doe',
        senha: 'password',
        data_nascimento: '1990-01-01',
        tipo: 'regular',
        email: 'john.doe@example.com',
        telefone: '1234567890',
        cep: '12345-678',
        rua: 'Main Street',
        numero: '123',
        complemento: 'Apartment 1',
        cidade: 'New York',
        estado: 'NY',
      });

    expect(response.status).toBe(200);
    // Adicione mais asserções conforme necessário
  });

  it('should get all users', async () => {
    const response = await request(app).get(baseURL);

    expect(response.status).toBe(200);
    // Adicione mais asserções conforme necessário
  });

  it('should delete a user', async () => {
    const response = await request(app)
      .delete(baseURL)
      .send({
        idUser: 1,
      });

    expect(response.status).toBe(200);
    // Adicione mais asserções conforme necessário
  });

  it('should update a user password', async () => {
    const response = await request(app)
      .put(`${baseURL}?id=1`)
      .send({
        senha: 'newpassword',
      });

    expect(response.status).toBe(200);
    // Adicione mais asserções conforme necessário
  });
});

//test backup
describe('Backup API', () => {
  it('should retrieve the backup file', async () => {
    const response = await request(app).get('http://localhost:3000/api/backup');
    expect(response.status).toBe(200);
    // Faça o que for necessário com o arquivo de backup
  });
});

// Teste para obter todos os banimentos
describe('GET /api/banimentos', () => {
  it('should get all banimentos', async () => {
    const response = await request(app).get('http://localhost:3000/api/banimentos');
    expect(response.status).toBe(200);
    expect(response.body).toEqual(expect.any(Array));
  });
});

// Teste para obter um banimento pelo ID do usuário
describe('GET /api/banimentos/:id', () => {
  it('should get a banimento by user ID', async () => {
    const response = await request(app).get('http://localhost:3000/api/banimentos?id_usuario=1');
    expect(response.status).toBe(200);
    expect(response.body).toEqual(expect.any(Object));
  });
});

// Teste para inserir um novo banimento
describe('POST /api/banimentos', () => {
  it('should insert a new banimento', async () => {
    const response = await request(app)
      .post('http://localhost:3000/api/banimentos')
      .send({
        id_usuario: 1,
        motivo: 'Razão do banimento',
      });
    expect(response.status).toBe(200);
    expect(response.body).toEqual(expect.any(Object));
  });
});

// Teste para atualizar um banimento existente
describe('PUT /api/banimentos/:id', () => {
  it('should update an existing banimento', async () => {
    const response = await request(app)
      .put('http://localhost:3000/api/banimentos')
      .send({
        id_usuario: 1,
        motivo: 'Novo motivo do banimento',
      });
    expect(response.status).toBe(200);
    expect(response.body).toEqual(expect.any(Object));
  });
});

// Teste para remover um banimento pelo ID do usuário
describe('DELETE /api/banimentos/:id', () => {
  it('should remove a banimento by user ID', async () => {
    const response = await request(app).delete('http://localhost:3000/api/banimentos?id_usuario=1');
    expect(response.status).toBe(200);
    expect(response.body).toEqual(expect.any(Object));
  });
});

// Teste para obter todos os eventos
describe('GET /api/eventos', () => {
  it('should get all eventos', async () => {
    const response = await request(app).get('http://localhost:3000/api/eventos');
    expect(response.status).toBe(200);
    expect(response.body).toEqual(expect.any(Array));
  });
});

// Teste para obter um evento pelo ID
describe('GET /api/eventos/:id', () => {
  it('should get an evento by ID', async () => {
    const response = await request(app).get('http://localhost:3000/api/eventos/1');
    expect(response.status).toBe(200);
    expect(response.body).toEqual(expect.any(Object));
  });
});

// Teste para criar um novo evento
describe('POST /api/eventos', () => {
  it('should create a new evento', async () => {
    const evento = {
      id_usuario: 1,
      nome_evento: 'Evento de Teste',
      data_evento: '2023-06-30',
      descricao_evento: 'Descrição do evento de teste',
      ativado: true,
      imagem: Buffer.from('Imagem do evento'),
      horario_evento: '19:00',
    };

    const response = await request(app)
      .post('http://localhost:3000/api/eventos')
      .send(evento);
    expect(response.status).toBe(200);
    expect(response.body).toEqual(expect.any(Object));
  });
});

// Teste para atualizar um evento
describe('PUT /api/eventos/:id', () => {
  it('should update an existing evento', async () => {
    const evento = {
      nome_evento: 'Evento Atualizado',
    };

    const response = await request(app)
      .put('http://localhost:3000/api/eventos/1')
      .send(evento);
    expect(response.status).toBe(200);
    expect(response.body).toEqual(expect.any(Object));
  });
});

// Teste para remover um evento
describe('DELETE /api/eventos/:id', () => {
  it('should remove an evento', async () => {
    const response = await request(app).delete('http://localhost:3000/api/eventos/1');
    expect(response.status).toBe(200);
    expect(response.body).toEqual(expect.any(Object));
  });
});
