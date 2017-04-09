module.exports = function(context, options) {
    var minutes = Math.floor(context / 60);
    var seconds = context - minutes * 60;
    var finalTime = str_pad_left(minutes,'0',2)+':'+str_pad_left(seconds,'0',2);
    return finalTime;
}

function str_pad_left(string,pad,length) {
    return (new Array(length+1).join(pad)+string).slice(-length);
}