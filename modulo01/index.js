// Constante que guarda o express
const express = require('express');

// Constante do servidor qeue chama a função do express
const server = express();

// Este comando serve para fazer o express ler entradas em JSON
server.use(express.json());

/**
 * Exitem os parametros de requisição que são:
 * 
 * Query params = ?teste=1
 * Route params = /users/1
 * Request body = {"name": "Diego", "email": "diego@rocketseat.com.br"}
 * 
 * Colocando um parametro entre crase podemos adicionar chamadas aos parametros ex: { message: `Hello ${nome}` }
 * 
 * Para que não seja necessário reiniciar o servidor manualmente a toda modificação que fizermos, precisamos 
 * instalar a dependência nodemon para isso utilizamos o seguinte comando: yarn add nodemon -D
 * o -D quer dizer que esta dependência vai ficar em modo de produção, ou seja, quando fizermos deploy no servidor
 * não vamos utilizar o nodemon lá, somente vamos usar no mode de produção. Podemos configurar no arquivo package.json
 * um script para setar que o nodemon execute o arquivo que quisermos automaticamente, assim só precisamos usar o 
 * comando yarn dev para iniciar o nodemon, o script para inserir no package.jason é este: "scripts":{"dev": "nodemon index.js"},
 * o ultimo parametro é o arquivo que você deseja executar automaticamente.
 * 
 * 
 */
const users = ['Goku', 'Vera', 'Carlos'];

/**
 * Abaixo temos um Middleware global, ele é todo o conteúdo que está dentro de uma rota, o middleware global é 
 * executado independente da requisição, ou seja, é sempre executado quando fazemos qualquer requisição.
 * O terceiro parametro: next serve para permitir que as outras middlewares abaixo desta global sejam executadas
 * também, sem esse paramêtro somente este middleware global iria ser executado.
 */
server.use((req, res, next) =>{
  // Trabalha com o tempo da requisição.
  console.time('Request');

  //Responde o método que foi utilizado na requisição, e a url.
  console.log(`Método: ${req.method}; URL: ${req.url}`);

  // Permite que pule para os próximos middlewares abaixo deste, para não travar a aplicação.
  next();

  // Imprime o tempo que a requisição levou para ser concluída.
  console.timeEnd('Request');
});
//==============================================================================================================

/**
 * Esta função é um middleware que é responsável por fazer a checagem se o corpo da equisição está com o 
 * parametro correto de name, se não estiver ele retorna um erro no formato de json.
 */
function checkUserExist(req, res, next){
  // Se o name não existir retorna o erro
  if (!req.body.name) {
    return res.status(400).json({error: 'User name is required'});
  }

  // Se não ele segue em frente.
  return next();
}
//==============================================================================================================

/**
 * 
 */
function checkUserInArray(req, res, next){
const user = users[req.params.index];

  if (!user) {
    return res.status(400).json({ error: 'User does not exists'});
  }

  // Já retorna o usuario que está na requisição.
  req.user = user;

  return next();
}

server.get('/users', (req, res) => {
  return res.json(users);
})
//==============================================================================================================

server.get('/users/:index', checkUserInArray, (req, res) => {

  //Estamos utilizando a constante da função checkUserInArray que possui função que retorna o usuario.
  return res.json(req.user);
})
//==============================================================================================================

// Rota para criação de usuarios
server.post('/users', checkUserExist, (req, res) => {
  const {name} = req.body;

  users.push(name);
  
  return res.json(users);
});
//==============================================================================================================

//Rota para edição de usuários
server.put('/users/:index', checkUserExist, checkUserInArray, (req, res) => {
  const { index } = req.params;
  const { name } = req.body;

  users[index] = name;

  return res.json(users);
});
//==============================================================================================================

//Rota para deletar usuarios
server.delete('/users/:index', checkUserInArray, (req, res) => {
  const { index } = req.params;

  users.splice(index, 1);

  return res.send();
});
//==============================================================================================================

// Servidor escutando a porta 3000, ficando assim: http://localhost:3000
server.listen(3000);
