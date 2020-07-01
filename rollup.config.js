import resolve from '@rollup/plugin-node-resolve'
import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import pkg from "./package.json"
import { terser } from 'rollup-plugin-terser'

export default [
	{
		input: 'src/index.js',
		output: {
			name: 'kaskad',
			file: pkg.browser,
			format: 'umd'
		},
		plugins: [
			resolve(),
			commonjs(),
			babel({ babelHelpers: 'bundled' }),
			terser()
		]
	},
	{
		input: 'src/index.js',
		external: [],
		output: [
			{ file: pkg.main, format: 'cjs' },
			{ file: pkg.module, format: 'es' }
		]
	}
]