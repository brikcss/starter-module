/**
 * .postcssrc.js
 * -------------
 * This file is used in combination with `.stakcssrc.js` (which runs postcss) to generate postcss
 * plugins for multiple postcss configurations.
 * =================================================================================================
 */

const env = process.env.NODE_ENV;
const isProd = ['production', 'test'].includes(env);

module.exports = (...plugins) => {
	const pluginsList = {
		// Import CSS files for processing.
		'postcss-import': {
			// filter: (filepath) => {},
			// root: process.cwd(),
			// path: [],
			// plugins: [],
			// resolve: (id, baseDir, importOptions) => {},
			// load: (filename, importOptions) => {},
			// skipDuplicates: true,
			// addModulesDirectories: []
		},

		// Create custom css/js mixins.
		'postcss-mixins': {
			mixinsDir: './src/mixins'
		},

		// Manage assets.
		'postcss-assets': {
			basePath: 'src/',
			baseUrl: '/',
			cachebuster: true,
			cache: true,
			loadPaths: [],
			relative: true
		},

		// Rebase, inline, or copy assets. Works with postcss-assets.
		'postcss-url': {},

		// Auto generate @font-face rules.
		'postcss-font-magician': {
			// 	variants: {}, // Download specific variants.
			// 	hosted: [], // Directory(ies) of self-hosted fonts.
			// 	aliases: {}, // Aliases for given fonts.
			// 	formats: 'local woff2 woff eot',
			// 	foundries: 'custom hosted bootstrap google',
			// 	custom: {}, // Custom settings.
		},

		// Polyfills css variables/properties.
		'postcss-css-variables': {
			preserve: true
		},

		// Enables custom property sets.
		'postcss-apply': {},

		// Polyfill future css features based on supported browsers.
		'postcss-preset-env': {
			// Determines which css features to polyfill.
			stage: 1,
			// Toggle features.
			features: {
				'custom-properties': false,
				'custom-property-sets': false,
				'image-set-function': {},
				'logical-properties-and-values': false,
				'nesting-rules': {},
				'custom-media-queries': {
					extensions: {
						'--phone': '(min-width: 480px)',
						'--tablet': '(min-width: 768px)',
						'--desktop': '(min-width: 990px)',
						'--wide': '(min-width: 1400px)'
					},
					preserve: true,
					appendExtensions: false
				},
				'media-query-ranges': {},
				'custom-selectors': { extensions: {}, transformMatches: false },
				'case-insensitive-attributes': {},
				'rebeccapurple-color': false,
				'hexadecimal-alpha-notation': false,
				'lab-function': false,
				'color-mod-function': {},
				'color-functional-notation': {},
				'system-ui-font-family': {},
				'font-variant-property': {},
				'all-property': {},
				'matches-pseudo-class': {},
				'not-pseudo-class': {},
				'any-link-pseudo-class': {},
				'dir-pseudo-class': false,
				'break-properties': {},
				'gap-properties': {},
				'overflow-property': {},
				'overflow-wrap-property': {},
				'place-properties': {},
				'focus-visible-pseudo-class': {},
				'focus-within-pseudo-class': {}
			},
			// Determine which features to polyfill based on browserslist.
			browsers: 'last 2 versions',
			// Insert plugins into the chain.
			// insertBefore: {
			// 	'nesting-rules': [
			// 		// Enables nested ancestor selectors.
			// 		require('postcss-nested-ancestors')({
			// 			placeholder: '^&'
			// 		})
			// 	]
			// },
			insertAfter: {}
		},

		// Packs multiple media queries into one.
		'css-mqpacker': {},

		// Combines colors within a specificed threshold to reduce number of color values.
		colorguard: {
			// ignore: [],
			// threshold: 3,
			// whitelist: [[]]
		},

		// Convert pixel values to rems.
		'postcss-pxtorem': {
			rootValue: 8,
			unitPrecision: 5,
			propList: ['*'],
			selectorBlackList: [],
			replace: true,
			mediaQuery: false,
			minPixelValue: 0
		},

		// Adds specified prefix to all classes and ids.
		'postcss-prefixer': {
			// prefix: '',
			// ignore: []
		},

		// Auto generates vendor prefixed properties based on browser support.
		autoprefixer: {},

		// Minify output css.
		'postcss-csso': {
			restructure: true,
			forceMediaMerge: false,
			comments: true, // 'exclamation' (true) | 'first-exclamation' | false
			usage: null,
			logger: null
		},

		// Log postcss output to console.
		'postcss-reporter': {
			clearReportedMessages: true,
			throwError: isProd,
			sortByPosition: true
		}
	};

	return plugins.map((plugin) => {
		return require(plugin)(pluginsList[plugin]);
	});
};
