'use strict'

import test from 'ava'
import { rollup } from 'rollup'
import plugin from './../index'
import { resolve, join } from 'path'
const fixtures = resolve(__dirname, 'fixtures')
const expectHeader = `
-----------------------------
Rollup File Analysis
-----------------------------
`.trim()
const headerLength = expectHeader.length

test(`plugin writes expected results`, async (assert) => {
  let writeTo = (r) => { results = r }
  let opts = {
    input: join(fixtures, 'bundle.js'),
    output: {file: join(fixtures, 'output.js'), format: 'cjs'},
    plugins: [plugin({writeTo})]
  }
  let results
  let bundle = await rollup(opts)
  await bundle.generate({format: 'cjs'})
  assert.is(results.substr(0, headerLength), expectHeader)
})
