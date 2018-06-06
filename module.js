'use strict'

import analyzer from 'rollup-analyzer'
export default (opts) => {
  let log = (opts || {}).stdout ? console.log : console.error
  return {
    name: 'rollup-analyzer-plugin',
    ongenerate: ({bundle}) => {
      if (!bundle) return log(`rollup-analyzer: Support for rollup >= 0.60.0 is pending`)
      return analyzer(opts).formatted(bundle).then(log)
    }
  }
}
