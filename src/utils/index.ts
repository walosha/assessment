import { format, parseISO } from 'date-fns'

export function formatDate(date: string) {
  const dateFormatted = format(parseISO(date), 'dd.MM.yyyy')
  return dateFormatted
}
