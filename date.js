function currentDateTime() {
  date = new Date()
  return {
    date: `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`,
    time: `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,
  }
}

module.exports = () => currentDateTime();
