<template>
  <ul>
    <li>id: {{ message.id }}</li>
    <li>title: {{ message.title }}</li>
    <li>content: {{ message.content }}</li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      messages: [],
      message: {
        id: '',
        title: '',
        content: ''
      }
    }
  },
  mounted() {
    const id = +this.$route.params.id
    setTimeout(() => {
      this.messages = [
        { id: 1, title: 'message001', content: 'message001 content' },
        { id: 2, title: 'message002', content: 'message002 content' },
        { id: 3, title: 'message003', content: 'message003 content' }
      ]
      this.message = this.messages.find(m => m.id === id)
    }, 1000)
  },
  watch: {
    // 路由路径发生了变化
    $route: function (value) {
      const id = +value.params.id
      this.message = this.messages.find(m => m.id === id)
    }
  }
}
</script>