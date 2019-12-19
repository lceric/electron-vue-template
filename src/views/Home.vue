<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div>
      <p>环境：{{ nodeEnv }}</p>
      <p>平台：{{ platform }}</p>
      <p>path：{{ path }}</p>
      <p>name: {{ name }}</p>
      <p>vue: {{ vue }}</p>
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from 'src/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data() {
    return {
      nodeEnv: process.env.NODE_ENV,
      platform: require('os').platform(),
      name: this.$route.name,
      path: this.$route.path,
      vue: require('vue/package.json').version
    }
  }
}
</script>
