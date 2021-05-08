<template>
  <div>
    <div v-if="!repoUrl">loading</div>
    <div v-else>most star repo is <a :href="repoUrl">{{repoName}}</a></div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      repoUrl: '',
      repoName: ''
    }
  },
  mounted () {
    // 发ajax请求获取数据
    const url = `https://api.github.com/search/repositories?q=vu&sort=stars`
    // this.$http.get(url)
    //   .then(response => {
    //     const result = response.data
    //     // 最受欢迎的repo
    //     const repo = result.items[0]
    //     this.repoUrl = repo.html_url
    //     this.repoName = repo.name
    //   }, error => {
    //     console.log(error)
    //     alert('请求失败')
    //   })

    // 使用axios发送ajax请求
    axios.get(url)
      .then(response => {
        const result = response.data
        // 最受欢迎的repo
        const repo = result.items[0]
        this.repoUrl = repo.html_url
        this.repoName = repo.name
      })
      .catch(error => {
        console.log(error)
        alert('axios请求失败')
      })
  }
}
</script>

<style>
</style>
