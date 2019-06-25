<template>
  <div class="container">
    <header class="header">
      <h5>全局组件实战</h5>
    </header>
    <el-button @click="handleNotify">tip</el-button>
  </div>
</template>

<script>
  export default {
    name: 'Notify',
    methods: {
      handleNotify () {
        this.$notify({
          title: 'title',
          message: '下雨天真好！',
          duration: 0
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  .container {
    .header {
      h5 {
        font-size: 30px;
        text-align: center;
      }
    }
  }
</style>