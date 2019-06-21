<template>
  <el-row :gutter="0" class="container">
    <el-col :span="colSpan" class="left">
      <div class="header">
        <h5>{{logoText}}</h5>
      </div>
      <div class="menu">
        <Menu :isCollapse="collapse"/>
      </div>
    </el-col>
    <el-col :span="24 - colSpan" class="right">
      <div class="header">
        <i class="icon"
           :class="collapse ? 'el-icon-d-arrow-right' : 'el-icon-d-arrow-left'"
           @click="handleToggleMenuShow"></i>
      </div>
      <main class="content">
        <router-view/>
      </main>
    </el-col>
  </el-row>
</template>

<script>
  import Menu from './menu/Menu'
  export default {
    name: 'Home',
    components: {
      Menu
    },
    data () {
      return {
        collapse: false,
        colSpan: 3,
        logoText: 'VUEADMIN'
      }
    },
    methods: {
      handleToggleMenuShow () {
        this.collapse = !this.collapse
        this.colSpan = this.collapse ? 1 : 3
        this.logoText = this.collapse ? '' : 'VUEADMIN'
      }
    }
  }
</script>

<style scoped lang="scss">
  .container {
    .el-col {
      .header {
        height: 60px;
        background-color: $color-theme;
      }
    }
    .left {
      .header {
        border-right: 1px solid $color-border;
        h5 {
          color: #fff;
          padding: 15px;
          font-size: 18px;
        }
      }
      .hide-header {
        width: 64px;
      }
    }
    .right {
      .header {
        display: flex;
        align-content: center;
        .icon {
          margin: 17px 0 10px 15px;
          font-size: 23px;
          cursor: pointer;
          color: #05999F;
        }
      }
    }
  }
</style>