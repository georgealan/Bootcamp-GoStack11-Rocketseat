/**
 * Este arquivo serve para sobrescrever tipos de bibliotecas existentes no TS ou JS.
 * Ele não sobrescreve alterando o que já existe, ele apenas vai anexando o que foi definido.
 * O objeto Request não possui o atributo user, e utilizando essa ferramenta de sobrescrita de bibliotecas
 * podemos adicionar o user ao Request e assim utilizar ele. Isso é um overrride na tipagem.
 */
declare namespace Express {
  export interface Request {
    user: {
      id: string;
    };
  }
}
