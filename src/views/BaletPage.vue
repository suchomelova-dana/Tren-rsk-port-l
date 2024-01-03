<template>
  <div class="page-height">
    <Title title="Balet"/>
    <NotReady/>
  </div>
</template>


<script>
import Title from '@/components/Title.vue'
import NotReady from '@/components/NotReady.vue'

export default {
  name: 'Balet Page',
  components: {
    Title,
    NotReady
  }
}
</script>