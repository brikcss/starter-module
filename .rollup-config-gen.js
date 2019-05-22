/*! .rollup-config-gen.js | @author Brikcss (https://github.com/brikcss) | @reference (https://rollupjs.org) */

// -------------------------------------------------------------------------------------------------
// Imports and setup.
//

import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import { terser as uglify } from 'rollup-plugin-terser'
import merge from '@brikcss/merge'
import pkg from './package.json'

// Configuration helpers.
const isProd = ['production', 'test'].includes(process.env.NODE_ENV)
const pkgName = pkg.name.includes('/') ? pkg.name.split('/')[1] : pkg.name

// -------------------------------------------------------------------------------------------------
// ConfigGen prototype methods and constructor.
//

/**
 * Create banner for rollup config.
 *
 * @return {String}  Banner.
 */
ConfigGen.prototype.createBanner = function createBanner () {
  return `/*! ${pkg.name} | @author ${pkg.author ||
    'Brikcss (https://github.com/brikcss)'} | @reference (${pkg.homepage ||
    'https://github.com/brikcss'}) */\n`
}

/**
 * Create babel configuration based on target environment.
 *
 * @param {Array} target  Target environment for babel compile. Can be 'modern', 'legacy', or 'node'.
 * @return {Object}  Babel configuration object.
 */
ConfigGen.prototype.createBabelConfig = function createBabelConfig (target, babelConfig = {}) {
  const browsers = {
    modern: ['Chrome >= 61', 'Firefox >= 60', 'Safari >= 10.1', 'Edge >= 16'],
    legacy: ['IE 11', 'Chrome < 61', 'Firefox < 60', 'Safari < 10.1', 'Edge < 16']
  }
  let babelPresetConfig = {
    targets: {
      node: !isNaN(target) ? target : '9',
      browsers: browsers.modern
    },
    useBuiltIns: false,
    loose: false,
    modules: 'auto',
    debug: false,
    include: [],
    exclude: []
  }
  babelConfig = target
    ? merge(
      {
        babelrc: false,
        presets: [['@babel/preset-env', babelPresetConfig]],
        plugins: [],
        include: [],
        exclude: [],
        runtimeHelpers: false
      },
      babelConfig
    )
    : undefined

  // Determine babel targets.
  if (babelConfig) {
    if (target.includes('cjs')) {
      babelPresetConfig.targets.node = !isNaN(target) ? target : '9'
      // babelPresetConfig.modules = 'cjs'
    }
    if (target === 'legacy') {
      babelPresetConfig.targets.browsers = browsers.legacy
      // babelPresetConfig.modules = 'umd'
    } else if (target === 'modern') {
      babelPresetConfig.targets.browsers = browsers.modern
      // babelPresetConfig.modules = 'umd'
    }
    if (target.includes('esm')) {
      babelPresetConfig.targets.browsers = browsers.modern
      // babelPresetConfig.modules = false
    }
  }

  return babelConfig
}

/**
 * Create default set of rollup plugins.
 *
 * @param {String} target  Babel compile target.
 * @return {Array}  Array of rollup plugins.
 */
ConfigGen.prototype.createPlugins = function createPlugins (config, on = {}) {
  const self = this
  let plugins = []

  // Prepend plugins at beginning.
  if (typeof on.prependPlugins === 'function') plugins = plugins.concat(on.prependPlugins(config))

  // Add common plugins for all targets.
  if (config.target) {
    plugins.push(resolve(), commonjs())
    plugins.push(babel(self.createBabelConfig(config.target)))
  }

  if (typeof on.insertPlugins === 'function') plugins = plugins.concat(on.insertPlugins(config))

  // Minimize in production.
  if (isProd) plugins.push(uglify())

  // Append plugins to end.
  if (typeof on.appendPlugins === 'function') plugins = plugins.concat(on.appendPlugins(config))

  // Return the plugins.
  return plugins
}

/**
 * Creates rollup output from user configuration.
 *
 * @param {Object|[Object]} output  User output property.
 * @param {Object} config={}  Parnet configuration for given output.
 * @return {Object|[Object]}  Normalized rollup output.
 */
