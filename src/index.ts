import * as Koa from 'koa'
import router from './routes'
import userRoute from './routes/users'
import * as mongoose from 'mongoose'
import * as error from 'koa-json-error'
import * as parameter from 'koa-parameter'
import * as koaBody from 'koa-body'
import { db } from './config'


const app = new Koa()
// 链接数据库
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
  console.log('mongodb connected !');
})
mongoose.connection.on('error', console.error)

// 错误处理中间件
app.use(error({
  postFormat: (e, { stack, ...rest }) => process.env.NODE_ENV === 'production' ? rest : { stack, ...rest }
}))
// 路由中间件
app.use(router)
app.use(userRoute)

// 参数校验中间件
app.use(parameter(app))

// 解析请求参数及配置文件上传
app.use(koaBody())

app.listen(3000, () => {
  console.log('server is running on port 3000')
})
