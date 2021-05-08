<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input type="text" placeholder="enter the name you search" v-model="searchText" />
      <button @click="search">Search</button>
    </div>
  </section>
</template>

<script>
import PubSub from 'pubsub-js'

export default {
  data () {
    return {
      searchText: ''
    }
  },
  methods: {
    search () {
      const searchText = this.searchText.trim()
      if (!searchText) {
        return
      }
      PubSub.publish('search', searchText)
    }
  }
}
</script>

<style>
</style>
