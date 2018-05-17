/** ------------------------------------------------------------------------------------------------
 *  @filename  .postcssrc.js
 *  @author  brikcss  <https://github.com/brikcss>
 *  @description  PostCSS configuration file.
 ** --------------------------------------------------------------------------------------------- */

const isProd = process.env.NODE_ENV === 'prod' || process.env.NODE_ENV === 'production';
module.exports = {
	map: !isProd,
	plugins: [
		require('postcss-import')({
			// filter: (filepath) => {},
			// root: process.cwd(),
			// path: [],
			// plugins: [],
			// load: (filename, importOptions) => {},
			// skipDuplicates: true,
			// addModulesDirectories: []
		}),

		// Manages assets.
		require('postcss-assets')({
			basePath: 'src/',
			baseUrl: '/',
			cachebuster: true,
			cache: true,
			loadPaths: [],
			relative: true
		}),

		// Rebase, inline, or copy assets. Works with postcss-assets.
		require('postcss-url')(),

		// Add custom css/js mixins.
		require('postcss-mixins')({
			mixinsDir: './src/mixins'
		}),

		// Polyfill future css features based on supported browsers.
		require('postcss-preset-env')({
			// Determines which css features to polyfill.
			stage: 1,
			// Toggle features.
			features: [],
			// Determine which features to polyfill based on browserslist.
			browsers: 'last 2 versions'
		}),

		// Handled by postcss-preset-env. Polyfills css variables/properties.
		// require('postcss-css-variables')({
		// 	preserve: true
		// }),

		// Enables custom property sets.
		require('postcss-apply')({
			preserve: true
		}),

		// Handled by postcss-preset-env. Polyfills image set function.
		// require('postcss-image-set-polyfill')(),

		// Enables nested ancestor selectors.
		require('postcss-nested-ancestors')({
			placeholder: '^&'
		}),

		// Handled by postcss-preset-env. Polyfills nested selectors.
		// require('postcss-nested')(),

		// Handled by postcss-preset-env. Polyfills custom media variables.
		// require('postcss-custom-media')({
		// 	extensions: {
		// 		'--phone': '(min-width: 480px)',
		// 		'--tablet': '(min-width: 768px)',
		// 		'--desktop': '(min-width: 990px)',
		// 		'--wide': '(min-width: 1400px)'
		// 	},
		// 	preserve: true,
		// 	appendExtensions: false
		// }),

		// Packs multiple media queries into one.
		require('css-mqpacker')(),

		// Handled by postcss-preset-env. Polyfills custom selector variables.
		// require('postcss-custom-selectors')({ extensions: {}, transformMatches: false }),

		// Handled by postcss-preset-env. Polyfills hwb() color function.
		// require('postcss-color-hwb')(),

		// Handled by postcss-preset-env. Polyfills hsl() color function.
		// require('postcss-color-hsl')(),

		// Handled by postcss-preset-env. Polyfills gray() color function.
		// require('postcss-color-gray')(),

		// Handled by postcss-preset-env. Polyfills color-mod() function.
		require('postcss-color-mod-function')(),

		// Combines colors within a specificed threshold to reduce number of color values.
		// require('colorguard')({
		// 	ignore: [],
		// 	threshold: 3,
		// 	whitelist: [[]]
		// }),

		// Automatically apply system ui font family.
		// require('postcss-font-family-system-ui')()

		// Auto generate @font-face rules.
		// require('postcss-font-magician')({
		// 	variants: {}, // Download specific variants.
		// 	hosted: [], // Directory(ies) of self-hosted fonts.
		// 	aliases: {}, // Aliases for given fonts.
		// 	formats: 'local woff2 woff eot',
		// 	foundries: 'custom hosted bootstrap google',
		// 	custom: {}, // Custom settings.
		// }),

		// Handled by postcss-preset-env. Polyfills `initial` keyword.
		// require('postcss-initial')(),

		// Convert pixel values to rems.
		require('postcss-pxtorem')({
			rootValue: 8,
			unitPrecision: 5,
			propList: ['*'],
			selectorBlackList: [],
			replace: true,
			mediaQuery: false,
			minPixelValue: 0
		})

		// Handled by postcss-preset-env. Polyfills :matches() selector.
		// require('postcss-selector-matches')(),

		// Handled by postcss-preset-env. Polyfills :not() selector with multiple values.
		// require('postcss-selector-not')(),

		// Handled by postcss-preset-env. Polyfills :any-link selector.
		// require('postcss-pseudo-class-any-link')(),

		// Adds specified prefix to all classes and ids.
		// require('postcss-prefixer')({
		// 	prefix: '',
		// 	ignore: []
		// }),
	].concat(
		isProd
			? [
					// Auto generates vendor prefixed properties based on browser support.
					require('autoprefixer')(),

					// Minify output css.
					require('postcss-csso')({
						restructure: true,
						forceMediaMerge: false,
						comments: true, // 'exclamation' (true) | 'first-exclamation' | false
						usage: null,
						logger: null
					})
			  ]
			: [
					// Log postcss output to console.
					require('postcss-reporter')({
						clearReportedMessages: true,
						throwError: isProd,
						sortByPosition: true
					})
			  ]
	)
};
