<template>

<div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
  <header class="mdl-layout__header">
    <div class="mdl-layout__header-row">
      <!-- Title -->
      <span class="mdl-layout-title"><b>LOOPER</b><strong>Store</strong></span>
      <!-- Add spacer, to align navigation to the right -->
      <div class="mdl-layout-spacer"></div>
      <!-- Navigation. We hide it in small screens. -->
      <nav class="mdl-navigation mdl-layout--large-screen-only">
        <router-link to="/"><a class="mdl-navigation__link" href="">Home</a></router-link>
        <router-link to="/store"><a class="mdl-navigation__link" href="">Store</a></router-link>
      </nav>
    </div>
  </header>
  <div class="mdl-layout__drawer">
    <span class="mdl-layout-title"><b>LOOPER</b><strong>Store</strong></span>
    <nav @click="closeDrawer" class="mdl-navigation">
      <router-link to="/"><a class="mdl-navigation__link" href="">Home</a></router-link>
      <router-link to="/store"><a class="mdl-navigation__link" href="">Store</a></router-link>
    </nav>
  </div>
  <main class="mdl-layout__content">
    <div class="page-content"><!-- Your content goes here --></div>
  </main>
</div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    closeDrawer(e) {
      $(".mdl-layout__drawer").toggleClass("is-visible");
      $(".mdl-layout__obfuscator").toggleClass("is-visible");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

header {
  background-color: rgba(0, 0, 0, 0.95) !important;
  position: fixed;
  z-index: 10;
}
.mdl-layout__drawer {
  z-index: 11;
  position: fixed;
}

b {
  font-weight: bold;
}
strong {
    color: #DC004E
}

</style>
