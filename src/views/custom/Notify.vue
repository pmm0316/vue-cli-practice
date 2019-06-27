<template>
  <div class="container">
    <header class="header">
      <h5>全局组件实战</h5>
    </header>
    <el-divider></el-divider>
    <div class="item img-wrapper">
      <p class="title">用法</p>
      <div>
        <img src="../../assets/images/qjzj01.jpg">
      </div>
    </div>
    <el-divider></el-divider>
    <div class="item questions">
      <p class="title">Questions</p>
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
          duration: 0
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  .container {
    padding: 10px;
    .item {
      text-align: center;
      .title {
        font-size: 25px;
        padding-bottom: 10px;
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
    width: 69%;
    margin: 0 auto;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>