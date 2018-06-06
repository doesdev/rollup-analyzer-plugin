'use strict'

import test from 'ava'
import { rollup } from 'rollup'
import plugin from './index'

const opts = {
  entry: 'module.js',
  dest: 'index.js',
  format: 'cjs',
  plugins: [plugin()]
}

test(async (assert) => {
  await assert.notThrows(rollup(opts))
})
