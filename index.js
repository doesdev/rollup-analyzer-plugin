'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var analyzer = _interopDefault(require('rollup-analyzer'));

var module$1 = (opts) => {
  let log = (opts || {}).stdout ? console.log : console.error;
  return {
    name: 'rollup-analyzer-plugin',
    ongenerate: ({bundle}) => {
      if (!bundle) return log(`rollup-analyzer: Support for rollup >= 0.60.0 is pending`)
      return analyzer(opts).formatted(bundle).then(log)
    }
  }
};

module.exports = module$1;
