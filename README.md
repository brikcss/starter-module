<h1 align="center">
    Starter Module
    <a class="headerlink" href="#starter-module" title="Permanent link"></a>
</h1>

<p align="center">
    <a href="https://github.com/brikcss" title="Brikcss">
        <img src="./assets/logo-brikcss.png" alt="Brikcss logo" />
    </a>
</p>

<h4 align="center">Starter project for a JS/CSS Node/Browser module.</h4>

<!-- Table of Contents. -->
<p align="center">
  <a href="#about">About</a> •
  <a href="#environment-and-browser-support">Environment and browser support</a> •
  <a href="#install">Install</a> •
  <a href="#quick-start">Quick Start</a> •
  <a href="#configuration">Configuration</a> •
  <a href="#api">API</a> •
  <a href="#credits">Credits</a> •
  <a href="#license">License</a>
</p>

<!-- Shields. -->
<p align="center">
    <!-- NPM version. -->
    <a href="https://www.npmjs.com/package/@brikcss/starter-module">
        <img alt="NPM version" src="https://img.shields.io/npm/v/@brikcss/starter-module.svg?style=for-the-badge">
    </a>
    <!-- NPM tag version. -->
    <a href="https://www.npmjs.com/package/@brikcss/starter-module">
        <img alt="NPM version" src="https://img.shields.io/npm/v/@brikcss/starter-module/next.svg?style=for-the-badge">
    </a>
    <!-- NPM downloads/month. -->
    <a href="https://www.npmjs.com/package/@brikcss/starter-module">
        <img alt="NPM downloads per month" src="https://img.shields.io/npm/dm/@brikcss/starter-module.svg?style=for-the-badge">
    </a>
    <!-- Travis branch. -->
    <a href="https://github.com/brikcss/starter-module/tree/master">
        <img alt="Travis branch" src="https://img.shields.io/travis/rust-lang/rust/master.svg?style=for-the-badge&label=master">
    </a>
    <!-- GitHub issues. -->
    <a href="https://github.com/brikcss/starter-module/issues">
        <img alt="GitHub issues" src="https://img.shields.io/github/issues/brikcss/starter-module.svg?style=for-the-badge">
    </a>
    <!-- Codacy. -->
    <!-- <a href="https://www.codacy.com">
        <img alt="Codacy code quality" src="https://img.shields.io/codacy/grade/<enter token here>/master.svg?style=for-the-badge">
        </a> -->
    <!-- <a href="https://www.codacy.com">
        <img alt="Codacy code coverage" src="https://img.shields.io/codacy/coverage/<enter token here>/master.svg?style=for-the-badge">
        </a> -->
    <!-- Coveralls -->
    <!-- <a href='https://coveralls.io/github/brikcss/starter-module?branch=master'>
        <img src='https://img.shields.io/coveralls/github/brikcss/starter-module/master.svg?style=for-the-badge' alt='Coverage Status' />
    </a> -->
    <!-- MIT License. -->
    <a href="LICENSE.md">
        <img alt="License" src="https://img.shields.io/npm/l/express.svg?style=for-the-badge">
    </a>
    <!-- JS Standard style. -->
    <a href="https://standardjs.com">
        <img alt="JavaScript Style Guide" src="https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=for-the-badge">
    </a>
    <!-- Prettier code style. -->
    <a href="https://prettier.io/">
        <img alt="code style: prettier" src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=for-the-badge">
    </a>
    <!-- Semantic release. -->
    <!-- <a href="https://github.com/semantic-release/semantic-release">
        <img alt="semantic release" src="https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=for-the-badge">
    </a> -->
    <!-- Commitizen friendly. -->
    <a href="http://commitizen.github.io/cz-cli/">
        <img alt="Commitizen friendly" src="https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=for-the-badge">
    </a>
    <!-- Greenkeeper. -->
    <a href="https://greenkeeper.io/">
        <img src="https://badges.greenkeeper.io/brikcss/starter-module.svg?style=flat-square" alt="Greenkeeper badge">
    </a>
</p>

<!-- [![NPM version][npm-version-img]][npm-url]
[![NPM next][npm-next-img]][npm-url]
[![NPM downloads per month][npm-downloads-img]][npm-url]
[![Build status][build-img]][build-url]
[![Codacy code quality][codacy-quality-img]][codacy-url]
[![Codacy coverage][codacy-coverage-img]][codacy-url]
[![Coveralls coverage][coveralls-img]][coveralls-url]
[![We love StandardJS][standardjs-img]][standardjs-url]
[![We love Prettier][prettier-img]][prettier-url]
[![We love Semantic Release][semantic-img]][semantic-url]
[![We love Commitizen][commitizen-img]][commitizen-url]
[![We love Greenkeeper][greenkeeper-img]][greenkeeper-url]
[![License][license-img]][license-url]

