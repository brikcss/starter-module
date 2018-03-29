/** ------------------------------------------------------------------------------------------------
 *  @filename  .stylelintrc.js
 *  @author  brikcss  <https://github.com/brikcss>
 *  @description  https://stylelint.io/user-guide/configuration/
 ** --------------------------------------------------------------------------------------------- */

module.exports = {
	formatter: 'stylelint-formatter-pretty',
	plugins: ['stylelint-scss'],
	defaultSeverity: process.env.NODE_ENV === 'production' ? 'error' : 'warning',
	rules: {
		// ----------------------------
		// stylelint-config-recommended
		//
		'block-no-empty': true,
		'color-no-invalid-hex': true,
		'comment-no-empty': true,
		'declaration-block-no-shorthand-property-overrides': true,
		'font-family-no-duplicate-names': true,
		'font-family-no-missing-generic-family-keyword': true,
		'function-calc-no-unspaced-operator': true,
		'function-linear-gradient-no-nonstandard-direction': true,
		'keyframe-declaration-no-important': true,
		'media-feature-name-no-unknown': true,
		'no-descending-specificity': true,
		'no-duplicate-at-import-rules': true,
		'no-duplicate-selectors': true,
		'no-empty-source': true,
		'no-extra-semicolons': true,
		'no-invalid-double-slash-comments': true,
		'property-no-unknown': true,
		'selector-pseudo-class-no-unknown': true,
		'selector-pseudo-element-no-unknown': true,
		'string-no-newline': true,
		'unit-no-unknown': true,

		// -----------------------------
		// @brikcss/stylelint-config-css
		//

		/** POTENTIAL ERRORS (these will override stylelint-config-recommended). */
		// Declaration blocks.
		'declaration-block-no-duplicate-properties': [
			true,
			{
				// ignoreProperties: [],
				ignore: ['consecutive-duplicates-with-different-values']
			}
		],
		// Selectors.
		'selector-type-no-unknown': [
			true,
			{
				ignore: 'custom-elements'
				// ignoreNamespaces: [],
				// ignoreTypes: []
			}
		],
		// At rules.
		// 'at-rule-no-unknown': [true, {ignoreAtRules: ['include', 'mixin', 'if', 'else', 'function', 'return']}],
		'at-rule-no-unknown': null,

		/** DISCRETIONARY RULES / LANGUAGE FEATURES. */
		// Colors.
		'color-named': ['never', { ignore: 'inside-function' }],
		'color-no-hex': true,
		// Functions.
		// 'function-blacklist': [], // Disallowed functions.
		// 'function-whitelist': [], // Allowed functions.
		// Numbers / units.
		// 'unit-whitelist': ['rem', 'em', '%', 'deg', 'vh', 'vw', 's', 'ms'], // Allowed units.
		'number-max-precision': 5,
		// Values.
		'value-no-vendor-prefix': true,
		// Properties.
		// 'property-blacklist': [], // Disallowed properties.
		// 'property-whitelist': [], // Allowed properties.
		'property-no-vendor-prefix': true,
		// Declaration blocks.
		// 'declaration-property-unit-blacklist': {
		// 	'font-size': ['px']
		// }, // Disallowed propert/unit pairs.
		// 'declaration-property-value-blacklist': {
		// 	'position': ['fixed']
		// }, // Disallowed property/value pairs.
		// 'declaration-property-value-whitelist': {
		// 	'position': ['fixed']
		// }, // Allowed property/value pairs.
		'declaration-no-important': true,
		// Selectors.
		// 'selector-pseudo-class-blacklist': [],
		// 'selector-pseudo-class-whitelist': [],
		// 'selector-attribute-operator-blacklist': [],
		// 'selector-attribute-operator-whitelist': [],
		// 'selector-class-pattern': [],
		// 'selector-id-pattern': [],
		'selector-max-attribute': 1,
		// 'selector-max-class': 1,
		// 'selector-max-combinators': 1,
		'selector-max-compound-selectors': 3,
		'selector-max-empty-lines': 0,
		'selector-max-id': 0,
		// 'selector-max-specificity': '',
		'selector-max-type': 0,
		'selector-max-universal': 0,
		'selector-no-qualifying-type': true,
		'selector-no-vendor-prefix': true,
		// Media.
		'media-feature-name-blacklist': ['/^max-width/'], // Disallowed media feature names.
		// 'media-feature-name-whitelist': [], // Allowed media feature names.
		// 'custom-media-pattern': '', // Pattern for custom media query names.
		'media-feature-name-no-vendor-prefix': true,
		// At rules.
		// 'at-rule-blacklist': [], // Disallowed at-rules.
		// 'at-rule-whitelist': [], // Allowed at-rules.
		// Comments.
		// 'comment-word-blacklist': [], // Disallowed words in comments.

		/** STYLISTIC RULES. */
		// Colors.
		'color-hex-case': 'lower',
		'color-hex-length': 'short',
		// Fonts.
		'font-family-name-quotes': 'always-unless-keyword',
		'font-weight-notation': 'named-where-possible',
		// Functions.
		// 'function-comma-newline-before': false,
		'function-comma-space-before': 'never',
		'function-max-empty-lines': 0,
		// 'function-name-case': ['lower', {ignoreFunctions: ["/^(get|\#\{get).*$/"]}],
		'function-name-case': ['lower', { ignoreFunctions: ['/^#{.*$/'] }],
		'function-url-quotes': 'always',
		'function-whitespace-after': 'always',
		// Numbers / units.
		'number-leading-zero': 'always',
		'number-no-trailing-zeros': true,
		'length-zero-no-unit': true,
		'unit-case': 'lower',
		// Strings.
		'string-quotes': 'single',
		// Values.
		'value-keyword-case': 'lower',
		// 'value-list-comma-newline-after': false,
		// 'value-list-comma-newline-before': false,
		// 'value-list-comma-space-after': false,
		// 'value-list-comma-space-before': false,
		'value-list-max-empty-lines': 0,
		// Custom properties.
		// 'custom-property-empty-line-before': false,
		// Properties.
		'property-case': 'lower',
		// Declaration blocks.
		'declaration-block-single-line-max-declarations': 1,
		'declaration-bang-space-after': 'never',
		// 'declaration-colon-newline-after': false,
		'declaration-colon-space-after': 'always',
		'declaration-colon-space-before': 'never',
		// 'declaration-empty-line-before': false,
		'declaration-block-semicolon-newline-after': 'always-multi-line',
		'declaration-block-semicolon-newline-before': 'never-multi-line',
		'declaration-block-semicolon-space-after': 'always-single-line',
		'declaration-block-semicolon-space-before': 'never',
		'declaration-block-trailing-semicolon': 'always',
		'block-closing-brace-empty-line-before': 'never',
		'block-closing-brace-newline-after': [
			'always',
			{
				ignoreAtRules: ['if', 'else']
			}
		],
		'block-closing-brace-newline-before': 'always-multi-line',
		'rule-empty-line-before': [
			'always-multi-line',
			{ except: ['first-nested'], ignore: ['after-comment'] }
		],
		// Selectors.
		'selector-attribute-brackets-space-inside': 'never',
		'selector-attribute-operator-space-after': 'never',
		'selector-attribute-operator-space-before': 'never',
		'selector-attribute-quotes': 'always',
		'selector-combinator-space-after': 'always',
		'selector-combinator-space-before': 'always',
		'selector-descendant-combinator-no-non-space': true,
		'selector-pseudo-class-case': 'lower',
		'selector-pseudo-class-parentheses-space-inside': 'never',
		'selector-pseudo-element-case': 'lower',
		'selector-pseudo-element-colon-notation': 'single',
		'selector-type-case': 'lower',
		'selector-list-comma-newline-after': 'always',
		'selector-list-comma-newline-before': 'never-multi-line',
		// 'selector-list-comma-space-after': false,
		'selector-list-comma-space-before': 'never',
		// Media queries.
		'media-feature-colon-space-after': 'always',
		'media-feature-colon-space-before': 'never',
		'media-feature-name-case': 'lower',
		'media-feature-parentheses-space-inside': 'never',
		'media-feature-range-operator-space-after': 'always',
		'media-feature-range-operator-space-before': 'always',
		'media-query-list-comma-newline-after': 'always-multi-line',
		// 'media-query-list-comma-newline-before': false,
		'media-query-list-comma-space-after': 'always-single-line',
		// 'media-query-list-comma-space-before': false,
		// At rules.
		// 'at-rule-empty-line-before': ['always', {except: ['blockless-after-blockless', 'inside-block', 'first-nested']}],
		'at-rule-name-case': 'lower',
		// 'at-rule-name-newline-after': false,
		'at-rule-name-space-after': 'always',
		'at-rule-semicolon-newline-after': 'always',
		'at-rule-semicolon-space-before': 'never',
		// Comments.
		// 'comment-empty-line-before': false,
		'comment-whitespace-inside': 'always',

		// Stylesheets / errors.
		'max-empty-lines': 2,
		// 'max-line-length': false,
		'no-eol-whitespace': true,
		'no-missing-end-of-source-newline': true,

		// 'properties-alphabetical-order': true,

		// ------------------------------
		// @brikcss/stylelint-config-sass
		//

		/** OVERWRITE EXISTING stylelint-config-css CSS RULES. */
		'max-nesting-depth': [
			3,
			{
				ignore: ['blockless-at-rules']
				// ignoreAtRules: []
			}
		],
		indentation: null,

		/** SASS RULES (stylelint-scss). */
		'scss/at-if-closing-brace-newline-after': 'always-last-in-chain',
		'scss/at-import-partial-extension-blacklist': [
			'css',
			'scss',
			'sass',
			'less',
			'styl',
			'stylus'
		],
		'scss/at-mixin-parentheses-space-before': 'never',
		// 'scss/at-mixin-pattern': '/foo-.+/',
		// 'scss/at-function-pattern': '/foo-.+/',
		'scss/dollar-variable-colon-space-after': 'always',
		'scss/dollar-variable-colon-space-before': 'never',
		'scss/dollar-variable-empty-line-before': [
			'always',
			{ except: ['first-nested', 'after-dollar-variable'], ignore: ['after-comment'] }
		],
		'scss/dollar-variable-no-missing-interpolation': true,
		// 'scss/dollar-variable-pattern': '/foo-.+/',
		// 'scss/percent-placeholder-pattern': '/foo-.+/',
		// 'scss/percent-placeholder-pattern': '/foo-.+/',
		'scss/media-feature-value-dollar-variable': 'always',
		// 'scss/operator-no-newline-after': true,
		// 'scss/operator-no-newline-before': true,
		// 'scss/operator-no-unspaced': true,
		'scss/selector-no-redundant-nesting-selector': true,

		// ------
		// Local.
		//

		'unit-blacklist': ['cm', 'in', 'mm', 'pc', 'pt'],
		'declaration-property-unit-whitelist': {
			'/^font-/': ['em', 'rem', '%'],
			'line-height': ['rem', 'em', '%', ''],
			height: ['em', 'rem', '%', 'vw', 'vh'],
			width: ['em', 'rem', '%', 'vw', 'vh'],
			'/^min-/': ['em', 'rem', '%', 'vw', 'vh'],
			'/^max-/': ['em', 'rem', '%', 'vw', 'vh'],
			'/^margin/': ['em', 'rem', '%', 'vw', 'vh'],
			'/^padding/': ['em', 'rem', '%', 'vw', 'vh'],
			'/^border/': ['rem', 'em', 'px', '%']
		}
	}
};
