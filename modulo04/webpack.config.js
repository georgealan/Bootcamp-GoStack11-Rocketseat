const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    //Corresponde a saida dos arquivos transpilados pelo webpack para javascript que o navegador entende
    path: path.resolve(__dirname, 'public'),
    // Nome do arquivo transpilado
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      // Regras informando o webpack quem vai lidar com tal linguagem
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          // O babel-loader vai lidar com arquivos .js
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader'},
          { loader: 'css-loader' },
        ]
      },
      {
        test: /.*\.(gif|png|jpe?g)$/i,
        use: {
          loader: 'file-loader'
        }
      }
    ]
  }
};