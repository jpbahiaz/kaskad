import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import pkg from "./package.json"
import { terser } from 'rollup-plugin-terser'
import analyzer from 'rollup-plugin-analyzer'
import typescript from 'rollup-plugin-typescript2'
import cleanup from 'rollup-plugin-cleanup'

const production = !process.env.ROLLUP_WATCH

export default {
	input: 'src/index.ts',
	output: [
		{ file: pkg.main, format: 'umd', name: 'Kaskad' },
		{
			// file: pkg.module,
			dir: 'dist',
			format: 'es',
			preserveModules: true
		}
	],
	plugins: [
		resolve(),
		commonjs(),
		production && terser(),
		analyzer(),
		typescript(),
		cleanup({
			comments: 'none'
		})
	]
}

