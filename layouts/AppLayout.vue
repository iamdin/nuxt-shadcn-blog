<template>
  <header class="py-4">
    <Container>
      <div class="flex items-center justify-between py-6">
        <Navigation />
        <ModeToggle />
      </div>
    </Container>
  </header>
  <main>
    <Container class="prose-primary prose dark:prose-invert"
      ><slot
    /></Container>
  </main>
  <footer class="py-16">
    <Container>
      <p>
        Built by
        <NuxtLink class="link" href=""> Din </NuxtLink>
      </p>
    </Container>
  </footer>
</template>
