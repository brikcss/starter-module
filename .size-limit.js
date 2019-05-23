/**
 * Size limit configuration.
 *
 * @param {String|glob} path  Relative paths/globs to files. The only required option.
 * @param {String} [name]  The name of this section. It will be useful only if you have multiple
 * @param {String|glob} [ignore]  An array of files and dependencies to ignore from project size.
 * @param {String|String[]} [entry]  When using a custom webpack config, a webpack entry could be
 *     given. It could be a string or an array of strings. By default, the total size of all entry
 *     points will be checked.
 * @param {String} [limit]  Size or time limit for files from path option. Format: 100 B, 10 KB, 500
 *     ms, 1 s.
 *     sections.
 * @param {Boolean} [webpack=true]  With false will disable webpack.
 * @param {Boolean} [running=true]  With false will disable calculating running time.
 * @param {Boolean} [gzip=true]  With false will disable gzip compression.
 * @param {String} [config]  A path to custom webpack config.
 */
module.exports = [
  {
    path: 'src/**/*',
    limit: '10 kb',
    webpack: false
  }
]
