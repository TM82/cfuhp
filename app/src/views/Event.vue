<template>
  <div class="event">
    <div class="content">
      <img src='@/assets/logo.png' width=200px>
    </div>
    <div class="content">
      <h2>自分の課題を、自分ごとにしよう。</h2>
    </div>
    <div class="content">
      Event page
    </div>
  </div>
</template>

<script>
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'event',
  title: 'Code for Univ. - Event',
  components: {
    // HelloWorld
  }
}
</script>

<style lang="sass" scoped>
.event
  width: 90%
  margin: auto

.content
  margin: auto
  padding: 30px 0px

</style>
