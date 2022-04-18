// webpack.dev.config.js
const path = require('path');

module.exports = {
    devtool:"inline-source-map",
    /* 入口 */
    entry: path.join(__dirname, '../src/index.js'),
    /* 输出到dist目录，输出文件名字为bundle.js */
    output: {
        path: path.join(__dirname, '../dist'),
        filename: 'bundle.js'
    },
    devServer: {
        static: path.join(__dirname,"../dist"),
        compress: true, // gzip压缩
        host: '0.0.0.0',
        hot: true, // 热更新
        historyApiFallback: true, // 解决启动后刷新404
        port: 8000 // 端口

    },
     /* cacheDirectory是用来缓存编译结果，下次编译加速 */
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        use:'ts-loader',
        include: path.join(__dirname, "../src"),
        exclude: /node_modules/
      },
    ],
  }
};