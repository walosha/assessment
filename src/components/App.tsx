import { TransactionData } from 'models'
import { useEffect, useState } from 'react'
import { fetchTableData } from 'services'
import Table from './table'

function App() {
  const [tableData, setTableData] = useState<TransactionData[]>([])

  useEffect(() => {
    fetchTableData().then((data) => {
      setTableData(data)
    })
  })

  return (
    <div className="relative overflow-hidden bg-white">
      <div className="h-screen sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <Table tableData={tableData} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
