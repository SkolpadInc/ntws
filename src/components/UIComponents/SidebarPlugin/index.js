import Sidebar from './SideBar.vue'

const SidebarStore = {
  showSidebar: false,
  sidebarLinks: [
    {
      name: 'Users',
      icon: 'ti-panel',
      path: '/admin/users'
    },
    {
      name: 'Bills',
      icon: 'ti-user',
      path: '/admin/stats'
    },
    {
      name: 'Payments',
      icon: 'ti-view-list-alt',
      path: '/admin/table-list'
    },
    {
      name: 'Charts',
      icon: 'ti-text',
      path: '/admin/typography'
    },
    {
      name: 'Accounts',
      icon: 'ti-pencil-alt2',
      path: '/admin/icons'
    },
    {
      name: 'Logs',
      icon: 'ti-map',
      path: '/admin/maps'
    }
  ],
  displaySidebar (value) {
    this.showSidebar = value
  }
}

const SidebarPlugin = {

  install (Vue) {
    Vue.mixin({
      data () {
        return {
          sidebarStore: SidebarStore
        }
      }
    })

    Object.defineProperty(Vue.prototype, '$sidebar', {
      get () {
        return this.$root.sidebarStore
      }
    })
    Vue.component('side-bar', Sidebar)
  }
}

export default SidebarPlugin
