/**
 * Created by Administrator on 2017/12/14.
 */
import jsonp from '../common/js/jsonp'
import { commonParams, options } from './conflg'
export function getTopList () {
  const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg'
  const data = Object.assign({}, commonParams, {
    platform: 'h5',
    needNewCode: 1,
    g_tk: 5381
  })
  return jsonp(url, data, options)
}

export function getMusicList (topid) {
  const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg'
  const data = Object.assign({}, commonParams, {
    topid,
    platform: 'h5',
    needNewCode: 1,
    g_tk: 5381,
    page: 'detail',
    type: 'top',
    tpl: 3
  })
  return jsonp(url, data, options)
}
