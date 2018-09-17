<template>
  <div>
    <navbar></navbar>
    <hero></hero>
    <horizontal-divider></horizontal-divider>  
    <purpose></purpose>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import Hero from '~/components/Hero.vue'
import Purpose from '~/components/Purpose.vue'
import HorizontalDivider from '~/components/HorizontalDivider.vue'

export default {
  components: {
    Navbar,
    Hero,
    Purpose,
    HorizontalDivider
  }
}
</script>

<style>

</style>

