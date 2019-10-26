module.exports = {
  presets: [
    // Alterar funcionalidades do JavaScript que o navegador ainda não entende.
    "@babel/preset-env",

    // Alterar funcionalidades do React que o navegador não entende.
    "@babel/preset-react"
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties'
  ]
};