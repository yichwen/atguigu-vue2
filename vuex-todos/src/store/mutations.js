import { ADD_TODO, CLEAR_COMPLETED_TODOS, SELECTED_ALL_TODOS, DELETE_TODO, RECEIVE_TODOS } from './mutation-types'

export default {
  [ADD_TODO] (state, {todo}) {
    state.todos.unshift(todo)
  },
  [DELETE_TODO] (state, {index}) {
    state.todos.splice(index, 1)
  },
  [SELECTED_ALL_TODOS] (state, {selected}) {
    state.todos.forEach(todo => { todo.complete = selected })
  },
  [CLEAR_COMPLETED_TODOS] (state) {
    state.todos = state.todos.filter(t => !t.complete)
  },
  [RECEIVE_TODOS] (state, todos) {
    state.todos = todos
  }
}
