/**
 * Date: 2019/6/23
 * Author: mingmingbuzai
 * Email: 847679250@qq.com
 * @Last Modified time: 2019/6/23
 */
import Notification from './function'
export default (Vue) => {
  // Vue.component(Notification.name, Notification)
  Vue.prototype.$notify = Notification
}
