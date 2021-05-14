<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <TodoHeader />
      <TodoList />
      <TodoFooter />
    </div>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader'
import TodoFooter from './components/TodoFooter'
import TodoList from './components/TodoList'

export default {
  components: {
    TodoHeader,
    TodoFooter,
    TodoList
  },
  mounted () {
    this.$store.dispatch('reqTodos')
  }
}
</script>

<style>
/*app*/
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
