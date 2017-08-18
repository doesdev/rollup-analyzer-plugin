'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var analyzer = _interopDefault(require('rollup-analyzer'));

var module$1 = (opts) => {
  return {
    name: 'rollup-analyzer-plugin',
    ongenerate: ({bundle}) => {
      return analyzer(opts).formatted(bundle).then(console.log)
    }
  }
};

module.exports = module$1;
