import * as Router from 'koa-router'

const router = new Router({ prefix: '/users' })

router.get('/', (ctx) => {
  ctx.body = 'users'
})

export default router.routes()