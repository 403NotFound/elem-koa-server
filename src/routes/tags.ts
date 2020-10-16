import * as Router from 'koa-router'
import Tags from '../controllers/tags'

const router = new Router({ prefix: '/tags' })
const { create, find } = Tags

// 新增标签
router.post('/', create)
// 获取所有标签
router.get('/getTags', find)


export default router.routes()
