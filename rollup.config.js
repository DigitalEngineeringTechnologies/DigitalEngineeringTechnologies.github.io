import resolve from '@rollup/plugin-node-resolve';

export default {
  input: './src/ifc-viewer/app.js',
  output: {
    file: "./src/ifc-viewer/bundle.js",
    format: 'esm'
  },
  plugins: [ resolve() ]
};