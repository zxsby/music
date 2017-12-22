/**
 * Created by Administrator on 2017/12/13.
 */
import { commonParams } from './conflg'
import axios from 'axios'

export function getLyric (mid) {
  const url = '/api/lyric'
  const data = Object.assign({}, commonParams, {
    songmid: mid,
    pcachetime: +new Date(),
    platform: 'yqq',
    hostUin: 0,
    needNewCode: 0,
    g_tk: 67232076,
    format: 'json'
  })
  return axios.get(url, {params: data}).then((res) => {
    return Promise.resolve(res.data)
  })
}
// 'g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&new_format=1&pic=500&disstid=3600519096&type=1&json=1&utf8=1&onlysong=0&picmid=1&nosign=1&song_begin=0&song_num=15&_=1513225801633'
//
// 'g_tk=5381&inCharset=utf-8&outCharset=utf-8&notice=0&format=json&disstid=3600519096&uin=0&platform=h5&needNewCode=1&new_format=1&pic=500&type=1&json=1&utf8=1&onlysong=0&picmid=1&nosign=1&song_begin=0&song_num=15&jsonpCallback=__jp2'
