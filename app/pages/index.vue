<template>
    <div>
    <h1>Hello World</h1>
    <MDC :value="data" />
    <!-- <CodeSnippetLaravel/> -->
</div>
</template>
  
<script setup>
import { parseMarkdown } from '@nuxtjs/mdc/runtime'
const value =`
\`\`\`js
export default defineNuxtConfig({
  modules: ['@nuxt/ui-pro']
})
\`\`\`
`

const { data } = await useAsyncData('markdown', () => parseMarkdown(value))

// import CodeSnippetLaravel from '~/components/CodeSnippetLaravel.vue';
</script>
  