<template>
  <div id="app">
    <navigation></navigation>
    <hero></hero>
    <router-view></router-view>
    <site-footer></site-footer>
  </div>
</template>

<script>

import Hero from './components/Hero'
import Navigation from './components/Nav'
import SiteFooter from './components/Footer'

export default {
  name: 'app',
  components: {
    Hero,
    Navigation,
    SiteFooter
  }
}
</script>
