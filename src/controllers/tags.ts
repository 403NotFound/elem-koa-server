import Tag from '../models/tag'
import { tagInfo } from '../interface/user'

class TagController {
    // 新增标签接口
    async create (ctx) {
        ctx.verifyParams({
            tag: { type: 'string', required: true }
        })
        let tagArr = []
        const { tag } = ctx.request.body
        const tags:(tagInfo | any) = await Tag.find()
        if (tags.length == 0) {
            // 数据库中还未添加数据
            tagArr.push(tag)
            const res = await new Tag({
                tags: tagArr
            }).save()
            ctx.body = res
        } else {
            // 数据库中已存在标签数据对象
            tagArr = tags[0].tags
            if (!tagArr.includes(tag)) {
                tagArr.push(tag)
                const res = await Tag.findByIdAndUpdate('5f895f359b6df15260bf28bf', {
                    tags: tagArr
                })
                ctx.body = tagArr
            }
        }
    }
    async find (ctx) {
        const tags = await Tag.find()
        ctx.body = tags
    }
}

export default new TagController()
