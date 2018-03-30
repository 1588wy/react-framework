Date.prototype.format = function(fmt) {
  var o = {
    'M+': this.getMonth() + 1, //月份
    'd+': this.getDate(), //日
    'h+': this.getHours(), //小时
    'm+': this.getMinutes(), //分
    's+': this.getSeconds(), //秒
    'q+': Math.floor((this.getMonth() + 3) / 3), //季度
    S: this.getMilliseconds() //毫秒
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (this.getFullYear() + '').substr(4 - RegExp.$1.length)
    );
  }
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length)
      );
    }
  }
  return fmt;
};

/*
 工具类
 */
const Utils = {
  // 获取url中所有的参数
  getParams(url) {
    var vars = {},
      hash,
      hashes,
      i;

    url = url || window.location.href;

    // 没有参数的情况
    if (url.indexOf('?') == -1) {
      return vars;
    }

    hashes = url.slice(url.indexOf('?') + 1).split('&');

    for (i = 0; i < hashes.length; i++) {
      if (!hashes[i] || hashes[i].indexOf('=') == -1) {
        continue;
      }
      hash = hashes[i].split('=');
      if (hash[1]) {
        vars[hash[0]] =
          hash[1].indexOf('#') != -1
            ? hash[1].slice(0, hash[1].indexOf('#'))
            : hash[1];
      }
    }
    return vars;
  },

  // 获取指定name的参数
  getParam(name, url) {
    return this.getParams(url)[name];
  },

  getCurrentParam(name) {
    return this.getParam(name, location.href);
  },
  /**
   * 判断是否小于今天
   * @param {*} startTime 日期字符串
   */
  isLessThanCurrentDay(startTime) {
    let todayTimestamp = Date.parse(new Date(this.dateConvent(new Date()))); // 今天的时间戳
    let paramTimestamp = Date.parse(new Date(startTime)); // 传入参数的时间戳
    console.log(paramTimestamp < todayTimestamp);
    return paramTimestamp < todayTimestamp;
  },
  /**
   *  将日期转换为日期格式字符串
   * @param {*} date 
   */
  dateConvent(date) {
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    month = month > 9 ? month : '0' + month;
    var day = date.getDate();
    day = day > 9 ? day : '0' + day;

    return year + '-' + month + '-' + day;
  },
  /**
   *  将日期时间戳转换为日期
   * @param {*} 时间戳 
   */
  timeStampConvent(timeStamp) {
    // var time = new Date(parseInt(timeStamp)).toLocaleString();
    // return time.replace(/\//g, '-').slice(0, time.indexOf(' '));
    return new Date(parseInt(timeStamp)).format('yyyy-MM-dd');
  },
  /**
   * 判断对象是否为空
   * @param {*} object 
   */
  isEmptyObj(object) {
    for (let key in object) {
      return false;
    }
    return true;
  }
};

export default Utils;
