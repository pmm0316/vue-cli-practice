/**
 * Date: 2019/6/29
 * Author: mingmingbuzai
 * Email: 847679250@qq.com
 * @Last Modified time: 2019/6/29
 */
import Notify from './NF-Notify.vue'

export default {
  extends: Notify,
  data () {
    return {
      offsetScreen: 0,
      duration: 4000,
      elHeight: 0
    }
  },
  computed: {
    style () {
      return {
        right: '20px',
        top: `${this.offsetScreen}px`
      }
    }
  },
  methods: {
    setTimer () {
      if (this.duration) {
        this.timer = setTimeout(() => {
          this.visible = false
        }, this.duration)
      }
    },
    clearTimer () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
    },
    /**
     * 动画结束后
     */
    afterLeave () {
      this.$emit('closed')
    },
    afterEnter () {
      this.elHeight = this.$el.offsetHeight
    },
    /**
     * 关闭按钮
     */
    handleClose () {
      this.$emit('close')
    }
  },
  mounted () {
    // 设置定时器 自动关闭提示框
    this.setTimer()
  }
}