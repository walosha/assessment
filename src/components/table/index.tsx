import { TransactionData } from 'models'
import { formatDate } from 'utils'

export default function Table({ tableData }: { tableData: TransactionData[] }) {
  return (
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
        Your Transactions{' '}
        <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
          Browse a list of Transactions designed to help you work
        </p>
      </caption>
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="px-6 py-3">
            SN
          </th>
          <th scope="col" className="px-6 py-3">
            TXN id
          </th>
          <th scope="col" className="px-6 py-3">
            Date
          </th>{' '}
          <th scope="col" className="px-6 py-3">
            Amount
          </th>
          <th scope="col" className="px-6 py-3">
            Currency
          </th>
          <th scope="col" className="px-6 py-3">
            Type
          </th>
          <th scope="col" className="px-6 py-3">
            Category
          </th>
          <th scope="col" className="px-6 py-3">
            accountName
          </th>
        </tr>
      </thead>
      <tbody>
        {tableData.map(
          (
            { id, date, amount, type, category, accountName, currency },
            index
          ) => (
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td className="px-6 py-4">{index + 1}</td>
              <td className="px-6 py-4">{id}</td>
              <td className="px-6 py-4">{formatDate(date)}</td>
              <td className="px-6 py-4">{amount}</td>
              <td className="px-6 py-4">{currency}</td>
              <td className="px-6 py-4">{type}</td>
              <td className="px-6 py-4">{category}</td>
              <td className="px-6 py-4">{accountName}</td>
            </tr>
          )
        )}
      </tbody>
    </table>
  )
}
