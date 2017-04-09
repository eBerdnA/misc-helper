module.exports = function (context, options) {
  var minutes = Math.floor(context / 60)
  var seconds = context - minutes * 60
  var finalTime = strPadLeft(minutes, '0', 2) + ':' + strPadLeft(seconds, '0', 2)
  return finalTime
}

function strPadLeft (string, pad, length) {
  return (new Array(length + 1).join(pad) + string).slice(-length)
}
