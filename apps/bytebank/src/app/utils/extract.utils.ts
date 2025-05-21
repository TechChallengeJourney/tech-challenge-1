import {
  ExtractProps,
  BytebankExtractProps,
  Transaction,
} from '@bytebank/shared';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export function agrupado(data: ExtractProps[]): BytebankExtractProps[] {
  return Object.values(
    data.reduce((acc, item) => {
      const dataObj = new Date(item.date);
      const mes = format(dataObj, 'MMMM', { locale: ptBR });
      if (!acc[mes]) {
        acc[mes] = { month: mes, data: [] };
      }
      acc[mes].data.push({
        id: item.id,
        date: dataObj,
        type: item.type,
        value: item.value,
        userId: item.userId,
      });
      return acc;
    }, {} as Record<string, BytebankExtractProps>)
  );
}

export function calculateTotals(data: ExtractProps[]) {
    return data.reduce(
        (acc, item) => {
            const valueToNumber = +item.value;
            if (valueToNumber > 0) acc.totalDeposits += valueToNumber;
            else acc.totalWithdrawals += valueToNumber;
            acc.transactions.push({
                id: item.id,
                date: new Date(item.date),
                userId: item.userId,
                type: item.type,
                value: item.value,
            });
            return acc;
        },
        {
            totalDeposits: 0,
            totalWithdrawals: 0,
            transactions: [] as Transaction[],
        }
    );
}
