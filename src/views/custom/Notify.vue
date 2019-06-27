<template>
  <div class="container">
    <h5>全局组件实战</h5>
    <el-button @click="handleNotify">tip</el-button>
  </div>
</template>

<script>
  export default {
    name: 'Notify',
    methods: {
      handleNotify () {
        this.$notify()
      }
    }
  }
</script>

<style scoped lang="scss">

</style>