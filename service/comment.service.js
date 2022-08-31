//模拟评论服务

//添加评论
function addCommentByOpenid(comment) {
    console.log("接收到的新评论", comment)
    return 0;
}

//删除评论
function DeleteComment() {
    console.log("请求删除评论")
    return 0;
}
module.exports = {
    addCommentByOpenid,
    DeleteComment
}