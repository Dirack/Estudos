# Múltiplas entradas e saídas

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
