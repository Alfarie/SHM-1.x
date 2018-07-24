var io = null;
var sensors = require('./sensors')
var reqmcu = require('./request-mcu');
var InitSocketIO = function(socketio) {
    io = socketio;
    io.on('connection', function(socket) {
        console.log("[LINKIT] Client Connected");
        socket.join('0x01');

        socket.on('SHORT_LOGGER_REQ', function() {
            socket.emit('SHORT_LOGGER_REP', sensors.shortLogger);
        });

        
        socket.on('REQ_SETTING', function() {
            console.log("[Info] Socket event: REQ SETTING");
            reqmcu.SendString("{cmd,req_setting}");
        });

        socket.on('SET_SETTING', function(data) {
            var ec_setpoint = Number(data['ec-setpoint']) * 60;
            var ec_detecting = Number(data['ec-detecting']) * 60;
            var ec_working = Number(data['ec-working']) * 60;

            var str = "{sol," + data['ec-setpoint'] + "," + data['ec-working'] + "," + data['ec-detecting'] + ",6.5,5,10}";
            reqmcu.SendString(str);
        });

        socket.on('CHANGE_MODE', function(data) {
            console.log(data);
            var mode = data.mode;
            var str = "{ecmode," + mode + "}";
            reqmcu.SendString(str);
        });

        socket.on('EC_TIMER_UPDATE', function(data) {
            console.log(data);
            var list = data['ect-list'];
            var working = data['ect-working'];
            var str = "";
            for (var i = 0; i < list.length; i++) {
                str += list[i]
                if (i != list.length - 1) {
                    str += ",";
                }
            }
            var str = "{ectimer," + working + "," + str + "}";
            reqmcu.SendString(str);
        })

        socket.on('DATETIME_UPDATE', function(data) {
            console.log(data);
            var datearr = data.date.split('-');
            console.log(datearr)
            var day = parseInt(datearr[2]);
            var month = parseInt(datearr[1]);
            var year = parseInt(datearr[0]) % 2000;

            var timearr = data.time.split(':');
            var hour = parseInt(timearr[0]);
            var min = parseInt(timearr[1]);
            console.log(day, month, year, hour, min);
            var str = "{datetime," + day + "," + month + "," + year + "," + hour + "," + min + "}";
            reqmcu.SendString(str);
        })

        socket.on('CALIBRATION', function(data){

            var phcal = data['ph-cal'];
            var eccal = data['ec-cal'];
            var str = "{cal," + eccal +"," + phcal + "}";
            reqmcu.SendString(str);
            console.log(str);
        })
    });
    return io;
}
module.exports.InitSocketIO = InitSocketIO;