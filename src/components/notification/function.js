import Vue from 'vue'
import notification from './notification.js'

const NotifyConstructor = Vue.extend(notification)
const instances = []
let id = 0

const notify = (options) => {
  let {
    duration,
    onClose,
    ...rest
  } = options
  if (duration <= 0) {
    duration = 0
  }
  duration = duration === undefined ? 3000 : duration
  let instance = new NotifyConstructor({
    propsData: {
      ...rest
    },
    data () {
      return {
        duration: duration
      }
    }
  })
  instance.$mount()
  instance.id = `id_${id++}`
  let offsetScreen = 0
  instances.forEach(item => {
    offsetScreen = item.$el.offsetHeight + item.offsetScreen
  })
  offsetScreen += 16
  instance.offsetScreen = offsetScreen
  instances.push(instance)
  document.body.appendChild(instance.$el)
  instance.visible = true
  removeInstance(instance, onClose)
  return instance
}

const removeInstance = (instance, onClose) => {
  if (!instance) {
    return
  }
  instance.$on('closed', () => {
    let index = instances.findIndex(item => item.id === instance.id)
    let len = instances.length
    if (len > 1) {
      for (let i = index + 1; i < len; i++) {
        instances[i].offsetScreen = instances[i].offsetScreen - instance.selfHeight - 16
      }
    }
    instances.splice(index, 1)
    document.body.removeChild(instance.$el)
    instance.$destroy()
  })
  instance.$on('close', () => {
    instance.visible = false
    if (typeof onClose === 'function') {
      onClose()
    }
  })
}
export default notify