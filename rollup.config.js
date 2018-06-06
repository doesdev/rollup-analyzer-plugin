'use strict'

// how meta
import plugin from './module'
export default {
  input: 'module.js',
  output: {file: 'index.js', format: 'cjs'},
  plugins: [plugin()]
}
