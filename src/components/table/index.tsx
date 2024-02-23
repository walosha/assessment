import OrderIcon from 'components/icon'
import { categories, currency, type } from 'contants'
import useSortable from 'hooks'
import useFilterable from 'hooks/useFileterable'
import { Currency, TransactionData } from 'models'
import { Fragment, useCallback, useState, useEffect } from 'react'
import Select from 'react-tailwindcss-select'
import { formatDate } from 'utils'

export type Fileterbales = 'category' | 'type' | 'currency'

export default function Table({ tableData }: { tableData: TransactionData[] }) {
  const { txnData, handleSort, config } = useSortable(tableData)
  const [loading, setLoading] = useState(false)
  const [value, setValue] = useState({
    category: null,
    type: null,
    currency: null
  })
  const [currencyOpts, setCurrencyOpts] = useState<any[]>([])
  const [typeOpts, setTypeOpts] = useState<any[]>([])
  const [categoriesOpts, setCategoriesOpts] = useState<any[]>([])

  const Order = () => <OrderIcon config={config} />

  useEffect(() => {
    setLoading(true)
    const timer = setTimeout(() => {
      setCurrencyOpts(currency)
      setTypeOpts(type)
      setCategoriesOpts(categories)
      setLoading(false)
    }, 3000)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  console.log({ currencyOpts })

  const setOptVal = (key: Fileterbales) => {
    return function (val: any) {
      setValue({ ...value, [key]: val })
      // Filter @input data,key,options
      useFilterable(tableData, key, value[key])
    }
  }

  const filterOptions = useCallback((data: any) => {
    return data.filter((item: any) => 'options' in item)
  }, [])

  return (
    <Fragment>
      <div className="flex">
        <Select
          primaryColor="text-blue"
          options={filterOptions(currencyOpts)}
          onChange={setOptVal('currency')}
          value={value.currency}
          isClearable
          isSearchable
          isMultiple
          placeholder="select Currency"
        />
        <Select
          primaryColor="text-blue"
          options={filterOptions(typeOpts)}
          onChange={setOptVal('type')}
          value={value.type}
          isClearable
          isSearchable
          isMultiple
          placeholder="select Type"
        />
        <Select
          primaryColor="text-blue"
          options={filterOptions(categoriesOpts)}
          onChange={setOptVal('category')}
          value={value.category}
          isClearable
          isSearchable
          isMultiple
          placeholder="select Category"
        />
      </div>
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
              <div
                onClick={() => handleSort('date')}
                className="flex items-center cursor-pointer"
              >
                Date
                <Order />
              </div>
            </th>{' '}
            <th scope="col" className="px-6 py-3">
              <div
                onClick={() => handleSort('amount')}
                className="flex items-center cursor-pointer"
              >
                Amount
                <Order />
              </div>
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
          {txnData.map(
            (
              { id, date, amount, type, category, accountName, currency },
              index
            ) => (
              <tr
                key={id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
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
    </Fragment>
  )
}
