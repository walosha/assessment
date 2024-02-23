import axios from 'axios'

export async function fetchTableData() {
  const response = await axios('../transactions.json')
  return response.data
}
