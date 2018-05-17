module.exports = {
	html: {
		source: 'src/index.html',
		output: 'dist/index.html',
		bundlers: ['@brikcss/stakcss-bundler-ejs']
	},
	css: {
		source: 'src/app.css',
		output: './dist/css/app.css',
		bundlers: ['@brikcss/stakcss-bundler-postcss']
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
