<template>
  <div id="app">
    <div class="nav">
      <h3>Navigation using router-link (no error)</h3>
      <router-link to="/">Home</router-link> |
      <router-link to="/protected">Protected</router-link> |
      <router-link to="/login">Login</router-link>
    </div>
    <div class="nav">
      <h3>Navigation using router.push (error is fired)</h3>
      <a
        @click="$router.push({ path:'/' })"
        class="link mt-3 d-block mb-3"
      >Home</a> |
      <a
        @click="$router.push({ path: '/protected' })"
        class="link mt-3 d-block mb-3"
      >Protected</a> |
      <a
        @click="$router.push({ path: '/login' })"
        class="link mt-3 d-block mb-3"
      >Login</a>
    </div>
    <div class="nav">
      <h3>Navigation using router.push and catch the error (no error)</h3>
      <a
        @click="$router.push({ name:'home' }).catch((err) => {})"
        class="link mt-3 d-block mb-3"
      >Home</a> |
      <a
        @click="$router.push({ name: 'protected' }).catch((err) => {})"
        class="link mt-3 d-block mb-3"
      >Protected</a> |
      <a
        @click="$router.push({ name: 'login' }).catch((err) => {})"
        class="link mt-3 d-block mb-3"
      >Login</a>
    </div>
    <router-view />
  </div>
</template>
<script>

export default {
  name: 'home',
  methods: {
    log (err) {
      console.log(err)
    }
  }
}
</script>
<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;
    cursor: pointer;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
