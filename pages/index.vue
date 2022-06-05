<template>
  <div class="all-center flex flex-col text-black space-y-4">
    <h1 class="text-secondary font-bold text-4xl py-12">
      Nuxtv3 Tailwindv3 Nuxt-Contentv2 Template
    </h1>
    <div class="flex flex-col space-y-6">
      <div>
        <h2 class="font-semibold text-xl">Setup</h2>
        <p class="pb-4">Make sure to install the dependencies</p>
        <div class="border-2 border-black rounded-lg w-48 all-center">
          <code>yarn</code>
        </div>
      </div>
      <div>
        <h2 class="font-semibold text-xl">Development Server</h2>
        <p class="pb-4">
          Start the development server on
          <a href="http://localhost:3000">http://localhost:3000</a>
        </p>
        <div class="border-2 border-black rounded-lg w-48 all-center">
          <code>yarn dev</code>
        </div>
      </div>
      <div>
        <h2 class="font-semibold text-xl">Production</h2>
        <p>Build the application for production</p>
        <div class="py-4 space-y-4">
          <div class="border-2 border-black rounded-lg w-48 all-center">
            <code>yarn build</code>
          </div>
          <div class="border-2 border-black rounded-lg w-48 all-center">
            <code>yarn generate</code>
          </div>
        </div>
        <p class="pb-4">Locally preview production build:</p>
        <div class="border-2 border-black rounded-lg w-48 all-center">
          <code>yarn preview</code>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Home',
}
</script>
