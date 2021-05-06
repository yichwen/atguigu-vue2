<template>
  <div>
    <p class="msg">{{msg}}</p>
  </div>
</template>

<script>
// 配置对象(与Vue一致)
export default {
  data () { // 必须写函数
    return {
      msg: 'Hello Vue Component'
    }
  }
}
</script>

<style>
.msg {
  color: red;
  font-size: 30px;
}
</style>
