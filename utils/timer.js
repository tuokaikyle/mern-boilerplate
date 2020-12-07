const Timer = () => {
  let today = new Date()
  let time =
    today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds()
  return time
}
export default Timer
