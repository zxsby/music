/**
 * Created by Administrator on 2017/12/21.
 */
const axios=require('axios')
const express = require('express')
const app = express()
var apiRoutes = express.Router()
app.use('/api', apiRoutes)
const config =require('./config/index')
app.use(express.static("dist"));

app.get('/api/getDiscList', (req, res) => {
  var url = 'http://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg'
  axios.get(url, {
    headers: {
      referer: 'http://c.y.qq.com/',
      host: 'c.y.qq.com'
    },
    params:req.query
  }).then((response) => {
    res.json(response.data)
  }).catch((e) => {console.log(e)})
})
  app.get('/api/lyric', (req, res) => {
    var url = 'https://c.y.qq.com/lyric/fcgi-bin/fcg_query_lyric_new.fcg'
    axios.get(url, {
      headers: {
        referer: 'http://c.y.qq.com/',
        host: 'c.y.qq.com'
      },
      params:req.query
    }).then((response) => {
      var ret = response.data
      if(typeof ret === 'string') {
        var reg = /^\w+\(({[^()]+})\)$/
        var matches = ret.match(reg)
        if(matches){
          ret = JSON.parse(matches[1])
        }
      }
      res.json(ret)
    }).catch((e) => {console.log(e)})
  })
app.get('/api/getSongList', (req, res) => {
  var url = 'https://c.y.qq.com/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg'
  axios.get(url, {
    headers: {
      referer: 'http://y.qq.com/',
      host: 'y.qq.com'
    },
    params:req.query
  }).then((response) => {
    var ret = response.data
    console.log(typeof(ret))
    ret=JSON.parse(ret.slice(13,-1))
    //console.log(ret)
    res.json(ret)
  }).catch((e) => {console.log(e)})
})
var port = config.build.port
module.exports = app.listen(9000, function (err) {
  if(err) {
    console.log(err)
    return
  }
  console.log('start')
})

