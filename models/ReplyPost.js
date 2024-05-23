const mongoose = require('mongoose')

const replyPostSchema = mongoose.Schema(
  {
    reply: {
      type: String,
      required: true
    },
    idPost: {
      type: mongoose.Types.ObjectId,
      ref: 'Post'
    },
    idUser: {
      type: mongoose.Types.ObjectId,
      ref: 'User'
    }
  },
  {
    timestamps: true
  }
)

const ReplyPost = mongoose.model('ReplyPost', replyPostSchema)
module.exports = ReplyPost
