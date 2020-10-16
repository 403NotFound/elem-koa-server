"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const tagSchema = new Schema({
    tags: { type: Array, required: true }
});
exports.default = model('Tag', tagSchema);
