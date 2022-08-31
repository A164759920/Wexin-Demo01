//引入service层服务
const { addCommentByOpenid
,DeleteComment} = require("../service/comment.service")

async function commentController(ctx) {
    //拿到openid
    const openid = ctx.state.openid;
    //解构出功能号 0为添加 1为删除
    const { funcSelect, comment } = ctx.request.body
    console.log("这是解构的数据", funcSelect, comment)
    //根据funcSelect的值调用service层服务
    switch (funcSelect) {
        case 0: {  //0:添加
            const res = await addCommentByOpenid(comment)
            if (res == 0) {
                ctx.body = {
                    code: 0,
                    status: "添加成功",
                    openid //发布评论者的openid
                }
            }
        } break;
        case 1: {  //1:删除
            const res = await DeleteComment()
            if (res == 0) {
                ctx.body = {
                    code: 0,
                    status:"删除成功"
                }
            }
        } break;
    }
}

module.exports = {
    commentController
}