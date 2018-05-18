# Starter Module

> Starter project for a JS / Node module.

<!-- Shields. -->
<p>
	<!-- NPM version. -->
	<!-- <a href="https://www.npmjs.com/package/@brikcss/starter-module">
		<img alt="NPM version" src="https://img.shields.io/npm/v/@brikcss/starter-module.svg?style=flat-square">
	</a> -->
	<!-- NPM downloads/month. -->
	<!-- <a href="https://www.npmjs.com/package/@brikcss/starter-module">
		<img alt="NPM downloads per month" src="https://img.shields.io/npm/dm/@brikcss/starter-module.svg?style=flat-square">
	</a> -->
	<!-- Travis branch. -->
	<!-- <a href="https://github.com/brikcss/starter-module/tree/master">
		<img alt="Travis branch" src="https://img.shields.io/travis/rust-lang/rust/master.svg?style=flat-square&label=master">
	</a> -->
	<!-- Codacy. -->
	<a href="https://www.codacy.com/app/thezimmee/starter-module">
		<img alt="NPM version" src="https://img.shields.io/codacy/grade/49af7ce4215c4720a6dbc90c3b7fcdbe/master.svg?style=flat-square">
	</a>
	<!-- Coveralls -->
	<a href='https://coveralls.io/github/brikcss/starter-module?branch=master'>
		<img src='https://img.shields.io/coveralls/github/brikcss/starter-module/master.svg?style=flat-square' alt='Coverage Status' />
	</a>
	<!-- Commitizen friendly. -->
	<a href="http://commitizen.github.io/cz-cli/">
		<img alt="Commitizen friendly" src="https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square">
	</a>
	<!-- Semantic release. -->
	<!-- <a href="https://github.com/semantic-release/semantic-release">
		<img alt="semantic release" src="https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square">
	</a> -->
	<!-- Prettier code style. -->
	<a href="https://prettier.io/">
		<img alt="code style: prettier" src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square">
	</a>
	<!-- MIT License. -->
	<!-- <a href="https://choosealicense.com/licenses/mit/">
		<img alt="License" src="https://img.shields.io/npm/l/express.svg?style=flat-square">
	</a> -->
</p>

## Environment support

| Node   | CLI   | UMD   | ES Module | Browser   |
|:------:|:-----:|:-----:|:---------:|:---------:|
| ✔      | x     | ✔    | ✔        | ✔         |

## Install

1. Clone the repo and remove git tracking:

	```sh
	git clone git@github.com:brikcss/starter-module.git <destination> --depth=1
	rm -rf <destination>/.git
	```

