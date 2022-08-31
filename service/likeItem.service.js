const Path = require('path')
const fs = require('fs')
//根据openid返回查询的结果
function getlikeItemByIdAndPage(openid, pageNum, pageSize) {
    //模拟数据
    const pic = [
        'http://124.221.249.177:8080/likePic/pic1.jpg',
        'http://124.221.249.177:8080/likePic/pic2.jpg',
        'http://124.221.249.177:8080/likePic/pic3.jpg',
        'http://124.221.249.177:8080/likePic/pic4.jpg',
        'http://124.221.249.177:8080/likePic/pic5.jpg',


    ]
    const res1 = [
        {
            subOpenid: openid, //发布者的ID
            subNickname: "桎梏.",
            subAvatar: "https://thirdwx.qlogo.cn/mmopen/vi_32/ficTmdLUSNV3muAQCvThMNoICLG6JHmuXp0uc297qZ9OibFHoQu2pPKb0HhB1QIl8Esyfxe1jiaLnOLYVFtgMxDKQ/132", //发布者的头像
            pubDate: "2022/08/05 16:51:54",
            title: "这是第一篇文章",
            content: "根据openid的定义，openid是用户在同一个小程序下的唯一表示，即同一个用户在不同的小程序下的openid是不同的，所以当你的appid变化之后，用户的openid就会发生变化，但当你的aapid不变AppSecret时openid是不会变的。 如果的appid改变了openid想继续使用的话，可以迁移替换用户的openid，",
            pic: pic,
        },
        {
            subOpenid: openid, //发布者的ID
            subNickname: "桎梏.", //发布者昵称
            subAvatar: "https://thirdwx.qlogo.cn/mmopen/vi_32/ficTmdLUSNV3muAQCvThMNoICLG6JHmuXp0uc297qZ9OibFHoQu2pPKb0HhB1QIl8Esyfxe1jiaLnOLYVFtgMxDKQ/132", //发布者的头像
            pubDate: "2022/08/20 16:51:54",
            title: "这是第二篇文章这是第二篇文章这",
            content: "根据openid的定义，openid是用户在同一个小程序下的唯一表示，即同一个用户在不同的小程序下的openid是不同的，所以当你的appid变化之后，用户的openid就会发生变化，但当你的aapid不变AppSecret时openid是不会变的。 如果的appid改变了openid想继续使用的话，可以迁移替换用户的openid，",
            pic: [],
        },
        {
            subOpenid: openid, //发布者的ID
            subNickname: "桎梏.", //发布者昵称
            subAvatar: "https://thirdwx.qlogo.cn/mmopen/vi_32/ficTmdLUSNV3muAQCvThMNoICLG6JHmuXp0uc297qZ9OibFHoQu2pPKb0HhB1QIl8Esyfxe1jiaLnOLYVFtgMxDKQ/132", //发布者的头像
            pubDate: "2022/08/22 16:51:54",
            title: "这是第三篇文章",
            content: "根据openid的定义，openid是用户在同一个小程序下的唯一表示，即同一个用户在不同的小程序下的openid是不同的，所以当你的appid变化之后，用户的openid就会发生变化，但当你的aapid不变AppSecret时openid是不会变的。 如果的appid改变了openid想继续使用的话，可以迁移替换用户的openid，",
            pic: [],
        },
        {
            subOpenid: openid, //发布者的ID
            subNickname: "桎梏.",
            subAvatar: "https://thirdwx.qlogo.cn/mmopen/vi_32/ficTmdLUSNV3muAQCvThMNoICLG6JHmuXp0uc297qZ9OibFHoQu2pPKb0HhB1QIl8Esyfxe1jiaLnOLYVFtgMxDKQ/132", //发布者的头像
            pubDate: "2022/08/05 16:51:54",
            title: "这是第四篇文章",
            content: "根据openid的定义，openid是用户在同一个小程序下的唯一表示，即同一个用户在不同的小程序下的openid是不同的，所以当你的appid变化之后，用户的openid就会发生变化，但当你的aapid不变AppSecret时openid是不会变的。 如果的appid改变了openid想继续使用的话，可以迁移替换用户的openid，",
            pic: pic,
        },
        {
            subOpenid: openid, //发布者的ID
            subNickname: "桎梏.", //发布者昵称
            subAvatar: "https://thirdwx.qlogo.cn/mmopen/vi_32/ficTmdLUSNV3muAQCvThMNoICLG6JHmuXp0uc297qZ9OibFHoQu2pPKb0HhB1QIl8Esyfxe1jiaLnOLYVFtgMxDKQ/132", //发布者的头像
            pubDate: "2022/08/22 16:51:54",
            title: "这是第五篇文章",
            content: "根据openid的定义，openid是用户在同一个小程序下的唯一表示，即同一个用户在不同的小程序下的openid是不同的，所以当你的appid变化之后，用户的openid就会发生变化，但当你的aapid不变AppSecret时openid是不会变的。 如果的appid改变了openid想继续使用的话，可以迁移替换用户的openid，",
            pic: [],
        },
        {
            subOpenid: openid, //发布者的ID
            subNickname: "桎梏.", //发布者昵称
            subAvatar: "https://thirdwx.qlogo.cn/mmopen/vi_32/ficTmdLUSNV3muAQCvThMNoICLG6JHmuXp0uc297qZ9OibFHoQu2pPKb0HhB1QIl8Esyfxe1jiaLnOLYVFtgMxDKQ/132", //发布者的头像
            pubDate: "2022/08/22 16:51:54",
            title: "这是第六篇文章",
            content: "根据openid的定义，openid是用户在同一个小程序下的唯一表示，即同一个用户在不同的小程序下的openid是不同的，所以当你的appid变化之后，用户的openid就会发生变化，但当你的aapid不变AppSecret时openid是不会变的。 如果的appid改变了openid想继续使用的话，可以迁移替换用户的openid，",
            pic: [],
        },
        {
            subOpenid: openid, //发布者的ID
            subNickname: "桎梏.", //发布者昵称
            subAvatar: "https://thirdwx.qlogo.cn/mmopen/vi_32/ficTmdLUSNV3muAQCvThMNoICLG6JHmuXp0uc297qZ9OibFHoQu2pPKb0HhB1QIl8Esyfxe1jiaLnOLYVFtgMxDKQ/132", //发布者的头像
            pubDate: "2022/08/22 16:51:54",
            title: "这是第七篇文章",
            content: "根据openid的定义，openid是用户在同一个小程序下的唯一表示，即同一个用户在不同的小程序下的openid是不同的，所以当你的appid变化之后，用户的openid就会发生变化，但当你的aapid不变AppSecret时openid是不会变的。 如果的appid改变了openid想继续使用的话，可以迁移替换用户的openid，",
            pic: [],
        },
        {
            subOpenid: openid, //发布者的ID
            subNickname: "桎梏.", //发布者昵称
            subAvatar: "https://thirdwx.qlogo.cn/mmopen/vi_32/ficTmdLUSNV3muAQCvThMNoICLG6JHmuXp0uc297qZ9OibFHoQu2pPKb0HhB1QIl8Esyfxe1jiaLnOLYVFtgMxDKQ/132", //发布者的头像
            pubDate: "2022/08/22 16:51:54",
            title: "这是第八篇文章",
            content: "根据openid的定义，openid是用户在同一个小程序下的唯一表示，即同一个用户在不同的小程序下的openid是不同的，所以当你的appid变化之后，用户的openid就会发生变化，但当你的aapid不变AppSecret时openid是不会变的。 如果的appid改变了openid想继续使用的话，可以迁移替换用户的openid，",
            pic: [],
        },
        {
            subOpenid: openid, //发布者的ID
            subNickname: "桎梏.", //发布者昵称
            subAvatar: "https://thirdwx.qlogo.cn/mmopen/vi_32/ficTmdLUSNV3muAQCvThMNoICLG6JHmuXp0uc297qZ9OibFHoQu2pPKb0HhB1QIl8Esyfxe1jiaLnOLYVFtgMxDKQ/132", //发布者的头像
            pubDate: "2022/08/22 16:51:54",
            title: "这是第九篇文章",
            content: "根据openid的定义，openid是用户在同一个小程序下的唯一表示，即同一个用户在不同的小程序下的openid是不同的，所以当你的appid变化之后，用户的openid就会发生变化，但当你的aapid不变AppSecret时openid是不会变的。 如果的appid改变了openid想继续使用的话，可以迁移替换用户的openid，",
            pic: [],
        },
        {
            subOpenid: openid, //发布者的ID
            subNickname: "桎梏.", //发布者昵称
            subAvatar: "https://thirdwx.qlogo.cn/mmopen/vi_32/ficTmdLUSNV3muAQCvThMNoICLG6JHmuXp0uc297qZ9OibFHoQu2pPKb0HhB1QIl8Esyfxe1jiaLnOLYVFtgMxDKQ/132", //发布者的头像
            pubDate: "2022/08/22 16:51:54",
            title: "这是第十篇文章",
            content: "根据openid的定义，openid是用户在同一个小程序下的唯一表示，即同一个用户在不同的小程序下的openid是不同的，所以当你的appid变化之后，用户的openid就会发生变化，但当你的aapid不变AppSecret时openid是不会变的。 如果的appid改变了openid想继续使用的话，可以迁移替换用户的openid，",
            pic: [],
        },
        {
            subOpenid: openid, //发布者的ID
            subNickname: "桎梏.", //发布者昵称
            subAvatar: "https://thirdwx.qlogo.cn/mmopen/vi_32/ficTmdLUSNV3muAQCvThMNoICLG6JHmuXp0uc297qZ9OibFHoQu2pPKb0HhB1QIl8Esyfxe1jiaLnOLYVFtgMxDKQ/132", //发布者的头像
            pubDate: "2022/08/22 16:51:54",
            title: "这是第十一篇文章",
            content: "根据openid的定义，openid是用户在同一个小程序下的唯一表示，即同一个用户在不同的小程序下的openid是不同的，所以当你的appid变化之后，用户的openid就会发生变化，但当你的aapid不变AppSecret时openid是不会变的。 如果的appid改变了openid想继续使用的话，可以迁移替换用户的openid，",
            pic: [],
        },
    ]
    //修正偏移量 【上数据库后另行修改】
    function fixOffset(start, pageNum, pageSize) {
        if (parseInt(pageNum) * parseInt(pageSize) > res1.length) { //若查询为最后一页
            return res1.length - start
        }
        else {
            return pageSize
        }
    }
    console.log("[Controller]", openid, pageNum, pageSize)
    const start = parseInt(pageNum - 1) * parseInt(pageSize) //求出起始地址
    if (start > res1.length - 1) {
        return []
    }
    const offset = fixOffset(start, pageNum, pageSize)   //修正偏移地址 暂定
    // console.log("起始", start)
    // console.log("偏移",offset)
    const res = []
    for (var i = start; i < start + offset; i++) {
        res.push(res1[i])
    }

    return res
}

//删除动态
async function deleteLikeItem() {
    //删除数据库中的数据
    console.log("删除动态文本完成")
    //根据文件名删除本地对应图片
    const filename = [] //待删除的文件名数组,从数据库中获得
    //循环delete本地图片【待优化】
    if (filename.length > 0) {
        aimPath = Path.join(__dirname, '../public/')
        filename.forEach((item, index) => {
            fs.unlink(aimPath + item, (err) => {
                if (err) {
                    console.log("第" + index + "张图片" + item + "删除失败", err)
                }
            })
        })
    }
    return true
}
module.exports = {
    getlikeItemByIdAndPage,
    deleteLikeItem
}