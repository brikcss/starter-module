/*! .rolluprc.js | @author Brikcss (https://github.com/brikcss) | @reference (https://rollupjs.org) */

// -------------------------------------------------------------------------------------------------
// Imports and setup.
//

import configGen from './.rollup-config-gen.js'

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
      id: 'webalias',
      input: 'src/webalias.js',
      output: {
        banner: configGen.createBanner()
      }
    },
    {
      type: 'dependency',
      id: 'hyperhtml',
      input: 'node_modules/hyperhtml/esm'
    },
    {
      type: 'dependency',
      id: 'element',
      input: 'node_modules/@brikcss/element/dist/esm/brik-element.js'
    }
  ],
  {
    umd (output, config) {
      output.exports = 'named'
      output.name = config.id === 'hyperhtml' ? 'brikcss.html' : 'brikcss.elements'
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
