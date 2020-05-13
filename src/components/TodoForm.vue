<template>
  <form @submit.prevent="handleSubmit">
      <input 
        type="text"
        @change="handleChange"
        :value="inputText"
        >
      <button type="submit">+</button>
  </form>
</template>

<script>
export default {
   name: 'TodoForm',
   data() {
       return {
           inputText: ''
       }
   },
   methods: {
       handleChange(e) {
           this.inputText = e.target.value;
       },
       handleSubmit() {
           this.$emit('on:submit', this.inputText)
           this.resetForm();
       },
       resetForm() {
           this.inputText = '';
       }
   },
}
</script>

<style>

</style>