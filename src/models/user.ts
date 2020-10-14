import * as mongoose from 'mongoose'

const { Schema, model } = mongoose

const userSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true, select: false }
})

export default model('User', userSchema)