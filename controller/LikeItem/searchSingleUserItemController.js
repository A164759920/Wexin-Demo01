//查阅指定用户的动态，采用分页查询的方式

//导入service
const { getlikeItemByIdAndPage } = require("../../service/likeItem.service")

async function searchSingleUserItemController(ctx) {
    //解构出数据
    const { openid, pageNum, pageSize } = ctx.request.body
    const res = getlikeItemByIdAndPage(openid, pageNum, pageSize)
    console.log("查询返回数", res.length)
    ctx.body = {
        code: 0,
        status: "分页查询成功",
        data: {
            likeItem: res
        }
    }

}

module.exports = {
    searchSingleUserItemController
}