'use client';

import React, { createContext, useContext, useState } from 'react';

interface Transaction {
  date: string;
  type: string;
  value: number;
}

interface FinancialSummary {
  totalDeposits: number;
  totalWithdrawals: number;
  transactions: Transaction[];
}

interface FinancialSummaryContextType extends FinancialSummary {
  updateSummary: (summary: FinancialSummary) => void;
}

const FinancialSummaryContext = createContext<FinancialSummaryContextType>({
  totalDeposits: 0,
  totalWithdrawals: 0,
  transactions: [],
  updateSummary: () => {
    console.warn('updateSummary method is not implemented.');
  },
});

export const FinancialSummaryProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [summary, setSummary] = useState<FinancialSummary>({
    totalDeposits: 0,
    totalWithdrawals: 0,
    transactions: [],
  });

  const updateSummary = (newSummary: FinancialSummary) => {
    setSummary(newSummary);
  };

  return (
    <FinancialSummaryContext.Provider value={{ ...summary, updateSummary }}>
      {children}
    </FinancialSummaryContext.Provider>
  );
};

export const useFinancialSummary = () => useContext(FinancialSummaryContext);
