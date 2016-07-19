// @file config.js
var dest = './build'; // 出力先ディレクトリ
var src = './src';  // ソースディレクトリ

module.exports = {
  // 出力先の指定
  dest: dest,

  // jsのビルド設定
  js: {
    src: src + '/js/**',
    dest: dest + '/js',
    uglify: false
  },

  // webpackの設定
  webpack: {
    entry: src + '/js/app.js',
    output: {
      filename: 'bundle.js'
    },
    devtool: 'inline-source-map',
    module: {
      loaders: [
        { test: /\.js$/, loader: 'jsx-loader' }
      ]
    },
    resolve: {
      extensions: ['', '.js', '.jsx']
    }
  },

  copy: {
    src: [   // 今後ただコピーするファイルが増えそうなので配列にしておく
      src + '/html/index.html'
    ],
    dest: dest
  }
}
