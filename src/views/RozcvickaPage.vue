<template>
  <div class="page-height">
    <Title title="Rozcvička"/>
    <NotReady/>
  </div>
</template>

<script>
import Title from '@/components/Title.vue'
import NotReady from '@/components/NotReady.vue'

export default {
  name: 'Rozcvicka Page',
  components: {
    Title,
    NotReady
  }
}
</script>
