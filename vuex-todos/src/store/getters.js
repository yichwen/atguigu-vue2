export default {
  totalCount (state) {
    return state.todos.length
  },
  completedCount (state) {
    return state.todos.filter(t => t.complete).length
  },
  isAllSelected (state, getters) {
    return getters.totalCount !== 0 && getters.completedCount === getters.totalCount
  }
}
