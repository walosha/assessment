import { Order, TransactionDataKeys } from 'models'

const UP = () => (
  <span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-3"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m4.5 15.75 7.5-7.5 7.5 7.5"
      />
    </svg>
  </span>
)

const Down = () => (
  <span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-3"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m19.5 8.25-7.5 7.5-7.5-7.5"
      />
    </svg>
  </span>
)

export default function OrderIcon({
  config
}: { config: null } | { config: { key: TransactionDataKeys; order: Order } }) {
  if (!config) {
    return (
      <div className="flex flex-col items-center">
        <UP />
        <Down />
      </div>
    )
  }
  if (config.order == 'ASC') {
    return (
      <div className="flex">
        <UP />
      </div>
    )
  }

  if (config.order === 'DSC') {
    return (
      <div className="flex">
        <Down />
      </div>
    )
  }
}
