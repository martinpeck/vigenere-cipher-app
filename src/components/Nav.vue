<template>
  <nav id="navigation" class="navbar navbar-expand-sm navbar-light bg-light">

    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <a class="navbar-brand" href="#">
      <img id="logo" src="../assets/v-logo.png" />
    </a>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">

        <router-link tag="li" :to="{ name: 'home'}" class="nav-link" exact>
          <a class="nav-link">Home</a>
        </router-link>

         <router-link tag="li" :to="{ name: 'about'}" class="nav-link">
          <a class="nav-link">About</a>
        </router-link>

      </ul>

    </div>
  </nav>
</template>

<<script>
export default {
  name: 'navigation'
}
</script>

<style>
  #logo {
    width: 50px;
    height: 50px;
  }
</style>


