function currentDateTime() {
  let currentDate = new Date()
  return {
    date: `${currentDate.getFullYear()}-${currentDate.getMonth()+1}-${currentDate.getDate()}`,
    time: `${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`,
  }
}


function currentDateTime1() {
  const {format} = require('date-fns')
  let currentDate = new Date();
  return {
    date: format (currentDate, "yyyy-MM-dd"),
    time: format (currentDate, "H:m:s"),
  }
}

//module moment
function currentDateTime2() {
  const moment = require('moment');
  let currentDate = moment().get();
  return {
    date: currentDate.format ("yyyy-MM-DD"),
    time: currentDate.format ("H:m:s"),
  }
}

module.exports.currentDateTime = () => currentDateTime();
module.exports.currentDateTime1 = () => currentDateTime1();
module.exports.currentDateTime2 = () => currentDateTime2();
