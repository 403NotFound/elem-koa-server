"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../models/user");
const jwt = require("jsonwebtoken");
const config_1 = require("../config");
class UserController {
    // 注册接口
    async create(ctx) {
        ctx.verifyParams({
            username: { type: 'string', required: true },
            password: { type: 'string', required: true }
        });
        const { username } = ctx.request.body;
        const repeatedUser = await user_1.default.findOne({ username });
        if (repeatedUser) {
            ctx.throw(409, '用户已存在');
        }
        const user = await new user_1.default(ctx.request.body).save();
        ctx.body = user;
    }
    // 登录接口
    async login(ctx) {
        console.log(ctx.state);
        ctx.verifyParams({
            username: { type: 'string', required: true },
            password: { type: 'string', required: true }
        });
        const user = await user_1.default.findOne(ctx.request.body);
        if (!user) {
            ctx.throw(401, '用户名或密码不正确');
        }
        const { _id, username } = user;
        const token = jwt.sign({ _id, username }, config_1.secret, { expiresIn: '1d' });
        ctx.body = { token };
    }
    // checkOwner
    checkOwner() { }
    //update
    update() { }
}
exports.default = new UserController();
