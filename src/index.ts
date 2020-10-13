import * as Koa from 'koa'
import router from './routes'
import userRoute from './routes/users'
const app = new Koa()

app.use(router)
app.use(userRoute)


app.listen(3000)

console.log('server is running on port 3000')