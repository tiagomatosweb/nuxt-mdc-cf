<template>
  <div>
    <MDC :value="value" />
  </div>
</template>

<script setup>
const value =`
\`\`\`ts [nuxt.config.ts]
export default defineNuxtConfig({
  modules: ['@nuxt/ui-pro']
})
\`\`\`
`
</script>
