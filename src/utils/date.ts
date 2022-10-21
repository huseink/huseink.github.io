export function formatDate(date?: Date) {
  let publishedDate = null

  if (date) {
    const dateObj = new Date(date)
    const month = dateObj.getUTCMonth() + 1 //months from 1-12
    const day = dateObj.getUTCDate()
    const year = dateObj.getUTCFullYear()

    publishedDate = day + '/' + month + '/' + year
  }

  return publishedDate
}
