export interface BytebankExtractProps {
  month: string;
  data: BytebankExtractPropsData[];
}

interface BytebankExtractPropsData {
  date: Date;
  type: 'Depósito' | 'Saque' | 'Transferência';
  value: number;
}

export interface ExtractJsonProps {
  userId: string;
  transactions: BytebankExtractPropsData[];
}
