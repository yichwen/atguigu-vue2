<template>
  <div>
    <ul>
      <li v-for="message in messages" :key="message.id">
        <router-link :to="`/home/message/detail/${message.id}`">{{ message.title }}</router-link>
        <button @click="pushShow(message.id)">push查看</button>
        <button @click="replaceShow(message.id)">replace查看</button>
      </li>
    </ul>
    <button @click="$router.back()">回退</button>
    <hr>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      messages: []
    }
  },
  mounted() {
    setTimeout(() => {
      this.messages = [
        { id: 1, title: 'message001', content: 'message001 content' },
        { id: 2, title: 'message002', content: 'message002 content' },
        { id: 3, title: 'message003', content: 'message003 content' }
      ];
    }, 1000)
  },
  methods: {
    pushShow (id) {
      this.$router.push(`/home/message/detail/${id}`)
    },
    replaceShow (id) {
      this.$router.replace(`/home/message/detail/${id}`)
    }
  }
}
</script>