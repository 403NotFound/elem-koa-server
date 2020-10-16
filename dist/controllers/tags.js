"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tag_1 = require("../models/tag");
class TagController {
    // 新增标签接口
    async create(ctx) {
        ctx.verifyParams({
            tag: { type: 'string', required: true }
        });
        let tagArr = [];
        const { tag } = ctx.request.body;
        const tags = await tag_1.default.find();
        if (tags.length == 0) {
            // 数据库中还未添加数据
            tagArr.push(tag);
            const res = await new tag_1.default({
                tags: tagArr
            }).save();
            ctx.body = res;
        }
        else {
            // 数据库中已存在标签数据对象
            tagArr = tags[0].tags;
            if (!tagArr.includes(tag)) {
                tagArr.push(tag);
                const res = await tag_1.default.findByIdAndUpdate('5f895f359b6df15260bf28bf', {
                    tags: tagArr
                });
                ctx.body = tagArr;
            }
        }
    }
    async find(ctx) {
        const tags = await tag_1.default.find();
        ctx.body = tags;
    }
}
exports.default = new TagController();
