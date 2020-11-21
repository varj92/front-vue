<template>
  <div id="app">
    <div class="navbar navbar-expand-lg navbar-light">
      <nav class="navbar navbar-expand-lg navbar-light">
        <!-- <router-link to="/">Home</router-link> | -->
        <router-link to="/listado">Listado</router-link>|
        <router-link to="/captura">Captura</router-link>|
      </nav>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>