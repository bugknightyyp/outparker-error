
// 0: 成功
// 1----：用户相关
// 2----：活动相关
// -1---：参数错误
// -2---：服务错误

var err = {
  //"0": '',
  "11010": '手机格式有误',
  "11020"：'密码长度必须大于6',
  "11030"：'验证码错误',
}

module.exports = function(status) {
  return !!code? {status: status, msg: err[status]} : {status: 0}
}

