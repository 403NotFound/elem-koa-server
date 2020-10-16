"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Router = require("koa-router");
const users_1 = require("../controllers/users");
const jwt = require("koa-jwt");
const config_1 = require("../config");
const router = new Router({ prefix: '/users' });
const { create, login } = users_1.default;
// 对路由中的 token 进行检查
const auth = jwt({ secret: config_1.secret });
// 注册
router.post('/', create);
// 登录
router.post('/login', login);
exports.default = router.routes();
