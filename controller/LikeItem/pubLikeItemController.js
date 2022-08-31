//发布动态的API
async function pubLikeItemController(ctx) {
    console.log("发布动态的数据",ctx.request.body)
    const { title, content,pubDate } = ctx.request.body //解构数据
    console.log("新动态的标题", title)
    console.log("新动态的内容", content)
    console.log("新动态的发表时间",pubDate)
    ctx.body = {
        code: 0,
        status:"动态文本部分上传成功"
    }
}

module.exports = {
    pubLikeItemController
}