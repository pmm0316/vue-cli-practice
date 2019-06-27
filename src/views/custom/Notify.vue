<template>
  <div class="container">
    <header class="header">
      <h5>全局组件实战</h5>
    </header>
    <el-divider></el-divider>
    <div class="item">
      <p class="title">背景</p>
      <p class="content first-content">
        在大型应用开发的时候，页面可以划分成很多部分。往往不同的页面，也会有相同的部分。例如可能会
      </p>
      <p class="content">
        有相同的头部导航。但是如果每个页面都独自开发，这无疑增加了我们开发的成本。所以我们会把页面的不</p>
      <p class="content">
        不同部分拆分成独立的组件，然后在同页面就可以共享这些组件，避免重复开发。
      </p>
    </div>
    <el-divider></el-divider>
    <div class="item img-wrapper">
      <p class="title">用法</p>
      <div>
        <img src="../../assets/images/qjzj01.jpg">
      </div>
    </div>
    <el-divider></el-divider>
    <div class="item">
      <p class="title">流行的UI框架</p>
      <p class="link">
        <el-link type="primary" href="https://element.eleme.io/#/zh-CN/component/notification" target="_blank">Element-ui</el-link>
        <el-link type="success" href="https://ant.design/components/notification-cn/" target="_blank">Antd</el-link>
      </p>
    </div>
    <el-divider></el-divider>
    <div class="item questions">
      <p class="title">Questions ?</p>
      <el-carousel :autoplay="false">
        <el-carousel-item v-for="(item, i) in questions" :key="item.title">
          <h3>{{i + 1}}. {{ item.content }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    <el-button @click="handleNotify">tip</el-button>
  </div>
</template>

<script>
  export default {
    name: 'Notify',
    data () {
      return {
        questions: [
          {
            title: 'question 1',
            content: 'v-model语法糖解析'
          },
          {
            title: 'question 2',
            content: 'v-model语法糖解析'
          }
        ]
      }
    },
    methods: {
      handleNotify () {
        this.$notify({
          title: 'title',
          message: '下雨天真好！',
          duration: -1
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  .container {
    padding: 10px;
    .item {
      margin: 0 auto;
      width: 797px;
      .title {
        font-size: 25px;
        padding-bottom: 10px;
      }
      .content {
        display: inline-block;
        text-align: left;
        line-height: 30px;
        color: $color-font;
      }
      .first-content {
        text-indent: 2em;
      }
      .link {
        .el-link {
          margin: 0 150px;
          font-size: 20px;
        }
      }
    }
    .header {
      h5 {
        font-size: 30px;
        text-align: center;
      }
    }
    .img-wrapper {
      margin-top: 25px;
    }
    .questions {}
  }
  .el-carousel{
    width: 100%;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
    text-align: center;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>