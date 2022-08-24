const cookieName = '上班签到'
const signurlKey = 'zsn_signurl_kqxt'
const signheaderKey = 'zsn_signheader_kqxt'
const chavy = init()
const signurlVal = chavy.getdata(signurlKey)
const signheaderVal = chavy.getdata(signheaderKey)

sign()

function sign() {
  const url = { url: signurlVal, headers: JSON.parse(signheaderVal) }
  url.body = 'pointid=b4edc394-b41e-4342-9d8e-36fc6bd216d9&inorout=1&lat=38.9102350385927&lng=121.61504275925934&location=%E8%BE%BD%E5%AE%81%E7%9C%81%E5%A4%A7%E8%BF%9E%E5%B8%82%E8%A5%BF%E5%B2%97%E5%8C%BA%E6%B0%91%E8%BF%90%E8%A1%9745%E5%8F%B7&ips=&cip=&deviceid=67053f61bfc847346ccc4ec214c57b04'
  url.headers['Referer'] = 'http://sytlj.saasta.net:10000/Management/MobileRegister/MobileRegisterPage?code=E0z2yN5fEW12YWEK54oV7QmuggfrrkrjQ7jLYhYzKUc&state=123456'
  chavy.post(url, (error, response, data) => {
    chavy.log(`${cookieName}, data: ${data}`)
    let subTitle = ''
    let detail = ''
    if (data.indexOf('民运街') >= 0) {
      subTitle = `签到结果: 成功`
      detail = `上班遭罪😑`
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
