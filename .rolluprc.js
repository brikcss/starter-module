/** ------------------------------------------------------------------------------------------------
 *  @filename  .rolluprc.js
 *  @author  brikcss  <https://github.com/brikcss>
 *  @description  Configuration for rollupjs bundles.
 ** --------------------------------------------------------------------------------------------- */

/** Set up environment.
 ============================================================================================= */

import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import prettier from 'rollup-plugin-prettier';
const prettierConfig = require('./.prettierrc.js');
import uglify from 'rollup-plugin-terser';
import merge from '@brikcss/merge';
import pkg from './package.json';

// Flags.
const isProd = process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'test';

// Build each config variation.
//
// This will build a config for each item in the `formats` property. Formats is an Array of Strings
// or Array of Arrays of Strings. Each String should be the rollup `format`, then the field name in
// package.json to use (i.e., main, etc.), separated by a colon. For example:
//     [['cjs:main', 'es:module'], ['iife:browser', 'umd']] or ['cjs:main']
let configs = buildConfigs({
	name: 'shots',
	formats: isProd ? [['cjs:main', 'es:module'], ['iife:browser', 'umd']] : ['cjs:main']
});

/** Build config functions.
 ============================================================================================= */

/**
 *  Build config variations.
 *
 *  @param   {Object}  lib  Library and variation settings.
 *  @return  {Array|Object}  Array of configs. If Array has only one, the config Object is returned.
 */
function buildConfigs(lib = {}) {
	let configs = [];

	// Build a config for each set of formats.
	lib.formats.forEach((format) => {
		let config = {};
		config.output = buildOutputs(format);
		config = buildConfig(format, config);
		configs.push(config);
	});

	// Build config for each output.
	function buildConfig(config) {
		const formats = [];
		(config.output instanceof Array ? config.output : [config.output]).forEach((output) =>
			formats.push(output.format)
		);
		// Build config.
		config = merge(
			{
				input: `src/${lib.name}.js`,
				watch: {
					chokidar: true,
					include: 'src/**',
					exclude: 'node_modules/**',
					clearScreen: true
				},
				plugins: [
					resolve(),
					commonjs(),
					babel(
						formats.contains('cjs') || formats.contains('es')
							? {
									exclude: 'node_modules/**'
							  }
							: {
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
							  }
					)
				].concat(isProd ? [uglify()] : [prettier(prettierConfig)])
			},
			config
		);

		return config;
	}

	// Build output for each format.
	function buildOutputs(formats) {
		const outputs = [];
		if (typeof formats === 'string') formats = [formats];
		formats.forEach((format) => {
			format = format.split(':');
			outputs.push({
				name: ['iife', 'umd'].contains(format[0]) && `brikcss.${lib.name}`,
				format: format[0],
				file: pkg[format[1] || format[0]].replace(isProd ? '' : '.min', '')
			});
		});

		return outputs.length === 1 ? outputs[0] : outputs;
	}

	// Return config(s).
	return configs.length === 1 ? configs[0] : configs;
}

/** Exports.
 ============================================================================================= */

export default configs;
