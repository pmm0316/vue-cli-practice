<template>
  <transition name="fade" @after-leave="afterLeave" @after-enter="afterEnter">
    <div class="notification" :style="style" v-show="visible">
      <header class="header">
        <div class="left">
          <i class="icon" :class="typeClassNames" v-show="typeClassNames"></i>
          <span class="title">{{title}}</span>
        </div>
        <i class="el-icon-close" @click="handleClose"></i>
      </header>
      <div class="message">
        {{message}}
      </div>
    </div>
  </transition>
</template>

<script>
  const TYPE_CLASS_NAMES = {
    success: 'el-icon-success',
    error: 'el-icon-error'
  }
  export default {
    name: 'i-notification',
    data () {
      return {
        visible: false
      }
    },
    props: {
      title: {
        default: '标题',
        type: String
      },
      message: {
        default: '这是一个提示信息',
        type: String
      },
      type: {
        default: '',
        type: String
      }
    },
    computed: {
      style () {
        return {}
      },
      typeClassNames () {
        if (TYPE_CLASS_NAMES.hasOwnProperty(this.type)) {
          return TYPE_CLASS_NAMES[this.type]
        }
        return ''
      }
    },
    methods: {
      handleClose () {
        this.$emit('close')
      },
      afterLeave () {},
      afterEnter () {}
    },
    mounted () {}
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
      font-weight: bold;
      .left {
        .icon {
          margin-right: 10px;
        }
        .el-icon-success {
          color: $color-success;
        }
        .el-icon-error {
          color: $color-error;
        }
      }
    }
    .message {
      margin-top: 6px;
    }
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>