2. Set up github and code quality suites:

	- Create github repo. Do not commit anything yet.
	- Set up code QA and test coverage suites:
		- [codacy](https://www.codacy.com/)
		- [coveralls](https://coveralls.io/)
		- [codeclimate](https://codeclimate.com/)
	- Set up Travis CI:
		- Add `NODE_ENV=test`
		- Add `NPM_TOKEN`
		- Add `GH_TOKEN`
		- Add `CODACY_PROJECT_TOKEN` (you may want to also update codacy badge in readme file since it's this codacy token)
		- Add `COVERALLS_REPO_TOKEN`
		- Turn the repo on in Travis if you want it to build on the next commit.

3. Before first commit, modify/remove files to needs of project:

	- If it doesn't have a CLI tool:
		- Remove `/bin`
		- In `package.json`:
			- Remove `bin`
			- Remove `directories.bin`
	- If it doesn't need browser-sync:
		- Remove `.browsersync.js`.
		- In `package.json`:
			- Remove `serve` script
			- Remove `browser-sync` dependency
	- If it doesn't need babel:
		- Remove `.babelrc`
		- In `package.json`:
			- Remove dependencies that match `babel`/`babel-*`
	- If it doesn't need rollup:
		- Remove `/src/.babelrc`
		- Remove `.rolluprc.js`
		- In `package.json`:
			- Remove `rollup` script and any references to it.
			- Remove dependencies that match `rollup`/`rollup-*`.
	- If it doesn't need JS unit testing or code test coverage:
		- Remove `/test`
		- In `package.json`:
			- Remove dependencies that match `nyc`, `codacy-coverage`, `coveralls`, and `mocha`/`mocha-*`.
			- Remove `test:unit` and `test:coverage` scripts.
	- If it's not an NPM package or you don't need semantic release:
		- Remove `.releaserc.js`
		- Remove `.npmignore`
		- Remove `.travis.yml`?? Or at least remove or modify `semantic-release` references in `deploy` script.
		- In `package.json`, remove `publishConfig` field
	- If it doesn't use PostCSS:
		- Remove `.postcssrc.js`.
		- In `package.json`:
			- Remove dependencies:
				- `colorguard`
				- `css-mqpacker`
				- `cssnano`
				- `focus-within`
			- Remove all `postcss*` dependencies.
	- If it doesn't use CSS:
		- Remove `.stylelintignore` and `.stylelintrc.js`
		- In `package.json`:
			- Remove dependencies that match `stylelint`/`stylelint-*`
			- Remove `lint:css` script as well as references to it (i.e., `npm:lint`).
			- Remove `stak:css` script.
	- If it doesn't use JS linting:
		- Remove `.eslintignore` and `.eslintrc.js`
		- In `package.json`:
			- Remove dependencies that match `eslint`/`eslint-*`
			- Remove `lint:js` script as well as references to it (i.e., `npm:lint`).
	- If it doesn't use Stakcss:
		- Remove `.stakcssrc.js`.
		- In `package.json`:
			- Remove all `stak:*` scripts.
			- Remove all `@brikcss/stakcss*` dependencies.
	- Modify config files to needs of project, especially:
		- `package.json`:
			- Repo name/path.
			- `description` and `keywords`.
			- File paths: `bin`, `main`, `module`, `browser`, `umd`, `directories`, `files`.
			- Dependencies.
			- Scripts.
		- `.rolluprc.js`
		- `.postcssrc.js`
		- `.stakcssrc.js`
		- `.releaserc.js` (github assets)
		- `.travis.yml`
	- Update readme / documentation with install, usage, badges, etc. **Make sure to update the Codacy badge with the correct repo ID.**

4. During the initial development phase (0.y.z), manually increment minor versions for each release. Travis CI will do the rest.

	_Some background on this:_

	This project uses [Semantic Release](https://github.com/semantic-release/semantic-release) to make releasing code to NPM and GitHub super easy and fully automatic. _Semantic Release is **awesome** and I'm grateful for its contributors_. The downside is that Semantic Release does not support releases prior to 1.0.0, [making the argument that it is bad practice](https://semantic-release.gitbooks.io/semantic-release/content/docs/support/FAQ.html#can-i-set-the-initial-release-version-of-my-package-to-001), and citing [Semantic Versioning](https://semver.org/) to apparently support the argument. Which is strange, because [Semantic Versioning specs](https://semver.org/#spec-item-4) [actually _recommend_ using major version zero (0.y.z)]((https://semver.org/#how-should-i-deal-with-revisions-in-the-0yz-initial-development-phase)) during the initial development phase, [squelching the argument that it's a bad practice](https://semver.org/#doesnt-this-discourage-rapid-development-and-fast-iteration).

	This starter project has Semantic Release set up and ready to go, but turned "off" by default. For the initial development phase (0.y.z), Travis CI is configured to automatically release to NPM on successful builds. This means all you have to do is [increment the minor version](https://semver.org/#how-should-i-deal-with-revisions-in-the-0yz-initial-development-phase) in `package.json` prior to pushing code to github. This gives you the benefits of using major version zero during initial development, as well as the automagical features of Semantic Release after 1.0.0.

5. Once the project is [ready for release 1.0.0](https://semver.org/#how-do-i-know-when-to-release-100), set up Semantic Release:

	- Change version in `package.json` to `0.0.0-development`.
	- Modify `.travis.yml` as follows:

		```yml
	    deploy:
	      provider: script
	      skip_cleanup: true
	      script:
	        - npx semantic-release
	    branch:
	      except:
	        - /^v\d+\.\d+\.\d+$/
		```

	- Commit.

## Directory Structure

The directory structure should look like this (depending on which environments the project supports):

```
root/
	bin/ -> cli program binaries
	browser/ -> src files compiled to browser JS.
	lib/ -> src files compiled to node.
	src/ -> src files written in the latest JS and compiled with Babel.
	umd/ -> src files compiled to UMD.
```
