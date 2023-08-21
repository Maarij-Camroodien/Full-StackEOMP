<template>
 <div>
 <Navbar/>
  <router-view/>
  <Footer/>
  </div>
</template>

<script>
import Footer from '@/components/FooterVue.vue'
import Navbar from '@/components/NavbarVue.vue';

export default {
  components :{
    Footer,
    Navbar
}
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}



</style>
