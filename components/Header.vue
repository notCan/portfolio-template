<template>
  <nav class="header w-full flex flex-row justify-evenly items-center py-4">
    <img
      class="h-16 w-16"
      src="../static/favicon.ico"
      alt="notcapableofcan icon"
    />
    <ul>
      <li>
        <nuxt-link to="/" class="text-black">Home</nuxt-link>
      </li>
    </ul>
    <a href="https://github.com/Erebus-Software/v3-nuxt-template"
      ><img
        class="h-12 w-12"
        src="../assets/icons/github.png"
        alt="notcapableofcan icon"
    /></a>
  </nav>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style lang="postcss" scoped></style>
