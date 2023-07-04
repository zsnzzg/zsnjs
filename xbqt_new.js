const cookieName = '任务奖励'
const signurlKey = 'zsn_signurl_kqxt'
const signheaderKey = 'zsn_signheader_kqxt'
const chavy = init()
const signurlVal = chavy.getdata(signurlKey)
const signheaderVal = chavy.getdata(signheaderKey)
chavy.log(`cookieName:${cookieName}\n\nsignurlVal:${signurlVal}\n\nsignheaderVal: ${signheaderVal}\n\n`)

function sign() {
  const url = { url: signurlVal, headers: JSON.parse(signheaderVal) }
  url.body = 'inorout=2&deviceid=67053f61bfc847346ccc4ec214c57b04'
  //url.headers['Referer'] = 'http://sytlj.saasta.net:10000/Management/MobileRegister/MobileRegisterPage?code=zj3XuDcfNDg8TMxD14SJg0kjDUT7bFlvXg-vrslzHG0&state=123456'
  //url.headers['Cookie'] = 'CompanyID=a24e0ad8-69df-48d1-9f8f-ac8132bdf34e; EmployeeID=021464847; IP=; Language=; LoginName=021464847; LoginType=2; UserCode=b36a4fed-234e-4139-85a5-9033c75a677e; UserName=%e5%bc%a0%e9%aa%81'
  //url.headers['Cookie'] = 'CompanyID=a24e0ad8-69df-48d1-9f8f-ac8132bdf34e; EmployeeID=021464847; IP=; Language=; LoginName=021464847; LoginType=2; UserCode=b36a4fed-234e-4139-85a5-9033c75a677e; UserName=%e5%bc%a0%e9%aa%81'
  chavy.post(url, (error, response, data) => {
    chavy.log(`${cookieName}, data: ${data}`)
    let subTitle = ''
    let detail = ''
    if (data.indexOf('localtiontext_signout') >= 0) {
      subTitle = `签到结果: 成功`
      detail = `出山快乐🥳`
    } else {
      subTitle = `签到结果: 失败`
      detail = `没签上❓❓❓`
    }
    chavy.msg(cookieName, subTitle, detail)
    chavy.done()
  })
}

function init() {
  isSurge = () => {
    return undefined === this.$httpClient ? false : true
  }
  isQuanX = () => {
    return undefined === this.$task ? false : true
  }
  getdata = (key) => {
    if (isSurge()) return $persistentStore.read(key)
    if (isQuanX()) return $prefs.valueForKey(key)
  }
  setdata = (key, val) => {
    if (isSurge()) return $persistentStore.write(key, val)
    if (isQuanX()) return $prefs.setValueForKey(key, val)
  }
  msg = (title, subtitle, body) => {
    if (isSurge()) $notification.post(title, subtitle, body)
    if (isQuanX()) $notify(title, subtitle, body)
  }
  log = (message) => console.log(message)
  get = (url, cb) => {
    if (isSurge()) {
      $httpClient.get(url, cb)
    }
    if (isQuanX()) {
      url.method = 'GET'
      $task.fetch(url).then((resp) => cb(null, {}, resp.body))
    }
  }
  post = (url, cb) => {
    if (isSurge()) {
      $httpClient.post(url, cb)
    }
    if (isQuanX()) {
      url.method = 'POST'
      $task.fetch(url).then((resp) => cb(null, {}, resp.body))
    }
  }
  done = (value = {}) => {
    $done(value)
  }
  return { isSurge, isQuanX, msg, log, getdata, setdata, get, post, done }
}
