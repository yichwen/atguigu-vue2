import { ADD_TODO, DELETE_TODO, SELECTED_ALL_TODOS, CLEAR_COMPLETED_TODOS, RECEIVE_TODOS } from './mutation-types'
import StorageUtil from '@/util/StorageUtil'

export default {
  addTodo ({ commit }, todo) {
    commit(ADD_TODO, { todo })
  },
  deleteTodo ({ commit }, index) {
    commit(DELETE_TODO, { index })
  },
  selectAllTodo ({ commit }, selected) {
    commit(SELECTED_ALL_TODOS, { selected })
  },
  clearCompletedTodos ({ commit }) {
    commit(CLEAR_COMPLETED_TODOS)
  },
  reqTodos ({ commit }) {
    setTimeout(() => {
      const todos = StorageUtil.readTodos()
      commit(RECEIVE_TODOS, todos)
    }, 1000)
  }
}
