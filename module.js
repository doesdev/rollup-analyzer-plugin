'use strict'

import analyzer from 'rollup-analyzer'
export default (opts) => {
  let log = (opts || {}).stdout ? console.log : console.error
  return {
    name: 'rollup-analyzer-plugin',
    ongenerate: ({bundle}) => {
      return analyzer(opts).formatted(bundle).then(log)
    }
  }
}
