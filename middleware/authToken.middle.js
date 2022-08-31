//该中间件用于token验证
const jwt = require('jsonwebtoken')
const { JWT_SECRET } = process.env

const auth = async (ctx, next) => {
    const { authorization } = ctx.request.header;
    const token = authorization.replace('Bearer ', '')
    try {
        const res = jwt.verify(token, JWT_SECRET)
        const { openid } = res //只取出解构到的openid
        console.log("这是openid",openid)
        ctx.state.openid = openid //挂载openid到ctx下
        console.log("token验证成功")
    } catch (err) {
        console.log(err)
    }
    await next();
}

module.exports = {
    auth,
}