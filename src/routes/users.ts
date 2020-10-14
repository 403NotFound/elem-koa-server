import * as Router from 'koa-router'
import Users from '../controllers/users'
import * as jwt from 'koa-jwt'
import { secret } from '../config'

const router = new Router({ prefix: '/users' })
const { create, login, checkOwner, update } = Users

// 对路由中的 token 进行检查
const auth = jwt({ secret })
// 注册
router.post('/', create)
// 登录
router.post('/login', login)
// 更新用户信息
router.patch('/:id', auth, checkOwner, update)


export default router.routes()