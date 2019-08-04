<template>
  <div class="event">
    <HelloWorld msg="This is HomePage of Code for University !!"/>
    <button class="btn btn-primary">test</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'event',
  components: {
    HelloWorld
  }
}
</script>
