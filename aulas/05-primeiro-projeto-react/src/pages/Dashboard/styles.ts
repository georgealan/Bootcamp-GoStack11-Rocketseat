import styled from 'styled-components';
import { shade } from 'polished';

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
  max-width: 450px;
  line-height: 56px;
  margin-top: 80px;
`;

/**
 * Podemos fazer encadeamento de css, repare abaixo que temos um form e dentro
 * do form temos uma regra de input, isso se chama encadeamento e podemos fazer
 * isso com o styled-components, é como se adicionassemos: form input {} no css
 * normal, aqui podemos encadear por dentro.
 */
export const Form = styled.form`
  margin-top: 40px;
  max-width: 700px;
  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 210px;
    height: 70px;
    background: #04d361;
    border-radius: 0px 5px 5px 0px;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;

    /**
    Aqui utilizamos o & que referencia o button acima, não precisamos
    utilizar o button:hover{} de sempre do css, podemos somente utilizar o
    & para referência.
    */
    &:hover {
      background: ${shade(0.2, '#04d361')};
    }
  }
`;

export const Repositories = styled.div``;
