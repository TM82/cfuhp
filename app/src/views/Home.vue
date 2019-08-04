<template>
  <div class="home">
    <HelloWorld msg="This is HomePage of Code for University !!"/>
    <button class="btn btn-primary">test</button>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  title: 'Code for Univ.',
  components: {
    HelloWorld
  }
}
</script>
