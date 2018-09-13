// State management
import store from '../state/store'

// Layout
import DashboardLayout from '../components/Dashboard/Layout/DashboardLayout.vue'
import AuthLayout from '../components/Auth/Layout/AuthLayout.vue'

// GeneralViews
import NotFound from '../components/GeneralViews/NotFoundPage.vue'

// Auth
import Login from 'src/components/Auth/Views/Login.vue'

// Admin pages
import Overview from 'src/components/Dashboard/Views/Overview.vue'
import UserProfile from 'src/components/Dashboard/Views/UserProfile.vue'
import Notifications from 'src/components/Dashboard/Views/Notifications.vue'
import Icons from 'src/components/Dashboard/Views/Icons.vue'
import Maps from 'src/components/Dashboard/Views/Maps.vue'
import Typography from 'src/components/Dashboard/Views/Typography.vue'
import TableList from 'src/components/Dashboard/Views/TableList.vue'

const routes = [
  {
    path: '/login',
    redirect: '/auth/login'
  },
  {
    path: '/auth',
    component: AuthLayout,
    redirect: '/auth/login',
    children: [
      {
        path: 'login',
        name: 'login',
        component: Login,
        beforeEnter (routeTo, routeFrom, next) {
          // If the user is already logged in
          if (store.getters['auth/loggedIn']) {
            // Redirect to the home page instead
            next({ name: 'overview' })
          } else {
            // Continue to the login page
            next()
          }
        }
      }
    ]
  },
  {
    path: '/',
    component: DashboardLayout,
    redirect: '/admin/overview'
  },
  {
    path: '/admin',
    component: DashboardLayout,
    redirect: '/admin/stats',
    beforeEnter (routeTo, routeFrom, next) {
      // If a guest user
      if (!store.getters['auth/loggedIn']) {
        // Redirect to the login page instead
        next({ name: 'login' })
      } else {
        // Continue to the overview pages
        next()
      }
    },
    children: [
      {
        path: 'overview',
        name: 'overview',
        component: Overview
      },
      {
        path: 'stats',
        name: 'stats',
        component: UserProfile
      },
      {
        path: 'notifications',
        name: 'notifications',
        component: Notifications
      },
      {
        path: 'icons',
        name: 'icons',
        component: Icons
      },
      {
        path: 'maps',
        name: 'maps',
        component: Maps
      },
      {
        path: 'typography',
        name: 'typography',
        component: Typography
      },
      {
        path: 'table-list',
        name: 'table-list',
        component: TableList
      }
    ]
  },
  { path: '*', component: NotFound }
]

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes
