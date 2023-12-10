<script lang="ts" setup>
import type { Post } from '~/types'
const route = useRoute()

const { data } = await useAsyncData(route.path, () =>
  queryContent<Post>(route.path).findOne(),
)
</script>
<template>
  <article>
    <h1>{{ data?.title }}</h1>
    <time
      v-if="data?.date"
      class="my-4 block text-sm text-zinc-400"
      :dateTime="data?.date"
    >
      {{ new Date(data?.date).toLocaleDateString() }}
    </time>
    <ContentRenderer v-if="data" :value="data"></ContentRenderer>
  </article>
</template>
