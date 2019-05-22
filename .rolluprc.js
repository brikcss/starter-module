/*! .rolluprc.js | @author Brikcss (https://github.com/brikcss) | @reference (https://rollupjs.org) */

// -------------------------------------------------------------------------------------------------
// Imports and setup.
//

import configGen from '@brikcss/rollup-config-generator'

/**
 * Generate configs with a simple configuration object or array.
 *
 * @param {String} [type=undefined]  Type of config: 'browser'|'node'.
 * @param {String} [target=undefined]  Target environment:
 *     'modern'(browser),'legacy'(browser),'#'(node).
 * @param {String} [id=undefined]  Id/name of module. This determines the file name.
 * @param {Object|Function} [options={}]  Run options. Allowable keys are `${output.format}` or
 *     `${output.format}:${config.target}`. Each value can be an object or function, which gets
 *     merged with each config that matches the given format/target.
 */
export default configGen.create(
  [
    {
      type: 'browser',
      id: 'starter-module',
      input: 'src/starter-module.js',
      output: {
        banner: configGen.createBanner()
      }
    },
    {
      type: 'dependency',
      id: 'my-dependency',
      input: 'node_modules/my-dependency/esm'
    }
  ],
  {
    umd (output, config) {
      output.exports = 'named'
      output.name = 'brikcss.elements'
      output.globals = {
        '@brikcss/element': 'brikcss',
        hyperhtml: 'brikcss.html'
      }
      return output
    },
    'esm:modern': {
      paths: (id) => `./${id.includes('/') ? id.split('/')[1] : id}.js`
    }
  }
)
