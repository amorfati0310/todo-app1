<template>
  <ul>
      <li 
        v-for="todo in todoList"
        :key="todo"
        >
        {{ todo }}
          <button @click="onRemove(todo)">RemoveTodo</button>    
        </li>
  </ul>
</template>

<script>
export default {
    name: 'TodoList',
    props: {
        todoList: {
            type: Array,
            required: true, 
        },
    },
    methods: {
        onRemove(todo) {
            this.$emit('on:remove', todo)
        }
    },
}
</script>

<style>

</style>