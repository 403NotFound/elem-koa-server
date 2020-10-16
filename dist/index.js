"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Koa = require("koa");
const routes_1 = require("./routes");
const users_1 = require("./routes/users");
const tags_1 = require("./routes/tags");
const mongoose = require("mongoose");
const error = require("koa-json-error");
const parameter = require("koa-parameter");
const koaBody = require("koa-body");
const config_1 = require("./config");
const app = new Koa();
// 链接数据库
mongoose.connect(config_1.db, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('mongodb connected !');
});
mongoose.connection.on('error', console.error);
// 错误处理中间件
app.use(error({
    postFormat: (e, _a) => {
        var { stack } = _a, rest = __rest(_a, ["stack"]);
        return process.env.NODE_ENV === 'production' ? rest : Object.assign({ stack }, rest);
    }
}));
// 解析请求参数及配置文件上传,(必须在路由中间件之前)
app.use(koaBody());
// 路由中间件
app.use(routes_1.default);
app.use(users_1.default);
app.use(tags_1.default);
// 参数校验中间件
app.use(parameter(app));
app.listen(7001, () => {
    console.log('server is running on port 7001');
});
