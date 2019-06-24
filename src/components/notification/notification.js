import Notification from './Notification'

export default {
  extends: Notification,
  data () {
    return {
      duration: 3000,
      offsetScreen: 0,
      selfHeight: 0
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
    clearTimer () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
    },
    createdTimer () {
      if (this.duration) {
        this.timer = setTimeout(() => {
          this.visible = false
        }, this.duration)
      }
    },
    afterLeave () {
      this.$emit('closed')
    },
    afterEnter () {
      this.selfHeight = this.$el.offsetHeight
    }
  },
  mounted () {
    this.createdTimer()
  },
  destroy () {
    this.clearTimer()
  }
}