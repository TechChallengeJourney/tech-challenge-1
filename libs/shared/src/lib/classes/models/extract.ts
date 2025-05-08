export interface BytebankExtractProps {
  month: string;
  data: BytebankExtractPropsData[];
}

export interface BytebankExtractPropsData {
  date: Date;
  type: string;
  value: number;
}

export interface ExtractProps {
  id: string;
  userId: string;
  transactions: BytebankExtractPropsData[];
}

export interface IExtractProps {
  type: string;
  value: number;
  date: Date;
  userId: string;
}
