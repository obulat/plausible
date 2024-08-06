import { fileURLToPath } from 'node:url'
import { expect, it } from 'vitest'

import { setup, $fetch } from '@nuxt/test-utils'
import { parsePageOptions } from './test_utils'

await setup({
  rootDir: fileURLToPath(new URL('../playground', import.meta.url)),
  nuxtConfig: {},
})

it('default options', async () => {
  const page = await $fetch('/')

  const options = parsePageOptions(page)
  expect(options.enabled).toEqual(true)
  expect(options.hashMode).toEqual(false)
  expect(options.domain).toEqual('')
  expect(options.ignoredHostnames).toEqual(['localhost'])
  expect(options.ignoreSubDomains).toEqual(false)
  expect(options.trackLocalhost).toEqual(undefined)
  expect(options.apiHost).toEqual('https://plausible.io')
  expect(options.autoPageviews).toEqual(false)
  expect(options.autoOutboundTracking).toEqual(false)
  expect(options.logIgnoredEvents).toEqual(false)
})
