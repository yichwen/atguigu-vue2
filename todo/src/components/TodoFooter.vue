<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="isAllCheck" />
    </label>
    <span> <span>已完成 {{ completed }}</span> / 全部 {{ total }} </span>
    <button class="btn btn-danger" @click="clearCompletedItem" v-show="completed">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  props: {
    todos: Array,
    clearCompletedTodos: Function,
    selectAllTodos: Function
  },
  computed: {
    total () {
      return this.todos.length
    },
    completed () {
      // return this.todos.reduce((total, todo) => total + (todo.complete ? 1 : 0), 0)
      return this.todos.filter(t => t.complete).length
    },

    isAllCheck: {
      get () {
        return this.total !== 0 && this.completed === this.total
      },
      set (value) {
        this.selectAllTodos(value)
      }
    }
  },
  methods: {
    clearCompletedItem () {
      if (window.confirm('确定删除所有已完成的任务')) {
        this.clearCompletedTodos()
      }
    }
  }
}
</script>

<style>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>
