<template>
  <ul class="todo-main">
    <TodoItem v-for="(todo, index) in todos" :key="index" :index="index" :todo="todo" />
  </ul>
</template>

<script>
import { mapState } from 'vuex'
import TodoItem from './TodoItem'
import StorageUtil from '@/util/StorageUtil'

export default {
  components: {
    TodoItem
  },
  computed: {
    ...mapState(['todos'])
  },
  watch: {
    todos: {
      deep: true,
      handler: StorageUtil.saveTodos
    }
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
