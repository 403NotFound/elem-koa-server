"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Router = require("koa-router");
const router = new Router();
router.get('/', (ctx) => {
    ctx.body = 'hello SB!';
});
exports.default = router.routes();
