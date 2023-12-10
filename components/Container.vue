<script lang="ts" setup>
import { cn } from "@/lib/utils";
</script>

<template>
  <div :class="cn($attrs.class ?? '', 'mx-auto max-w-2xl px-6 lg:max-w-4xl')">
    <slot />
  </div>
</template>
