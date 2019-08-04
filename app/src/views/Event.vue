<template>
  <div class="event">
    <HelloWorld msg="This is Event Page of Code for University !!"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'event',
  title: 'Code for Univ. - Event',
  components: {
    HelloWorld
  }
}
</script>
