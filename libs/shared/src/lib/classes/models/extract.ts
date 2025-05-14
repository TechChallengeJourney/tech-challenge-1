import { Transaction } from './transaction';

export interface BytebankExtractProps {
  title?: string;
  month: string;
  data: Transaction[];
}

export interface ExtractProps  extends Transaction {
  userId: string;
}
