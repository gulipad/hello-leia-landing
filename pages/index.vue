<template>
  <div>
    <navbar></navbar>
    <hero></hero>
    <horizontal-divider></horizontal-divider>  
    <purpose id="purpose"></purpose>
    <horizontal-divider></horizontal-divider>  
    <methodology id="methodology"></methodology>
    <horizontal-divider></horizontal-divider>
    <projects id="projects"></projects>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import Hero from '~/components/Hero.vue'
import Purpose from '~/components/Purpose.vue'
import HorizontalDivider from '~/components/HorizontalDivider.vue'
import Methodology from '~/components/Methodology.vue'
import Projects from '~/components/Projects.vue'

export default {
  components: {
    Navbar,
    Hero,
    Purpose,
    HorizontalDivider,
    Methodology,
    Projects
  }
}
</script>

<style>

</style>

