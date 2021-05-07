<template>
  <li :style="{backgroundColor: bgColor}" @mouseenter="handleEnter(true)" @mouseleave="handleEnter(false)">
    <label>
      <input type="checkbox" v-model="todo.complete" />
      <span>{{todo.title}}</span>
    </label>
    <button class="btn btn-danger" v-show="isShow" @click="deleteItem">删除</button>
  </li>
</template>

<script>
import PubSub from 'pubsub-js'

export default {
  props: {
    todo: Object,
    index: Number
    // yc003: 改为用PubSub，不需要deleteTodo
    // deleteTodo: Function
  },
  data () {
    return {
      bgColor: 'white',
      isShow: false
    }
  },
  methods: {
    handleEnter (isEnter) {
      if (isEnter) {
        this.bgColor = 'lightgray'
        this.isShow = true
      } else {
        this.bgColor = 'white'
        this.isShow = false
      }
    },
    deleteItem () {
      // yc003: 改为用PubSub，不需要deleteTodo
      // const { todo, index, deleteTodo } = this
      const { todo, index } = this
      if (window.confirm(`确定删除${todo.title}?`)) {
        // yc003: 改为用PubSub，不需要deleteTodo
        // deleteTodo(index)
        PubSub.publish('deleteTodo', index)
      }
    }
  }
}
</script>

<style>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>
