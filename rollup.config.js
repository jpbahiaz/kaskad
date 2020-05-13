import { terser } from "rollup-plugin-terser";
import resolve from '@rollup/plugin-node-resolve';
import babel from 'rollup-plugin-babel';

export default {
  input: './src/index.js',
  output: {
    dir: 'dist',
		format: 'cjs',
  },
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**' // only transpile our source code
    }),
    terser()
  ]
};