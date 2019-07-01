<template>
  <transition name="fade" @after-leave="afterLeave" @after-enter="afterEnter">
    <div class="notification" :style="style" v-show="visible">
      <div class="item">
        <i class="icon type-icon el-icon-success"></i>
      </div>
      <div class="item">
        <h5 class="title">{{title}}</h5>
        <p class="message">{{message}}</p>
      </div>
      <div class="item">
        <i class="icon el-icon-close" @click="handleClose"></i>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'NF-Notify',
    props: {
      title: {
        default: '标题',
        type: String
      },
      message: {
        default: '这是一条提示消息',
        type: String
      }
    },
    data () {
      return {
        visible: false
      }
    },
    computed: {
      style () {
        return {}
      }
    },
    methods: {
      afterLeave () {},
      handleClose () {},
      afterEnter () {}
    },
    mounted () {}
  }
</script>

<style scoped lang="scss">
  .notification {
    display: flex;
    width: 330px;
    padding: 14px 26px 14px 13px;
    border-radius: 8px;
    box-sizing: border-box;
    border: 1px solid #EBEEF5;
    position: fixed;
    right: 20px;
    top: 16px;
    background-color: #fff;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,0.1);
    overflow: hidden;
    .item {
      position: relative;
      .title {
        font-weight: bold;
        font-size: 16px;
        color: #303133;
      }
      .message {
        font-size: 14px;
        line-height: 21px;
        margin: 6px 0 0 0;
        color: #606266;
        text-align: justify;
      }
      .type-icon {
        font-size: 21px;
        margin-right: 10px;
      }
      .el-icon-success {
        color: $color-success;
      }
      &:last-child {
        flex-grow: 1;
        position: absolute;
        top: 13px;
        right: 15px;
        cursor: pointer;
        color: #909399;
        font-size: 16px;
      }
    }
  }
  @keyframes slide {
    0% {
      right: -330px;
    }
  }
  .fade-enter-active {
    animation: slide 0.4s;
  }
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>