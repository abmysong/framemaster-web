<template>
  <!-- HEADER -->
  <HeaderComponent></HeaderComponent>
  <!-- SECTION -->
  <section>
    <router-view></router-view>
  </section>
  <!-- FOOTER -->
  <FooterComponent></FooterComponent>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'
import FooterComponent from './components/FooterComponent.vue'

export default {
  components: {
    HeaderComponent,
    FooterComponent
  }
}
</script>