[npm-url]: https://www.npmjs.com/package/@brikcss/starter-module
[npm-version-img]: https://img.shields.io/npm/v/@brikcss/starter-module.svg?style=for-the-badge
[npm-next-img]: https://img.shields.io/npm/v/@brikcss/starter-module.svg?style=for-the-badge
[npm-downloads-img]: https://img.shields.io/npm/dm/@brikcss/starter-module.svg?style=for-the-badge
[build-url]: https://github.com/brikcss/starter-module/tree/master
[build-img]: https://img.shields.io/travis/rust-lang/rust/master.svg?style=for-the-badge&label=master
[codacy-url]: https://www.codacy.com
[codacy-quality-img]: https://img.shields.io/codacy/grade/<enter-token-here>/master.svg?style=for-the-badge
[codacy-coverage-img]: https://img.shields.io/codacy/coverage/<enter-token-here>/master.svg?style=for-the-badge
[coveralls-url]: https://coveralls.io/github/brikcss/starter-module?branch=master
[coveralls-img]: https://img.shields.io/coveralls/github/brikcss/starter-module/master.svg?style=for-the-badge
[standardjs-url]: https://standardjs.com
[standardjs-img]: https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=for-the-badge
[prettier-url]: https://prettier.io
[prettier-img]: https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=for-the-badge
[semantic-url]: https://github.com/semantic-release/semantic-release
[semantic-img]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=for-the-badge
[commitizen-url]: http://commitizen.github.io/cz-cli
[commitizen-img]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=for-the-badge
[greenkeeper-url]: https://greenkeeper.io
[greenkeeper-img]: https://badges.greenkeeper.io/brikcss/starter-module.svg?style=for-the-badge
[license-url]: ./LICENSE.md
[license-img]: https://img.shields.io/npm/l/express.svg?style=for-the-badge -->

<p align="center">
    <strong>⚠️ IMPORTANT: Brikcss follows semantic versioning. This package is currently at major version zero, which means <a href="https://semver.org/#spec-item-4" target="_blank">"anything may change at any time", and it "should not be considered stable"</a>.</strong>
</p>

## About ❓

Starter project for a JS / Node module.

## Contributing ❤️

We ❤️❤️❤️ contributions of any kind! Whether it's bug reports, questions or feature requests, pull requests, and especially spreading some love about this project to your friends and co-workers!

**[Read our contributing guidelines](./CONTRIBUTING.md) and get involved to support this project. <br>_Or give us a ⭐ on GitHub!_**

## Environment and browser support ☘️

| Node | CLI | Browser | UMD | ES Module |
| :--: | :-: | :-----: | :-: | :-------: |
|  ✅  | ❌  |   ✅    | ✅  |    ✅     |

| Chrome | Firefox | Safari | Edge | IE  | iOS | Android |
| :----: | :-----: | :----: | :--: | :-: | :-: | :-----: |
|   ✅   |   ✅    |   ✅   |  ✅  | ❌  | ✅  |   ✅    |

## Install 📦

### NPM

```bash
npm install -D @brikcss/starter-module
```

### GitHub

Download the [latest release](https://github.com/brikcss/starter-module/releases/latest).

_Note: If you install from GitHub, remove `node_modules/@brikcss/starter-module` from any documented file paths._

## Quick Start 🏁

Get up and running in less than five minutes:

1.  Install:

    ```bash
    git clone git@github.com:brikcss/starter-module.git <directory>
    cd <directory> && rm -rf .git && git init
    git remote add origin <repo url>
    ```

2.  Modify/remove project files according to needs.

    -   Install `semantic-release` when ready (not installed by default due to security issues).
    -   Install shots/puppeteer when ready (not installed by default due to security issues).

3.  Configure Travis build environment:

    -   `NPM_TOKEN` -> NPM token.
    -   `GITHUB_TOKEN` -> GitHub token.
    -   `CODACY_PROJECT_TOKEN` -> Codacy project API token.
    -   `COVERALLS_REPO_TOKEN` -> Coveralls token.

## Configuration ⚙️

### `propertyName`

> Type: **`string`** **(required)** Default: `default` Options: `'one'`, `'two'`

Documentation goes here.

## API 🤖

### `Method()`

> -   **`arg1`** \{String\} _['default']_ _(required)_ Property description.
> -   **`arg2`** \{String\} _['prop']_ Property description.

## Credits 🙏

-   Credit goes to...

## License 📃

[See License](LICENSE.md).
