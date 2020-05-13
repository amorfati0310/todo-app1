
<script>
import TodoHeader from '@/components/TodoHeader.vue';
import TodoForm from '@/components/TodoForm.vue';
import TodoList from '@/components/TodoList.vue';
import TodoFooter from '@/components/TodoFooter.vue';
export default {
  name: 'TodoApp',
  components: {
    TodoHeader,
    TodoForm, 
    TodoList,
    TodoFooter
  },
  data() {
    return {
      title: 'title',
      todoList: [],
    }
  },
  created () {
    this.fetchTodoList()
  },
  methods: {
    fetchTodoList() {
      const todoList = JSON.parse(localStorage.getItem('TODO')) || []
      this.todoList = todoList
    },
    saveTodoListToLocal(){
      localStorage.setItem('TODO', JSON.stringify([...this.todoList]))
    },
    addTodo(todo) {
      this.todoList.push(todo)
      this.saveTodoListToLocal()
    },
    removeTodo(todo) {
      this.todoList = this.todoList.filter(todoItem => todoItem !== todo)
      this.saveTodoListToLocal()
    },
    clearAll() {
      this.todoList = [];
      this.saveTodoListToLocal()
    }
  },
}
</script>

<template>
  <div>
    <TodoHeader :title="title"/>
    <TodoForm  @on:submit="addTodo"/>
    <TodoList  
      :todoList="todoList"
      @on:remove="removeTodo"
    />
    <TodoFooter @on:clear="clearAll"/>
  </div>
</template>

<style>

</style>