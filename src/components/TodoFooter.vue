<template>
  <footer>
     footer
     <button @click="clearAll">clearAll</button>
  </footer>
</template>

<script>
export default {
   name: 'TodoFooter',
   methods: {
     clearAll() {
       this.$emit('on:clear')
     }
   },

}
</script>

<style>

</style>