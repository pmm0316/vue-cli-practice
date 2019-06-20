<template>
  <el-row :gutter="0" class="container">
    <el-col :span="3" class="left">
      <div class="header">
        header
      </div>
      <div class="menu">
        菜单
      </div>
    </el-col>
    <el-col :span="21" class="right">
      <div class="header">
        header
      </div>
      <main class="content">
        content
      </main>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    name: 'Home'
  }
</script>

<style scoped lang="scss">
  .container {
    .el-col {
      .header {
        height: 60px;
        background-color: $color-primary;
      }
    }
    .left {
      .header {
        border-right: 1px solid #05509D;
      }
    }
  }
</style>