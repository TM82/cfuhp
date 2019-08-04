<template>
  <div class="post">
    <div class="content">
      <img src='@/assets/logo.png' width=200px>
    </div>
    <div class="content">
      <h2>自分の課題を、自分ごとにしよう。</h2>
    </div>
    <div class="content">
      Post page
    </div>
  </div>
</template>

<script>
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'post',
  title: 'Code for Univ. - Post',
  components: {
    // HelloWorld
  }
}
</script>

<style lang="sass" scoped>
.post
  width: 90%
  margin: auto

.content
  margin: auto
  padding: 30px 0px

</style>
