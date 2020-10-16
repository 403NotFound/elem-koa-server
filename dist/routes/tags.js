"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Router = require("koa-router");
const tags_1 = require("../controllers/tags");
const router = new Router({ prefix: '/tags' });
const { create, find } = tags_1.default;
// 新增标签
router.post('/', create);
// 获取所有标签
router.get('/getTags', find);
exports.default = router.routes();
