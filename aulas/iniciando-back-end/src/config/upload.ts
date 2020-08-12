import multer from 'multer';
import path from 'path';
import crypto from 'crypto';

/**
 * Este arquivo é responsável por configurar o caminho e o nome do arquivo de upload
 * Utilizando a biblioteca do Multer para trabalhar com upload de imagens.
 */

const tmpFolder = path.resolve(__dirname, '..', '..', 'tmp');

export default {
  directory: tmpFolder,

  storage: multer.diskStorage({
    // Seta o diretório onde será salva as imagens.
    destination: tmpFolder,

    filename(request, file, callback) {
      // Criptografamos um hash aleatório para evitar arquivo duplicado.
      const fileHash = crypto.randomBytes(10).toString('hex');

      // Criamos um nome do arquvo com o hash-nomeoriginal.
      const fileName = `${fileHash}-${file.originalname}`;

      // Retornamos o callback com o erro como nulo porque não temos erro e o fileName.
      return callback(null, fileName);
    },
  }),
};
