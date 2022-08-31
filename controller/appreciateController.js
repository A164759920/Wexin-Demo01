//引入service
const { searchAppreciateByOpenid,
    addAppreciateByOpenid,
    cancelAppreciateByOpenid
} = require('../service/appreciate.service')

async function appreciateController(ctx) {
    //拿到openid的值
    const openid = ctx.state.openid
    //拿到功能号
    const { funcSelect } = ctx.request.body
    //根据功能号进行操作 0查询 1点赞 2取消点赞
    switch (funcSelect) {
        //查询点赞状态
        case 0: {
            //成功返回true，否则返回false
            const res0 = await searchAppreciateByOpenid(openid)
            console.log("接收", res0.flag)
            const flag = res0.flag
            const AppreciateNum = res0.AppreciateNum
            // console.log("点赞查询解构的数据", res0.flag, res0.AppreciateNum)
            if (res0.flag) {
                ctx.body = {
                    code: 0,
                    status: "该openid已点赞",
                    flag,
                    AppreciateNum
                }
            }
            else {
                ctx.body = {
                    code: 1,
                    status: "该openid未点赞",
                    flag,
                    AppreciateNum
                }
            }
        } break;
        //点赞  【待完成】
        case 1: {
            const res1 = await addAppreciateByOpenid(openid)
            if (res1) {
                ctx.body = {
                    code: 0,
                    status: "点赞成功",
                }
            }
            else {
                ctx.body = {
                    code: 1,
                    status: "点赞失败"
                }
            }
        } break;
        //取消点赞
        case 2: {
            const res2 = await cancelAppreciateByOpenid(openid)
            if (res2) {
                ctx.body = {
                    code: 0,
                    status: "点赞成功",
                }
            }
            else {
                ctx.body = {
                    code: 1,
                    status: "点赞失败"
                }
            }
        } break;
    }
}

module.exports = {
    appreciateController
}