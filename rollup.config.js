import resolve from '@rollup/plugin-node-resolve'
import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import pkg from "./package.json"
import { terser } from 'rollup-plugin-terser'
import analyzer from 'rollup-plugin-analyzer'

const production = !process.env.ROLLUP_WATCH

export default {
	input: 'src/index.js',
	output: [
		{ file: pkg.main, format: 'cjs' },
		{ file: pkg.module, format: 'es' }
	],
	plugins: [
		resolve(),
		commonjs(),
		production && terser(),
		analyzer({
			summaryOnly: true,
		})
	]
}

