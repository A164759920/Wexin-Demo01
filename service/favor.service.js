//模拟收藏服务
async function searchFavor() {
    console.log("查询收藏成功")
    return true
}

async function addFavor() {
    console.log("收藏成功")
    return true
}

async function cancelFavor() {
    console.log("取消收藏成功")
    return true
}

module.exports = {
    searchFavor,
    addFavor,
    cancelFavor
}