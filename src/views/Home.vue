<template>
  <el-row :gutter="0" class="container">
    <el-col :span="colSpan" class="left">
      <div class="header" :class="{'hide-header': collapse}">
        <h5>{{logoText}}</h5>
        <i class="icon"
           :class="collapse ? 'el-icon-d-arrow-right' : 'el-icon-d-arrow-left'"
           @click="handleToggleMenuShow"></i>
      </div>
      <div class="menu">
        <Menu :isCollapse="collapse" @set-menu-name="setMenuName"/>
      </div>
    </el-col>
    <el-col :span="24 - colSpan" class="right">
      <div class="header">
        <h3>{{menuName}}</h3>
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
        colSpan: 4,
        logoText: 'Vue3.x',
        menuName: '首页'
      }
    },
    methods: {
      setMenuName (v) {
        this.menuName = v
      },
      handleToggleMenuShow () {
        this.collapse = !this.collapse
        this.colSpan = this.collapse ? 1 : 4
        this.logoText = this.collapse ? '' : 'Vue3.x'
      }
    },
    mounted () {
      console.log(this.$axios);
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
      transition: width 0.6s;
      .header {
        border-right: 1px solid $color-border;
        display: flex;
        justify-content: space-around;
        width: 100%;
        .icon, h5 {
          line-height: 57px;
        }
        .icon {
          font-size: 23px;
          cursor: pointer;
          color: #05999F;
        }
        h5 {
          color: #fff;
          font-size: 18px;
          font-weight: 400;
        }
      }
      .hide-header {
        justify-content: center;
      }
    }
    .right {
      .header {
        display: flex;
        align-content: center;
        padding: 0 15px;
        h3 {
          line-height: 57px;
          font-size: 25px;
          color: #2c3e50;
        }
      }
    }
  }
</style>