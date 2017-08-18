'use strict'

// how meta
import plugin from './module'
export default {
  entry: 'module.js',
  dest: 'index.js',
  format: 'cjs',
  plugins: [plugin()]
}
