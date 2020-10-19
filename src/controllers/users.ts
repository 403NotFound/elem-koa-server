import User from '../models/user'
import * as jwt from 'jsonwebtoken'
import { secret } from '../config'
import { userInfo } from '../interface/user'

class UserController {
  // 注册接口
  async create (ctx) {
    ctx.verifyParams({
      username: { type: 'string', required: true },
      password: { type: 'string', required: true }
    })
    const { username } = ctx.request.body
    const repeatedUser = await User.findOne({ username })
    if (repeatedUser) {
      ctx.throw(409, '用户已存在')
    }
    const user = await new User(ctx.request.body).save()
    ctx.body = user
  }
  // 登录接口
  async login (ctx) {
    ctx.verifyParams({
      username: { type: 'string', required: true },
      password: { type: 'string', required: true }
    })
    const user:any= await User.findOne(ctx.request.body)
    if (!user) { ctx.throw(401, '用户名或密码不正确') }
    const { _id, username } = user
    const token = jwt.sign({ _id, username }, secret, {expiresIn: '1d'})
    ctx.body = { token }
  }
  // 获取个人信息接口
  async userInfo (ctx) {
    const user:any= await User.find()
  }
}

export default new UserController()
