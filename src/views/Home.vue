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
        <div class="wrapper">
          <router-view/>
        </div>
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
        logoText: 'Vue CLI',
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
        this.logoText = this.collapse ? '' : 'Vue CLI'
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
        transition: width 0.8s;
      .header {
        border-right: 1px solid $color-border;
        display: flex;
        justify-content: space-around;
        background-color: #fff;
        .icon, h5 {
          line-height: 57px;
        }
        .icon {
          font-size: 23px;
          cursor: pointer;
          color: #05999F;
        }
        h5 {
          color: #555;
          font-size: 18px;
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
          font-size: 30px;
          color: #2c3e50;
          font-weight: 300;
        }
      }
    }
    .content {
      /*background-color: #F6FAFF;*/
      background-color: $color-theme;
      height: calc(100vh - 60px);
      .wrapper {
        width: 85%;
        background-color: #e4f5ef;
        border-radius: 5px;
        margin: 0 auto;
        padding: 0 10px;
        height: calc(100vh - 80px);
        overflow-y: scroll;
      }
      .wrapper::-webkit-scrollbar {/*滚动条整体样式*/
        width: 5px;     /*高宽分别对应横竖滚动条的尺寸*/
        height: 1px;
      }
      .wrapper::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.4);
        background: #eee;
      }
      .wrapper::-webkit-scrollbar-track {/*滚动条里面轨道*/
        border-radius: 10px;
        background: #e4f5ef;
      }
    }
  }
</style>