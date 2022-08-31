//导入service
const { deleteLikeItem } = require('../../service/likeItem.service')
async function delLikeItemController(ctx) {
    
    const filenames = [] //待删除的文件数组
    const res = await deleteLikeItem(filenames)
    console.log("请求删除动态结果", res)
    if (res) {
        ctx.body = {
            code: 0,
            status: "删除动态成功",
            
        }
    }
}
module.exports = {
    delLikeItemController
}