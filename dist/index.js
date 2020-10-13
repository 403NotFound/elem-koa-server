"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Koa = require("koa");
const app = new Koa();
app.use((ctx) => {
    ctx.body = 'hello';
});
app.listen(3000);
console.log('server is running on port 3000');
