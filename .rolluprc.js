/** ------------------------------------------------------------------------------------------------
 *  @filename  .rolluprc.js
 *  @author  brikcss  <https://github.com/brikcss>
 *  @description  Configuration for rollupjs bundles.
 ** --------------------------------------------------------------------------------------------- */

import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import prettier from 'rollup-plugin-prettier';
const prettierConfig = require('./.prettierrc.js');
import pkg from './package.json';

const baseOptions = {
	input: 'src/merge.js',
	plugins: [resolve(), commonjs()],
	watch: {
		chokidar: true,
		include: 'src/**',
		exclude: 'node_modules/**',
		clearScreen: true
	}
};

export default [
	Object.assign(baseOptions, {
		output: [
			// CommonJS for Node.
			{
				file: pkg.main,
				format: 'cjs'
			},
			// ES module for bundlers / build systems.
			{
				file: pkg.module,
				format: 'es'
			}
		],
		plugins: baseOptions.plugins.concat(
			babel({
				exclude: 'node_modules/**'
			}),
			prettier(prettierConfig)
		)
	}),
	Object.assign(baseOptions, {
		output: [
			// Browser global / IIFE.
			{
				name: 'brikcss.merge',
				file: pkg.browser,
				format: 'iife'
			},
			// Browser friendly UMD.
			{
				name: 'brikcss.merge',
				file: pkg.umd,
				format: 'umd'
			}
		],
		plugins: baseOptions.plugins.concat(
			babel({
				exclude: 'node_modules/**',
				presets: [
					[
						'env',
						{
							targets: {
								node: '8',
								browsers: ['last 2 versions', '> 2%']
							},
							modules: false
						}
					]
				]
			}),
			prettier(prettierConfig)
		)
	})
];
