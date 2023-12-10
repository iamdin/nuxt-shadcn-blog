<script lang="ts" setup>
import type { Post } from '@/types'
import { Github } from 'lucide-vue-next'

const { data: posts } = await useAsyncData('allPosts', () =>
  queryContent<Post>('posts').sort({ $sensitivity: 'accent' }).find(),
)
</script>

<template>
  <div class="space-y-7">
    <h1>Home Page</h1>
    <p>
      Nuxt starter template for your nuxt blog or personal site. Built with:
    </p>
    <ul class="my-6 list-disc space-y-2 pl-4">
      <li>
        <NuxtLink href="https://nuxt.com/"> Nuxt </NuxtLink>
      </li>
      <li>
        <NuxtLink href="https://content.nuxt.com/"> Nuxt Content </NuxtLink>
      </li>
      <li>
        <NuxtLink href="https://www.shadcn-vue.com/"> shadcn-ui-vue </NuxtLink>
      </li>
      <li>
        <NuxtLink href="https://tailwindcss.com/"> Tailwind CSS </NuxtLink>
      </li>
    </ul>

    <UiButton asChild>
      <a href="https://github.com/ChangoMan/nextjs-mdx-blog">
        <Github class="mr-1" /> Get the source code!
      </a>
    </UiButton>
  </div>

  <div class="mt-16">
    <h2>From the blog</h2>
    <p class="mt-2 leading-8">
      Blog posts are written with MDC and processed through Nuxt Content Module.
    </p>
  </div>
  <div
    class="mt-10 space-y-12 border-t border-gray-200 pt-10 dark:border-gray-700"
  >
    <PostCard v-for="post in posts" :key="post._id" :post="post" />
  </div>
</template>
