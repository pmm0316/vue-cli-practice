const $axios = window.axios

export function getMenuList () {
  return $axios.get('/api/menuList')
}