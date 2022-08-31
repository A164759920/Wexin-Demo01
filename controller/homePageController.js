// 功能实现
// 请求该路径后, 返回渲染该页面所需的各种信息
// 包括背景图片,扩展的个人信息，动态/回复/收藏的列表对象【待定】

//导入service服务
const { getlikeItemByIdAndPage } = require("../service/likeItem.service")

async function homePageController(ctx) {
    const openid = ctx.state.openid;
    const { pageNum, pageSize } = ctx.request.body
    ctx.body = {
        code: 0,
        status: 'success',
        data: {
            openid: ctx.state.openid,
            sub: 160, //关注数量
            fans: 161, //粉丝数量
            bkgPic: null, //背景图片 
        }
    }
}

module.exports = {
    homePageController
}