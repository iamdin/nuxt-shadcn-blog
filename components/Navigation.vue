<template>
  <nav>
    <NuxtLink href="/" class="nav-link"> Home </NuxtLink>
    <NuxtLink href="/about" class="nav-link"> About </NuxtLink>
  </nav>
</template>

<style lang="postcss">
.nav-link {
  @apply rounded-md px-6 py-2 hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none;
}
</style>
