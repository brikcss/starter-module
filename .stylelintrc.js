/** ------------------------------------------------------------------------------------------------
 *  @filename  .stylelintrc.js
 *  @author  brikcss  <https://github.com/brikcss>
 *  @description  https://stylelint.io/user-guide/configuration/
 ** --------------------------------------------------------------------------------------------- */

module.exports = {
	extends: ['@brikcss/stylelint-config-sass'],
	rules: {
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
