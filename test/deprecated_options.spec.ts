import { describe, expect, it } from 'vitest'
import { $fetch, setup } from '@nuxt/test-utils'
import { fileURLToPath } from 'node:url'
import { parsePageOptions } from './test_utils'

describe('deprecated option', async () => {
  await setup({
    rootDir: fileURLToPath(new URL('../playground', import.meta.url)),
    nuxtConfig: {
      plausible: {
        trackLocalhost: true,
      },
    },
  })

  it('should ignore localhost', async () => {
    const page = await $fetch('/')

    const options = parsePageOptions(page)

    expect(options.ignoredHostnames).toEqual([])
    expect(options.trackLocalhost).toEqual(true)
  })
})
