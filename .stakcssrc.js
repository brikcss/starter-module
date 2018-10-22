/** ================================================================================================
 *  Setup.
 ** ------ */

const env = process.env.NODE_ENV;
const isProd = ['production', 'prod', 'test'].includes(env);
const loadPostcssPlugins = require('./.postcssrc.js');
const basePostcssPlugins = ['autoprefixer'];

/** ================================================================================================
 *  Config export object.
 ** --------------------- */

let config = {
	html: {
		source: 'src/index.html',
		output: 'dist/index.html',
		bundlers: ['@brikcss/stakcss-bundler-ejs']
	},
	css: {
		source: 'src/app.css',
		output: './dist/css/app.css',
		bundlers: [
			{
				run: '@brikcss/stakcss-bundler-postcss',
				options: { skipConfig: true, map: false },
				plugins: loadPostcssPlugins(...basePostcssPlugins.concat(['postcss-reporter']))
			}
		]
	},
	assets: {
		source: 'static/**/*',
		output: 'dist/assets/',
		root: 'static',
		bundlers: ['@brikcss/stakcss-bundler-copy']
	},
	svg: {
		source: './node_modules/@mdi/svg/svg/**',
		output: 'dist/svg/',
		root: 'node_modules/@mdi/svg/svg',
		bundlers: [
			{
				run: './lib/stakcss-bundler-svg.js',
				options: { plugins: [{ removeViewBox: false }, { removeDimensions: true }] }
			}
		]
	}
};

if (isProd) {
	config.css_min = Object.assign({}, config.css, {
		output: 'dist/css/app.min.css',
		bundlers: [
			{
				run: '@brikcss/stakcss-bundler-postcss',
				options: { skipConfig: true, map: false },
				plugins: loadPostcssPlugins(...basePostcssPlugins.concat(['postcss-csso']))
			}
		]
	});
}

module.exports = config;
