export const dateTimeString = (): string => {
  const date = new Date()
  const year = date.getFullYear()
  const month =
    date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
  const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()
  const hour = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()
  const minute =
    date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()
  const second =
    date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds()

  const dateTimeString = `${year}-${month}-${day}-${hour}-${minute}-${second}`
  return dateTimeString
}

export const timestampString = (): string => {
  const date = new Date()
  return date.getTime().toString()
}

export const formatDate = (date: Date): string => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]

  const month = months[date.getMonth()]
  const day = date.getDate()
  const year = date.getFullYear()

  let hours = date.getHours()
  const minutes = date.getMinutes()
  const ampm = hours >= 12 ? 'PM' : 'AM'
  hours = hours % 12
  hours = hours ? hours : 12

  const formattedMinutes = minutes < 10 ? '0' + minutes : minutes

  return `${month} ${day}, ${year} ${hours}:${formattedMinutes} ${ampm}`
}
