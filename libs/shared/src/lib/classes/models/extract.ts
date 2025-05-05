export interface BytebankExtractProps {
  month: string;
  data: BytebankExtractPropsData[];
}

interface BytebankExtractPropsData {
  date: Date;
  type: 'Depósito' | 'Saque' | 'Transferência';
  value: number;
}

export interface ExtractProps {
  userId: string;
  transactions: BytebankExtractPropsData[];
}
