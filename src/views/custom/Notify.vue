<template>
  <div>
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

<style scoped>

</style>