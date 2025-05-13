'use client';

import React, { createContext, useContext, useState } from 'react';
import { BytebankExtractPropsData } from '../classes/models/extract';
export interface FinancialSummary {
  totalDeposits: number;
  totalWithdrawals: number;
  transactions: BytebankExtractPropsData[];
}

interface FinancialSummaryContextType extends FinancialSummary {
  updateSummary: (summary: FinancialSummary) => void;
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
}

const FinancialSummaryContext = createContext<FinancialSummaryContextType>({
  totalDeposits: 0,
  totalWithdrawals: 0,
  transactions: [],
  updateSummary: () => {
    console.warn('updateSummary method is not implemented.');
  },
  isLoading: false,
  setIsLoading: () => {
    console.warn('setIsLoading method is not implemented.');
  },
});

export const FinancialSummaryProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [summary, setSummary] = useState<FinancialSummary>({
    totalDeposits: 0,
    totalWithdrawals: 0,
    transactions: [],
  });

  const [isLoading, setIsLoading] = useState(false);

  const updateSummary = (newSummary: FinancialSummary) => {
    setSummary(newSummary);
    setIsLoading(false);
  };

  return (
    <FinancialSummaryContext.Provider value={{ ...summary, updateSummary, isLoading, setIsLoading }}>
      {children}
    </FinancialSummaryContext.Provider>
  );
};

export const useFinancialSummary = () => useContext(FinancialSummaryContext);
