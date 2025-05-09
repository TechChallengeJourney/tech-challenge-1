import { BytebankCard, BytebankExtract, BytebankText} from '@bytebank/shared';

export interface Transaction {
    date: Date;
    type: 'Depósito' | 'Saque' | 'Transferência';
    value: number;
  }
  
  export interface BytebankExtractProps {
    month: string;
    data: Transaction[];
  }

const sampleData: BytebankExtractProps[] = [
  {
    month: 'Janeiro',
    data: [
      {
        date: new Date(2025, 0, 1),
        type: 'Depósito',
        value: 1500.75,
      },
      {
        date: new Date(2025, 0, 5),
        type: 'Saque',
        value: -500.25,
      },
      {
        date: new Date(2025, 0, 10),
        type: 'Transferência',
        value: 1000.0,
      },
    ],
  },
  {
    month: 'Fevereiro',
    data: [
      {
        date: new Date(2025, 1, 3),
        type: 'Depósito',
        value: 2000.0,
      },
      {
        date: new Date(2025, 1, 7),
        type: 'Saque',
        value: -200.5,
      },
    ],
  },
];

export default function ExtractCardWrapper() {
  return (
    <BytebankCard>
      <BytebankText color="primary" fontSize="24px" fontWeight={600}>
        Extrato
      </BytebankText>
      <BytebankExtract extract={sampleData} />
    </BytebankCard>
  );
}
