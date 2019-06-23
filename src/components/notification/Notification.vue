<template>
  <div class="notification">
    <header class="header">
      <div class="left">
        <i class="icon el-icon-success"></i>
        <span class="title">{{title}}</span>
      </div>
      <i class="el-icon-close" @click="handleClose"></i>
    </header>
    <div class="message">
      {{message}}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'i-notification',
    props: {
      title: {
        default: '标题',
        type: String
      },
      message: {
        default: '这是一个提示信息',
        type: String
      }
    },
    methods: {
      handleClose () {}
    }
  }
</script>

<style scoped lang="scss">
  .notification {
    width: 330px;
    padding: 14px 26px 14px 13px;
    border-radius: 8px;
    box-sizing: border-box;
    border: 1px solid #EBEEF5;
    position: fixed;
    background-color: #fff;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,0.1);
    overflow: hidden;
    .header {
      display: flex;
      justify-content: space-between;
      .left {
        .icon {
          margin-right: 10px;
        }
        .el-icon-success {
          color: $color-success;
        }
      }
    }
    .message {
      margin-top: 6px;
    }
  }
</style>