//模拟点赞服务

async function searchAppreciateByOpenid(openid) {
    console.log("查询ID", openid)
    //返回一个对象包括点赞数和该ID是否已点赞
    const res = {
        flag: true,
        AppreciateNum: 15,
    }
    console.log("查询点赞状态", res)
    return res
}

async function addAppreciateByOpenid(openid) {
    console.log("点赞ID", openid)
    return true

}

async function cancelAppreciateByOpenid(openid) {
    console.log("取消点赞ID", openid)
    return true

}

module.exports = {
    searchAppreciateByOpenid,
    addAppreciateByOpenid,
    cancelAppreciateByOpenid
}