<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <!-- yc001: @addTodo监听自定义事件，触发后执行addTodo方法 -->
      <!-- <TodoHeader :addTodo="addTodo" /> -->
      <!-- yc002: 改为用$on监听自定义事件 -->
      <!-- <TodoHeader @addTodo="addTodo" /> -->
      <TodoHeader ref="header" />
      <!-- yc003: 改为用PubSub -->
      <!-- <TodoList :todos="todos" :deleteTodo="deleteTodo" /> -->
      <TodoList :todos="todos" />
      <TodoFooter :clearCompletedTodos="clearCompletedTodos" :todos="todos" :selectAllTodos="selectAllTodos" />
    </div>
  </div>
</template>

<script>
import PubSub from 'pubsub-js'
import TodoHeader from './components/TodoHeader'
import TodoFooter from './components/TodoFooter'
import TodoList from './components/TodoList'
import StorageUtil from '@/util/StorageUtil'

export default {
  components: {
    TodoHeader,
    TodoFooter,
    TodoList
  },
  data () {
    return {
      // todos: JSON.parse(window.localStorage.getItem('todos_key') || '[]')
      todos: StorageUtil.readTodos()
    }
  },
  mounted () {
    // 给App绑定监听，不正确
    // this.$on('addTodo', this.addTodo)
    // 给TodoHeader绑定监听，正确
    this.$refs.header.$on('addTodo', this.addTodo)
    // yc003: 改为用PubSub订阅
    PubSub.subscribe('deleteTodo', (msg, index) => {
      this.deleteTodo(index)
    })
  },
  watch: {
    // deep watch
    todos: {
      deep: true,
      // handler: function (value) {
      //   // window.localStorage.setItem('todos_key', JSON.stringify(value))
      //   StorageUtil.saveTodos(value)
      // }
      // simplify it
      handler: StorageUtil.saveTodos
    }
  },
  methods: {
    addTodo (todo) {
      this.todos.unshift(todo)
    },
    deleteTodo (index) {
      this.todos.splice(index, 1)
    },
    clearCompletedTodos () {
      this.todos = this.todos.filter(t => !t.complete)
    },
    selectAllTodos (check) {
      this.todos.forEach(todo => { todo.complete = check })
    }
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
