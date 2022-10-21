export default function estimatedReadTime(content: string) {
  const text = content
  const wpm = 225
  const words = text.trim().split(/\s+/).length
  const time = Math.ceil(words / wpm)
  return time
}
