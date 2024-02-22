# Múltiplas entradas e saídas

A seguir, o exemplo de arquivo 'webpack.config.js' para múltiplas entradas e saídas. Basta configurar o 'entry' e o 'output' do módulo:

```js
const path = require('path');

module.exports = {
    entry: {
          home: './src/home.js',
          pedido: './src/pedido.js'
    }
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname,'dist')
    },
    mode: 'development',
    module: {
        rules:[
            {test:/\.css$/,use:['style-loader','css-loader']},
            {test:/\.(png|jpg|gif)/,use:['file-loader']}
        ]
    }
}
```
