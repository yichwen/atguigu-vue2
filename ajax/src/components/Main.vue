<template>
  <div>
    <h2 v-if="firstView">输入用户名搜索</h2>
    <h2 v-if="loading">LOADING...</h2>
    <h2 v-if="errorMsg">{{ errorMsg }}</h2>
    <div class="row">
      <div v-for="(user, index) in users" :key="index" class="card">
        <a :href="user.url" target="_blank">
          <img :src="user.avatar_url" style="width: 100px" />
        </a>
        <p class="card-text">{{ user.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import PubSub from 'pubsub-js'
import axios from 'axios'

export default {
  data () {
    return {
      firstView: true,
      loading: false,
      // url, avatar_url, name
      users: null,
      errorMsg: ''
    }
  },
  mounted () {
    PubSub.subscribe('search', (msg, searchText) => {
      console.log(searchText)
      this.search(searchText)
    })
  },
  methods: {
    search (searchText) {
      const url = `https://api.github.com/search/users?q=${searchText}`
      this.firstView = false
      this.loading = true
      this.users = null
      this.errorMsg = ''
      // 使用axios发送ajax请求
      axios
        .get(url)
        .then((response) => {
          const result = response.data
          const users = result.items
          this.users = users.map(u => {
            return {
              url: u.html_url,
              avatar_url: u.avatar_url,
              name: u.login
            }
          })
          this.loading = false
        })
        .catch((error) => {
          console.log(error)
          this.errorMsg = 'axios请求失败'
          this.users = null
          this.loading = false
        })
    }
  }
}
</script>

<style>
.card {
  float: left;
  width: 33.333%;
  padding: 0.75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: 0.75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>
