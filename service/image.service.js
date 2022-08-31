//删除图片
//需传入删除的路径和删除的文件名数组
const { dir } = require('console')
const fs = require('fs')
const Path = require('path')
async function deleteImage(filenames,aimPath) {
    //循环delete本地图片【待优化】
    if (filenames.length > 0) {
        // aimPath = Path.join(__dirname, '../public/')
        filenames.forEach((item, index) => {
            fs.unlink(aimPath+item,(err)=>{
                if (err) {
                    console.log("第" + index + "个文件" + item + "删除失败", err)
                }
            })
        })
    }
    return true
}

//自定义文件名并保存到指定自定义静态资源文件夹
//旧文件名 新文件名 保存的文件夹名称 文件类型
async function changeFilenameAndSave(oldFilename, newFilename, dirname,fileType) {
    //静态资源文件夹目录
    const publicPath = Path.join(__dirname, '../public/')
    //先判断该文件夹名是否存在，不存在则创建一个
    if (fs.existsSync(publicPath+dirname)) {  //文件夹已存在
        console.log(publicPath+dirname + "已存在")
        const oldPath = publicPath + oldFilename  //组织旧路径
        const newPath = publicPath + dirname + '/' + newFilename + '.'+fileType  //组织新路径
        fs.rename(oldPath, newPath, (err) => {
            if (err) {
                throw err;
            }
        console.log("存储成功",newPath)
        })
    } else {
        fs.mkdir(publicPath + dirname, (err) => {
            if (err) {
                throw err;
            }
            console.log("文件夹创建成功", publicPath + dirname)
            const oldPath = publicPath + oldFilename
            const newPath = publicPath + dirname + '/' + newFilename + '.jpg'
            fs.rename(oldPath, newPath, (err) => {
                if (err) {
                    throw err;
                }
                console.log('存储成功【新建】',newPath)
            })
        })  //创建新文件夹
        
    }
}

module.exports = {
    changeFilenameAndSave
}