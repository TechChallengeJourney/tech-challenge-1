export interface BytebankExtractProps {
  month: string;
  data: BytebankExtractPropsData[];
}

export interface BytebankExtractPropsData {
  date: Date;
  type: 'Depósito' | 'Saque' | 'Transferência';
  value: number;
}

export interface ExtractProps {
  id: string;
  userId: string;
  transactions: BytebankExtractPropsData[];
}
