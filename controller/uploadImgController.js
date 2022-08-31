//导入service
const { changeFilenameAndSave } = require('../service/image.service')
const Path = require('path')
const fs = require('fs')
async function uploadImgController(ctx) {

    
        // console.log("我收到的数据", ctx.request.body) //formData中的数据
    // console.log("这是我解构的数据",picNumber)
    console.log("我收到的图片文件", ctx.request.files.pic)
    const { picNumber } = ctx.request.body //解构的数据
    const oldFilename = ctx.request.files.pic.newFilename  //默认生成的文件名
    const fileType = ctx.request.files.pic.mimetype.split('/')[1]  //文件类型
    console.log("文件类型",fileType)
    const newFilename = picNumber           //自定义生成的文件名
    const dirName = "openid" //需协商一个保存的文件夹名

    const res = await changeFilenameAndSave(oldFilename,newFilename,dirName,fileType)
    ctx.body = {
        msg: "我已成功收到文件",
        // newFilename: ctx.request.files.newFilename,
    }

}

module.exports = {
    uploadImgController
}