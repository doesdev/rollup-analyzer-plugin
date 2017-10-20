# rollup-analyzer-plugin [![NPM version](https://badge.fury.io/js/rollup-analyzer-plugin.svg)](https://npmjs.org/package/rollup-analyzer-plugin)   [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)   [![Dependency Status](https://dependencyci.com/github/doesdev/rollup-analyzer-plugin/badge)](https://dependencyci.com/github/doesdev/rollup-analyzer-plugin)

> Analyze file sizes of rollup bundled imports

## rollup-analyzer

Rollup Analyzer gives you a quick look at what's taking up space in your bundle.

### Comes in three scrumptious flavors:

#### [rollup-analyzer-plugin](https://github.com/doesdev/rollup-analyzer-plugin)
Adding as a plugin to your rollup config or build script will print a well
formatted analysis to the console upon bundling.

#### [rollup-analyzer-config](https://github.com/doesdev/rollup-analyzer-config)
If using Rollup's CLI to bundle with no additonal config, pass
`-c node:rollup-analyzer-config` to print a well formatted analysis to your console.

#### [rollup-analyzer](https://github.com/doesdev/rollup-analyzer)
Full analysis module, giving you access to the complete analysis object or well
formatted analysis text for CI and build usage.

## Install

```sh
$ npm install --save-dev rollup-analyzer-plugin
```

## Usage

### usage from rollup config
```js
import analyze from 'rollup-analyzer-plugin'
const opts = {limit: 5, filter: [], root: __dirname}
export default {
  entry: 'module.js',
  dest: 'index.js',
  format: 'cjs',
  plugins: [analyze(opts)]
}
```

### usage from build script
```js
import { rollup } from 'rollup'
const opts = {limit: 5, filter: [], root: __dirname}
import analyze from 'rollup-analyzer-plugin'

rollup({
  entry: 'main.js',
  plugins: [analyze(opts)]
}).then(...)
```

### results
logged to console on rollup completion
```sh
-----------------------------
Rollup File Analysis
-----------------------------
bundle size: 1.146 MB
-----------------------------
file: \node_modules\html5-history-api\history.js
size: 38.502 KB
percent: 3.36%
dependents: 1
  - \app\modules\page.js
-----------------------------
file: \node_modules\pikaday\pikaday.js
size: 34.683 KB
percent: 3.03%
dependents: 1
  - \app\helpers\transformer.js
...
```

## Options

- **stdout** - *optional*
  - type: Boolean
  - default: `false`
  - description: Print to stdout (console.log) instead of stderr (console.error)
- **limit** - *optional*
  - type: Number
  - default: `null`
  - description: Limit number of files to output analysis of, sorted by DESC size
- **filter** - *optional*
  - type: Array | String
  - default: `null`
  - description: Filter to only show imports matching the specified name(s)
- **root** - *optional*
  - type: String
  - default: `process.cwd()`
  - description: Application directory, used to display file paths relatively

## License

MIT © [Andrew Carpenter](https://github.com/doesdev)
