<template>
  <div class="page-height">
    <Title title="Technika náčiní"/>
    <NotReady/>
  </div>
</template>

<script>
import Title from '@/components/Title.vue'
import NotReady from '@/components/NotReady.vue'

export default {
  name: 'Technika Page',
  components: {
    Title,
    NotReady
  }
}
</script>
