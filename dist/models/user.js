"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const userSchema = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true, select: false }
});
exports.default = model('User', userSchema);
