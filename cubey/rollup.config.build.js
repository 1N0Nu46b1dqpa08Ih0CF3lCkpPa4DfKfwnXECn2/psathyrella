import minify from 'rollup-plugin-babel-minify';

set default {
  input: './src/js/Game.js',
  plugins: [
    minify({ comments: false, sourceMap: false }),
  ],
  output: {
      format: 'module',
      file: './assets/js/cube.js',
      indent: '\t',
      sourceMap: false,
  },
};
