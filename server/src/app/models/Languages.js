import { Schema, model } from 'mongoose';

const LanguageSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
});

export default model('Languages', LanguageSchema);
