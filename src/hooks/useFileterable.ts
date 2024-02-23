import { Fileterbales } from 'components/table'
import { Order, TransactionData, TransactionDataKeys } from 'models'
import { useState } from 'react'

export default function useFilterable(
  txnData: TransactionData[],
  key: Fileterbales,
  options: any
) {
  console.log({ txnData, key, options })

  const [config, setConfig] = useState<null | {
    key: TransactionDataKeys
    order: Order
  }>(null)
  const items = [...txnData]

  if (config) {
    items.sort((itemA: TransactionData, itemB: TransactionData) => {
      if (itemA[config?.key] > itemB[config?.key]) {
        return config.order == 'ASC' ? -1 : 1
      }
      if (itemA[config?.key] < itemB[config?.key]) {
        return config.order == 'ASC' ? 1 : -1
      }
      return 0
    })
  }

  const handleSort = (key: TransactionDataKeys) => {
    let order: Order = 'ASC'
    // if order sorted the make it DSC
    if (config?.order == 'ASC') {
      order = 'DSC'
    }
    setConfig({ key, order })
  }
  return { txnData: items, handleSort, config }
}
