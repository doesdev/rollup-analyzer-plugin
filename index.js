'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var analyzer = _interopDefault(require('rollup-analyzer'));

'use strict';

var module$1 = (opts) => {
  let log = (opts || {}).stdout ? console.log : console.error;
  return {
    name: 'rollup-analyzer-plugin',
    ongenerate: ({bundle}) => {
      return analyzer(opts).formatted(bundle).then(log)
    }
  }
};

module.exports = module$1;
