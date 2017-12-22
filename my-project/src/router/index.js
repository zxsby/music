import Vue from 'vue'
import Router from 'vue-router'
// import Recommend from '../components/recommend/recommend.vue'
// import Singer from '../components/singer/singer.vue'
// import Rank from '../components/rank/rank.vue'
// import Search from '../components/search/search.vue'
// import Singerdefault from '../components/singer-detail/singer-detail.vue'
// import Disc from '../components/disc/disc.vue'
// import TopList from '../components/top-list/top-list.vue'
// import UserCenter from '../components/user-center/user-center'
Vue.use(Router)
const UserCenter = (resolve) => {
  import('../components/user-center/user-center').then((recommend) => {
    resolve(recommend)
  })
}
const TopList = (resolve) => {
  import('../components/top-list/top-list.vue').then((recommend) => {
    resolve(recommend)
  })
}
const Disc = (resolve) => {
  import('../components/disc/disc.vue').then((recommend) => {
    resolve(recommend)
  })
}
const Singerdefault = (resolve) => {
  import('../components/singer-detail/singer-detail.vue').then((recommend) => {
    resolve(recommend)
  })
}
const Recommend = (resolve) => {
  import('../components/recommend/recommend.vue').then((recommend) => {
    resolve(recommend)
  })
}
const Singer = (resolve) => {
  import('../components/singer/singer.vue').then((recommend) => {
    resolve(recommend)
  })
}
const Rank = (resolve) => {
  import('../components/rank/rank.vue').then((recommend) => {
    resolve(recommend)
  })
}
const Search = (resolve) => {
  import('../components/search/search.vue').then((recommend) => {
    resolve(recommend)
  })
}
export default new Router({
  routes: [
    {path: '/', redirect: '/recommend'},
    {
      path: '/recommend',
      component: Recommend,
      children: [{
        path: ':id',
        component: Disc
      }]
    },
    {
      path: '/singer',
      component: Singer,
      children: [{
        path: ':id',
        component: Singerdefault
      }]
    },
    {
      path: '/rank',
      component: Rank,
      children: [{
        path: ':id',
        component: TopList
      }]
    },
    {
      path: '/search',
      component: Search,
      children: [{
        path: ':id',
        component: Singerdefault
      }]
    },
    {
      path: '/user',
      component: UserCenter
    }
  ]
})
