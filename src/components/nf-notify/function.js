import Vue from 'vue'
import Notify from './nf-notify'

const NotifyConstructor = Vue.extend(Notify)

const instanceList = []
let id = 0

const notify = (options) => {
  let {
    onClose,
    duration,
    ...props
  } = options
  if (typeof parseFloat(duration) !== 'number') {
    console.error(new TypeError('duration属性期望是number类型'))
    return
  }
  if (duration < 0) {
    console.error(new RangeError('duration属性期望大于等于0的数'))
    return
  }
  let instance = new NotifyConstructor({
    propsData: {
      props
    },
    data () {
      return {
        duration: duration === undefined ? 3000 : duration
      }
    }
  })
  instance.$mount()
  instance.id = `id_${id++}`
  let offsetScreen = 0
  instanceList.forEach(item => {
    offsetScreen = item.offsetScreen + item.$el.offsetHeight
  })
  offsetScreen += 16
  instance.offsetScreen = offsetScreen
  instance.visible = true
  instanceList.push(instance)
  document.body.appendChild(instance.$el)
  removeInstance(instance, onClose)
  return instance
}

const removeInstance = (instance, onClose) => {
  if (!instance) {
    return
  }
  instance.$on('closed', () => {
    let index = instanceList.findIndex(item=> {
      return item.id === instance.id
    })
    instanceList.splice(index, 1)
    let len = instanceList.length
    for (let i = index; i < len; i++) {
      instanceList[i].offsetScreen = instanceList[i].offsetScreen - 16 - instance.elHeight

    }
    document.body.removeChild(instance.$el)
  })
  instance.$on('close', () => {
    instance.visible = false
    if (!onClose) {
      return
    }
    if (typeof onClose === 'function') {
      onClose()
      return
    }
    console.error(new TypeError('onClose属性期望是function类型'))
  })
}

export default notify