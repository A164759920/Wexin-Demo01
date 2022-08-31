//引入环境变量
const { JWT_SECRET, APPID, SECRET } = process.env

//引入库函数
const axios = require('axios')
const jwt = require('jsonwebtoken')


async function loginController(ctx){
    //解构获取小程序的code
    const { code } = ctx.query
    const res = await axios.get("https://api.weixin.qq.com/sns/jscode2session?appid="
        + APPID + "&secret=" + SECRET + "&js_code=" + code +
    "&grant_type=authorization_code")
 //res中携带session_key和openid,将其加工为jwt的token
    if (('openid' in res.data) && ('session_key' in res.data)) {
        console.log("登录成功了", res.data)
        //加工生成token，有效期自定义
        token = jwt.sign(res.data,JWT_SECRET,{ expiresIn: '3d' })
        //成功返回的信息,参考自定义API文档
        ctx.body = {
            code: 0,
            status: "success",
            data: {
                token,
                openid:res.data.openid,
                user:''
            }
        }
    } else {
        console.log("登录失败了")
        ctx.body = {
            msg:"登录失败了"
        }
    }

}

module.exports = {
    loginController
}