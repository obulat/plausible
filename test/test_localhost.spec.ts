import { fileURLToPath } from 'node:url'
import { describe, expect, it } from 'vitest'

import { setup, $fetch } from '@nuxt/test-utils'
import { parsePageOptions } from './test_utils'

describe('allow tracking localhost', async () => {
  await setup({
    rootDir: fileURLToPath(new URL('../playground', import.meta.url)),
    nuxtConfig: {
      plausible: {
        ignoredHostnames: [],
      },
    },
  })

  it('should ignore localhost', async () => {
    const page = await $fetch('/')

    const options = parsePageOptions(page)

    expect(options.ignoredHostnames).toEqual([])
    expect(options.trackLocalhost).toEqual(undefined)
  })
})
