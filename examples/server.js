/*
 * @Author: 小神仙他爹老神经
 * @Date: 2022-11-27 20:11:41
 * @LastEditTime: 2022-12-23 22:57:12
 * @Description:
 *
 * Copyright (c) 2022 by 课书壬盘 kebook.net, All Rights Reserved.
 */
const express = require('express')
const bodyParser = require('body-parser')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const WebpackConfig = require('./webpack.config')

const app = express()
const compiler = webpack(WebpackConfig)

app.use(
  webpackDevMiddleware(compiler, {
    publicPath: '/__build__/',
    stats: {
      colors: true,
      chunks: false,
    },
  })
)

app.use(webpackHotMiddleware(compiler))

app.use(express.static(__dirname))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const router = express.Router()

router.get('/simple/get', function(req, res) {
  res.json({
    msg: `hello Bouncing`,
  })
})

router.get('/base/get', function(req, res) {
  res.json(req.query)
})

app.use(router)

const port = process.env.PORT || 8080
module.exports = app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}, Ctrl+C to stop`)
})
