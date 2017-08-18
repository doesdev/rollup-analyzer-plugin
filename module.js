'use strict'

import analyzer from 'rollup-analyzer'
export default (opts) => {
  return {
    name: 'rollup-analyzer-plugin',
    ongenerate: ({bundle}) => {
      return analyzer(opts).formatted(bundle).then(console.log)
    }
  }
}