ConfigGen.prototype.createOutput = function createOutput (config, globals = {}) {
  const self = this
  if (config.isParent === undefined) { config.isParent = config.isParent || (!config.id || pkg.name.includes(config.id)) }
  if (!(config.output instanceof Array)) config.output = [config.output]
  // Create default properties for each output.
  config.output = config.output.map((o) => {
    // Ensure format exists.
    if (!o.format) o.format = 'esm'
    // Ensure file exists.
    if (!o.file) {
      // If it's the parent module, use fields from package.json.
      if (config.isParent) {
        o.file = o.file =
          pkg[config.target ? self.options.pkgMap[`${o.format}:${config.type}`] || self.options.pkgMap[o.format] || 'main' : 'main']
      } else {
        o.file = `${self.options.outputDir ? `${self.options.outputDir}/` : ''}${o.format}/${
          config.id
        }.js`
      }
      // Add the target to differentiate files.
      if (config.target === 'legacy') {
        o.file = o.file.replace('.js', `.${config.target}.js`)
      }
    }
    // If globals[${format}] exists, merge it in.
    if (globals[o.format]) {
      o = merge(
        {},
        o,
        typeof globals[o.format] === 'function' ? globals[o.format](o, config) : globals[o.format]
      )
    }
    // If globals[`${format}:${target}`] exists, merge it in.
    if (globals[`${o.format}:${config.target}`]) {
      const targetOptions = globals[`${o.format}:${config.target}`]
      o = merge(
        {},
        o,
        typeof targetOptions === 'function' ? targetOptions(o, config) : targetOptions
      )
      o = merge({}, globals[o.format + ':' + config.target], o)
    }
    // Run on.output hook.
    if (typeof self.on.output === 'function') o = self.on.output(o, config)
    return o
  })
  // Return array if more than one output; otherwise return object.
  return config.output.length > 1 ? config.output : config.output[0]
}

/**
 * Create a single rollup config object.
 *
 * @param {Object} config  User configuration.
 * @return {Object}  Rollup config object.
 */
ConfigGen.prototype.createConfig = function createConfig (config, globals = {}) {
  const self = this
  // Merge config with base config.
  config = merge([{}, self.base, config], { arrayStrategy: 'overwrite' })
  if (config.output instanceof Array) {
    config.output = config.output.map((output) => merge({}, self.base.output, output))
  }

  // Create output(s).
  config.output = self.createOutput(config, globals)

  // Create plugins based on target(s).
  if (!config.plugins) {
    config.plugins = self.createPlugins(config)
  }

  // Return the config.
  delete config.type
  delete config.target
  delete config.id
  delete config.isParent
  return config
}

/**
 * Create multiple configs from one or more user configs.
 *
 * @param {Object|[Object]} configs  User configuration.
 * @param {Object} [globals={}]  Global configuration map, organized by output.format.
 * @return {Object|[Object]}  One or more configs.
 */
ConfigGen.prototype.create = function create (configs, globals = {}) {
  const self = this
  if (!(configs instanceof Array)) configs = [configs]
  configs = configs.reduce((result, config) => {
    if (config.type && self.sets[config.type]) {
      return result.concat(
        self.sets[config.type].map((c) => {
          return self.createConfig(merge({}, c, config), globals)
        })
      )
    }
    result.push(self.createConfig(config, globals))
    return result
  }, [])
  return configs.length > 1 ? configs : configs[0]
}

// -------------------------------------------------------------------------------------------------
// ConfigGen constructor.
//

/**
 * ConfigGen constructor.
 *
 * @class ConfigGen
 * @param {Object} [config={}]  Configuration options.
 * @param {Function} [config.base={}]  Base rollup config for all configurations to be generated.
 * @param {Function} [config.sets={}]  Default "sets". A set creates multiple rollup configs from a
 *     single config that has the "type" property.
 */
function ConfigGen ({ base = {}, sets = {}, options = {}, on = {} } = {}) {
  this.base = merge(
    {
      input: `src/${pkgName}.js`,
      external: Object.keys(pkg.dependencies),
      watch: {
        chokidar: true,
        include: 'src/**',
        exclude: 'node_modules/**',
        clearScreen: true
      },
      output: {
        compact: isProd,
        sourcemap: !isProd
      }
    },
    base
  )

  this.sets = merge(
    {
      // Main browser module.
      browser: [
        {
          target: null,
          output: {
            format: 'esm'
          }
        },
        {
          target: 'modern',
          output: [
            {
              format: 'umd'
            },
            {
              format: 'esm'
            }
          ]
        },
        {
          target: 'legacy',
          output: {
            format: 'umd'
          }
        }
      ],
      // Prebundled browser dependency.
      dependency: [
        {
          target: 'modern',
          output: [
            {
              format: 'umd'
            },
            {
              format: 'esm'
            }
          ]
        },
        {
          target: 'legacy',
          output: {
            format: 'umd'
          }
        }
      ],
      // Node module.
      node: [
        {
          target: 'node',
          output: [
            {
              format: 'cjs'
            },
            {
              format: 'esm'
            }
          ]
        }
      ],
      // Node CLI module.
      cli: [
        {
          target: 'node',
          output: [
            {
              format: 'cjs',
              intro: '#!/usr/bin/env node'
            },
            {
              format: 'esm',
              intro: '#!/usr/bin/env node'
            }
          ]
        }
      ]
    },
    sets || {}
  )

  this.on = on

  this.options = merge(
    {
      outputDir: 'dist',
      pkgMap: {
        esm: 'module',
        'esm:browser': 'browser',
        cjs: 'main',
        umd: 'umd',
        cli: 'bin'
      }
    },
    options
  )
}

// -------------------------------------------------------------------------------------------------
// Exports.
//

export default new ConfigGen()
export { ConfigGen }
