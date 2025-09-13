import {defineContentConfig, defineCollection} from '@nuxt/content';

export default defineContentConfig({
  collections: {
    snippets: defineCollection({
      type: 'page',
      source: 'snippets/*.md',
    }),
  },
});
