<script type="text/jsx">
  import * as API from '../../api'
  export default {
    name: 'Menu',
    data () {
      return {
        menuList: []
      }
    },
    props: {
      isCollapse: {
        default: false,
        type: Boolean
      }
    },
    methods: {
      handleClickMenu ({path, name}) {
        this.$router.push(path || '/')
        this.$emit('set-menu-name', name)
      },
      renderMenu (list) {
        return list.map(item => {
          if (item.children) {
            return (
              <el-submenu index={item.id}>
                <template slot="title">
                  <i class="el-icon-menu"></i>
                  <span slot="title">
                    {item.name}
                  </span>
                </template>
                {this.renderMenu(item.children)}
              </el-submenu>
            )
          }
          return (
            <el-menu-item index={item.id} onClick={() => this.handleClickMenu(item)}>
              <i class="el-icon-menu"></i>
              <span slot="title">{item.name}</span>
            </el-menu-item>
          )
        })
      }
    },
    created () {
      API.getMenuList().then(({data}) => {
        this.menuList = data
      })
    },
    render () {
      const menuNode = this.renderMenu(this.menuList)
      return (
        <el-menu
          className="el-menu-vertical-demo"
          default-active="01"
          collapse={this.isCollapse}
          text-color="#555"
          active-text-color="#09DBE3">
          {menuNode}
        </el-menu>
      )
    }
  }
</script>

<style scoped lang="scss">
  .el-menu {
    height: calc(100vh - 60px);
    width: 100%;
  }
</style>