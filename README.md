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
| ✔      | x     | x     | x         | x         |

## Install

1. Clone the repo and remove git tracking:

	```sh
	git clone git@github.com:brikcss/starter-module.git <destination> --depth=1
	rm -rf <destination>/.git
	```

2. Set up initial project config:
	- `package.json`
	- `.rolluprc.js`
	- `.releaserc.js` (github assets)
	- `.travis.yml`

3. When code is ready, set up CI and commit code:

	- Create github repo and set up:
		- [codacy](https://www.codacy.com/)
		- [coveralls](https://coveralls.io/)
		- [codeclimate](https://codeclimate.com/)
	- Update readme shields and install/usage instructions. **Make sure to update the Codacy badge with the correct repo ID.**
	- Commit code.
	- Set up Travis CI:
		- Add `NODE_ENV=test`
		- Add `NPM_TOKEN`
		- Add `GH_TOKEN`
		- Add `CODACY_PROJECT_TOKEN`
		- Add `COVERALLS_REPO_TOKEN`
		- Turn the repo on.
	- If the build doesn't automatically start, trigger the first build.

4. By default, successful CI builds will bump to the next `minor` version. Once the version is considered 1.0.0, set up semantic release by modifying the following properties in `.travis.yml` as follows:
	```yml
	# Add these lines:
	deploy:
        script:
          - npx semantic-release
    branch:
    	except:
    		- /^v\d+\.\d+\.\d+$/
	```

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
