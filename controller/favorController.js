//导入service
const { searchFavor,
    addFavor,
    cancelFavor } = require('../service/favor.service')

async function favorController(ctx) {
    console.log("收藏controller", ctx.request.body)
    //拿到功能号  0查询 1收藏 2取消收藏
    const { funcSelect } = ctx.request.body
    switch (funcSelect) {
        case 0: {
            //res 为true/false
            const res = await searchFavor()
            console.log("后端查询结果", res)
            if (res) {
                ctx.body = {
                    code: 0,
                    status: "查询成功",
                    flag: res
                }
            } else {
                ctx.body = {
                    code: 1,
                    status: '查询失败',
                }
            }

        } break;
        case 1: {
            const res = await addFavor()
            if (res) {
                ctx.body = {
                    code: 0,
                    status: "收藏成功"
                }
            } else {
                ctx.body = {
                    code: 1,
                    status: "收藏失败"
                }
            }
        } break;
        case 2: {
            const res = await cancelFavor()
            if (res) {
                ctx.body = {
                    code: 0,
                    status: "取消收藏成功"
                }
            } else {
                ctx.body = {
                    code: 1,
                    status: "取消收藏失败"
                }
            }
        } break;
    }

}

module.exports = {
    favorController
}