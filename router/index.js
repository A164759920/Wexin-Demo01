const Router = require('koa-router');
const router = new Router();

//导入Controller
const { loginController } = require('../controller/loginController')
const { homePageController } = require('../controller/homePageController')
const { commentController } = require('../controller/commentController')
const { appreciateController } = require('../controller/appreciateController')
const { uploadImgController } = require('../controller/uploadImgController')
const { pubLikeItemController } = require('../controller/LikeItem/pubLikeItemController')
const { favorController } = require('../controller/favorController')
const { delLikeItemController } = require('../controller/LikeItem/delLikeItemController')
const {searchSingleUserItemController} = require('../controller/LikeItem/searchSingleUserItemController')
//导入middleware
const { auth } = require('../middleware/authToken.middle')

//路由设置
//登录
router.get('/login', loginController)
//请求用户主页
router.post('/userhomepage', auth, homePageController)
//分页请求用户主页面动态
router.post('/userhomepage/findItem',searchSingleUserItemController)
//评论
router.post('/comment', auth, commentController)
//点赞
router.post('/appreciate', auth, appreciateController)
//收藏
router.post('/favor', favorController)
//加载图片
router.post('/uploadImg', uploadImgController)
//发布动态
router.post('/pubLikeitem', pubLikeItemController)
//删除动态
router.post('/delLikeitem', delLikeItemController)
module.exports = {
    router
}
