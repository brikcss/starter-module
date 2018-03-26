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

## Install

1. Clone the repo and remove git tracking:

	```sh
	git clone git@github.com:brikcss/starter-module.git <destination> --depth=1
	rm -rf <destination>/.git
	```

2. Set up project in `package.json`.
3. Set up semantic release (assets to publish) in `.releaserc.js`.
4. Update readme:
	- Add package install/usage instructions.
	- Add/update badges. **Make sure to update the Codacy badge with the correct repo ID.**
5. Publish manually if version is >1.0.0. When ready for v1, set up Travis CI / `.travis.yml`:
	- Set up [codacy](https://www.codacy.com/).
	- Set up [coveralls](https://coveralls.io/).
	- Set up [codeclimate](https://codeclimate.com/).
	- Add env variables: `NPM_TOKEN`, `GH_TOKEN`, `CODACY_PROJECT_TOKEN`, `COVERALLS_REPO_TOKEN`.
	- Make sure correct tasks / environments are set up.

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

## Environment support

| Node   | CLI   | UMD   | Browser   |
|:-------|:-----:|:------|:----------|
| ✔      | 𐄂     | 𐄂     | 𐄂         |
