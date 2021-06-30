import { createContext, useEffect, useState, ReactNode, useContext } from 'react';
import { api } from '../services/api';

type Transaction = {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

type TransactionsProviderProps = {
  children: ReactNode;
}

type TransactionsContextData = {
  transactions: Transaction[];
  createTransactions: (transaction: TransactionsInputProps) => Promise<void>;
}

type TransactionsInputProps = Omit<Transaction, 'id' | 'createdAt'>

export const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData);

export function TransactionsProvider({children}: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get('transactions')
      .then(response => setTransactions(response.data.transactions))
  }, [])

  async function createTransactions(transactionInput: TransactionsInputProps) {
    const response = await api.post('/transactions', {
      ...transactionInput,
      createdAt: new Date(),
    }); 
    const { transaction } = response.data;

    setTransactions([
      ...transactions,
      transaction
    ])

  }

  return (
    <TransactionsContext.Provider value={{transactions, createTransactions}}>
    {children}
    </TransactionsContext.Provider>
  )
}



export function useTransactions() {
  const context = useContext(TransactionsContext);


  return context;
}