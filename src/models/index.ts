export type Currency = 'EUR' | 'USD' | 'NGN'
type Type = 'income' | 'expense'
export type AccountName = 'Credit Card' | 'Savings Account' | 'Checking Account'
export type Order = 'ASC' | 'DSC'
export interface TransactionData {
  id: string
  date: string
  amount: number
  currency: Currency
  type: Type
  category: string
  accountName: AccountName
}

export type TransactionDataKeys = keyof TransactionData
