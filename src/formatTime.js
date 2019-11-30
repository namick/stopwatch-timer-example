export default time => {
  let hours = parseInt((time / (1000 * 60 * 60)) % 24, 10)
  let minutes = parseInt((time / (1000 * 60)) % 60, 10)

  return {
    hours: hours > 0 ? String(hours).padStart(2, '0') : null,
    minutes: minutes > 0 ? String(minutes).padStart(2, '0') : null,
    seconds: String(parseInt((time / 1000) % 60, 10)).padStart(2, '0'),
    milliseconds: String(parseInt(time % 1000, 10))
      .substring(0, 2)
      .padEnd(2, '0'),
  }
}
