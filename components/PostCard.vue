<script lang="ts" setup>
import type { Post } from '@/types'

defineProps<{
  post: Post
}>()
</script>

<template>
  <article class="flex flex-col items-start justify-between">
    <div class="flex items-center gap-x-4 text-xs">
      <time :dateTime="post.date">
        {{ new Date(post.date).toLocaleDateString() }}
      </time>
    </div>
    <div class="group relative">
      <h3 class="mt-3 text-lg font-semibold leading-6">
        <NuxtLink class="link" :href="post._path">
          <span class="absolute inset-0" />
          {{ post.title }}
        </NuxtLink>
      </h3>
      <p class="mt-5 line-clamp-3 text-sm leading-6">{{ post.description }}</p>
    </div>
  </article>
</template>
