<template>
  <div>
    <navbar></navbar>
    <hero></hero>
    <horizontal-divider></horizontal-divider>  
    <purpose></purpose>
    <horizontal-divider></horizontal-divider>  
    <methodology></methodology>
    <horizontal-divider></horizontal-divider>  
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import Hero from '~/components/Hero.vue'
import Purpose from '~/components/Purpose.vue'
import HorizontalDivider from '~/components/HorizontalDivider.vue'
import Methodology from '~/components/Methodology.vue'

export default {
  components: {
    Navbar,
    Hero,
    Purpose,
    HorizontalDivider,
    Methodology
  }
}
</script>

<style>

</style>

