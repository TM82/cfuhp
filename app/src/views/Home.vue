<template>
  <div class="home">
    <div class="content">
      <img src='@/assets/logo.png' width=200px>
    </div>
    <div class="content">
      <h2>自分の課題を、自分ごとにしよう。</h2>
    </div>
    <div class="content">
      Code for Univ.(University)は大学に対してみなさんが抱いている想いを、
      想いのまま終わらせずITやネットワーキングを通じて実際の課題解決にコミットするためのシビックテックコミュニティです。
    </div>
  </div>
</template>

<script>
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  title: 'Code for Univ.',
  components: {
    // HelloWorld
  }
}
</script>

<style lang="sass" scoped>
.home
  width: 90%
  margin: auto

.content
  margin: auto
  padding: 30px 0px

</style>
