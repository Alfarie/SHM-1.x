var sensors = require('./sensors');
var config = require('../config');
var fs = require('fs');
var loop = null;
var dir = './logger';
var start = function() {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }
    console.log("LOGGER TIME : " + config.logger_time);
    loop = setInterval(LoggerLoop, config.logger_time);
}

var stop = function() {
    clearInterval(loop);
}


var LoggerLoop = function() {
    var sensor = sensors.sensors;
    if (sensor.date != undefined) {

        var loggerStr = sensor;
        fs.appendFile(config.rootdir + '/logger/' + sensor.date, JSON.stringify(loggerStr) + ",\n", function(err) {
            if (err) console.log(err);
        })
    }
}


module.exports.start = start;
module.exports.stop = stop;