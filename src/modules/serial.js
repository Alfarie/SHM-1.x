var portName = require('../config').portName;
const SerialPort = require('serialport');
const Readline = SerialPort.parsers.Readline;
var fs = require('fs');
var port = null;

var parser = null;
for (var i = 20; i >= 0; i--) {
    var str = portName + i;

    if (fs.existsSync(str)) {
        console.log(str);
        port = new SerialPort('/dev/ttyACM' + i, {
            baudRate: 57600
        });
        parser = port.pipe(new Readline({ delimiter: '\r\n' }));
        break;
    }
}



module.exports = {
    port: port,
    parser: parser
}