// content.config.ts
import { defineContentConfig, defineCollection } from '@nuxt/content'
import { z } from 'zod'

export default defineContentConfig({
  collections: {
    garden: defineCollection({
      type: 'page',
      source: 'garden/**',
      schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        date: z.string(),
        type: z.string(),
        tags: z.array(z.string()).optional()
      })
    })
  }
})
