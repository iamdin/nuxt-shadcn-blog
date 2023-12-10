<script lang="ts" setup>
import { MoonStar, Sun } from "lucide-vue-next";

const colorMode = useColorMode();
const setPreference = () => {
  if (colorMode.preference === "dark") {
    colorMode.preference = "light";
  } else {
    colorMode.preference = "dark";
  }
};
</script>

<template>
  <UiButton variant="ghost" class="w-9 px-0" @click="setPreference">
    <Sun
      class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
    />
    <MoonStar
      class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
    />
  </UiButton>
</template>
