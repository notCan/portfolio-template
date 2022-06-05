<template>
  <div class="footer w-full all-center text-black space-x-6">
    <div class="all-center space-x-6">
      <p>Contact Me</p>
      <a href="https://www.linkedin.com/in/candeve/">
        <img src="../assets/icons/linkedin.png" alt="linkedin" />
      </a>
      <a href="mailto:devecann@gmail.com">
        <img src="../assets/icons/gmail.png" alt="linkedin" />
      </a>
    </div>
    <div class="images all-center flex-row space-x-4">
      <p>Made with</p>
      <a href="https://v3.nuxtjs.org/"
        ><img src="../assets/images/nuxtjs.png" alt="nuxtjs"
      /></a>
      <a href="https://tailwindcss.com/"
        ><img src="../assets/images/tailwind.png" alt="tailwind"
      /></a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
}
</script>
