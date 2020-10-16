import * as mongoose from 'mongoose'

const { Schema, model } = mongoose

const tagSchema = new Schema({
    tags: { type: Array, required: true }
})

export default model('Tag', tagSchema)
