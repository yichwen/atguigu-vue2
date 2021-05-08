<template>
  <div>
    <ul>
      <li v-for="(news, index) in newsList" :key="index">{{news}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      newsList: [
        'news1',
        'news2',
        'news3'
      ]
    }
  }
}
</script>