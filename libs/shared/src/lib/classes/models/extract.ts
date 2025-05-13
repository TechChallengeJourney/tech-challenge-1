export interface BytebankExtractProps {
  title?: string;
  month: string;
  data: BytebankExtractPropsData[];
}

export interface BytebankExtractPropsData {
  date: Date;
  type: 'Depósito' | 'Saque' | 'Transferência';
  value: number;
}

export interface ExtractProps {
  userId: string;
  transactions: BytebankExtractPropsData[];
}
