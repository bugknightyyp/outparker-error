
// 0: 成功
// 1---：参数错误
// 2---：服务错误

var err = {
  1010: "手机格式有误",
  1011: "手机号码已注册",
  1012: "手机号码未注册",

  1020: "密码长度必须大于6",
  1030: "验证码错误",
  1031: "帐号或密码错误",

  2000: "服务内部错误"

}


module.exports = function(status) {
  return !!code? {status: status, msg: err[status]} : {status: 0}
}

