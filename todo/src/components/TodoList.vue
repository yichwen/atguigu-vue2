<template>
  <ul class="todo-main">
    <!-- yc003: 改为用PubSub，不需要deleteTodo -->
    <!-- <TodoItem v-for="(todo, index) in todos" :key="index" :index="index" :todo="todo" :deleteTodo="deleteTodo" /> -->
    <TodoItem v-for="(todo, index) in todos" :key="index" :index="index" :todo="todo" />
  </ul>
</template>

<script>
import TodoItem from './TodoItem'

export default {
  components: {
    TodoItem
  },
  props: {
    todos: {
      type: Array
    }
    // yc003: 改为用PubSub，不需要deleteTodo
    // deleteTodo: Function
  }
}
</script>

<style>
ul {
  margin-top: 16px;
  margin-bottom: 16px;
}
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>
