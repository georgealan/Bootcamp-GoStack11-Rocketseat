import React from 'react';
import logoImg from '../../assets/logo.svg';
import { Title, Form, Repositories } from './styles';

/** Está sendo utilizada uma constante porque se utilizassemos uma function seria
 * mais complicado tipar a function, com um constante é mais simples fazer a
 * tipagem, que no caso aqui é do tipo React FunctionComponent. O
 * FunctionComponente foi abreviado para FC e com isso não ficar muito extenso.
 */
const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/37253093?s=400&u=4793c91ecbabc6342381bd7c411d323f14e59dce&v=4"
            alt="George Alan"
          />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
