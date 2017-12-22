import { playMode } from 'common/js/conflg'
import { loadSearch, loadPlay, loadFavorite } from 'common/js/cache'
const state = {
  singer: {},
  playing: false,  //  是否播放
  fullScreen: false,  //   是否展开
  playlist: [],     //  播放列表
  sequenceList: [],  //  顺序列表
  mode: playMode.sequence,  // 播放模式
  currentIndex: -1,   // 当前播放下标
  disc: {},   //  首页歌单
  topList: {},  //  排行榜
  searchHistory: loadSearch(),  //  搜索历史
  playHistory: loadPlay(),     //  播放历史
  favoriteList: loadFavorite()             //  收藏列表
}
export default state

// const state = {
//   singer: {}
// }
// export default state
// // import {playMode} from 'common/js/config'
// // import {loadSearch, loadPlay, loadFavorite} from 'common/js/cache'
// //
// // const state = {
// //   singer: {},
// //   playing: false,
// //   fullScreen: false,
// //   playlist: [],
// //   sequenceList: [],
// //   mode: playMode.sequence,
// //   currentIndex: -1,
// //   disc: {},
// //   topList: {},
// //   searchHistory: loadSearch(),
// //   playHistory: loadPlay(),
// //   favoriteList: loadFavorite()
// // }
// //
// // export default state
