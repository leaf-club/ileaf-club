var fs = require("fs");
var rm = require('rimraf');
var path = require('path');
var config = require('../config');
var root = config.build.assetsRoot;
var static = config.build.assetsSubDirectory;

function rename() {
  let dir = path.join(root, './', static, '/js');
  let newDir = path.join(root, '/js');
  fs.readdir(dir, (err, files) => {
    if (err) {
      return console.error(err);
    }
    files.forEach(item => {
      var reg = /(hljs\..+\.)(.*\.)(js|\.map)/ig;
      if (reg.test(item) === true) {
        fs.rename(dir + '/' + item, newDir + '/' + item.replace(reg, '$1$3'), err => {
          if (err) console.log(err);
        });
      }
    });
    console.log("移动完成");
  });
}
module.exports = function rebuildHljs() {
  rm(path.join(root, '/js'), err => {
    if (err) {
      return console.error(err);
    }
    fs.mkdir(root + '/js', (err) => {
      if (err) {
        return console.error(err);
      }
      rename(root);
      console.log("目录创建成功。");
    });
  });
};