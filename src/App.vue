<template>
  <!-- HEADER -->
  <HeaderComponent></HeaderComponent>
  <!-- SECTION -->
  <section>
    <div class="inner">
      이미지 준비중입니다.
    </div>
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
