export function once (fn) {
  return (...args) => {
    if (fn) {
      let ret = fn.bind(this, args);
      fn = null;
      return ret;
    }
  };
};

export function setCookie ({ key, value, expire }) {
  let expiredays = expire || 1;
  let exdate = new Date();
  exdate.setDate(exdate.getDate() + expiredays);
  document.cookie = key + '=' + escape(value) + ((expiredays === null) ? '' : ';expires=' + exdate.toGMTString());
};

export function getCookie (key) {
  if (document.cookie.length > 0) {
    let cStart = document.cookie.indexOf(key + '=');
    if (cStart !== -1) {
      cStart = cStart + key.length + 1;
      let cEnd = document.cookie.indexOf(';', cStart);
      if (cEnd === -1) cEnd = document.cookie.length;
      return unescape(document.cookie.substring(cStart, cEnd));
    }
  }
  return '';
};
/**
 * 时间格式化函数
 * @param {String} format 格式化字符串
 * @param {Number} timestamp 日期戳
 * @return {String} 格式化之后的字符串
 */
export function timeFormat (timestamp, format) {
  let fmt = format || 'yyyy-MM-dd hh:mm:ss';
  let date = new Date(timestamp);
  let o = {
    'M+': date.getMonth() + 1, // 月份
    'd+': date.getDate(), // 日
    'h+': date.getHours(), // 小时
    'm+': date.getMinutes(), // 分
    's+': date.getSeconds(), // 秒
    'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
    S: date.getMilliseconds() // 毫秒
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  for (let k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)));
    }
  }
  return fmt;
}
