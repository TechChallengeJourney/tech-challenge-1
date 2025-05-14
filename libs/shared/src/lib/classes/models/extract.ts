import { Transaction } from './transaction';

export interface BytebankExtractProps {
  month: string;
  data: Transaction[];
}

export interface ExtractProps {
  type: string;
  value: number;
  date: Date;
  userId: string;
}
