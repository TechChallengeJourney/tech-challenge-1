'use client';
import { BytebankText } from '../text';
import { Box, Card } from '@mui/material';
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';

import { useUser } from '../../contexts/user.context';
import { useFinancialSummary } from '../../contexts/financial-summary.context';
import {
  BytebankExtractProps,
  ExtractProps,
  BytebankExtractPropsData,
} from '../../classes/models/extract';

export function BytebankExtract({ title }: { title?: React.ReactNode }) {
  const [extract, setExtract] = useState<BytebankExtractProps[]>([]);
  const { user } = useUser();
  const { updateSummary } = useFinancialSummary();

  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  const fetchExtract = async () => {
    const res = await fetch(`${apiUrl}/extract?userId=${user?.id}`);
    const extract = await res.json();
    return extract as ExtractProps[];
  };

  useEffect(() => {
    fetchExtract().then((res) => {
      if (res.length === 0) return;

      const resData = res[0].transactions;

      // Agrupamento por mês para exibição
      const agrupado: BytebankExtractProps[] = Object.values(
        resData.reduce((acc, item) => {
          const dataObj = new Date(item.date);
          const mes = format(dataObj, 'MMMM');

          if (!acc[mes]) {
            acc[mes] = { month: mes, data: [] };
          }

          acc[mes].data.push({
            date: dataObj,
            type: item.type,
            value: item.value,
          });

          return acc;
        }, {} as Record<string, BytebankExtractProps>)
      );

      // Atualizar contexto com totais e transações
      const totals = resData.reduce(
        (acc, item) => {
          if (item.value > 0) acc.totalDeposits += item.value;
          else acc.totalWithdrawals += item.value;

          acc.transactions.push({
            date: new Date(item.date),
            type: item.type,
            value: item.value,
          });

          return acc;
        },
        {
          totalDeposits: 0,
          totalWithdrawals: 0,
          transactions: [] as BytebankExtractPropsData[],
        }
      );

      updateSummary(totals);
      setExtract(agrupado);
    });
  }, [user]);

  const numberFormat = (number: number) =>
    new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(number);

  return (
    <>
      {title && <Box padding="10px">{title}</Box>}

      {extract.map((itens, index) => (
        <Card key={index} sx={{ minWidth: 275 }}>
          <Box
            width="100%"
            display="flex"
            padding="10px 10px 0px 10px"
            flexDirection="row"
            boxSizing={'border-box'}
            fontWeight={600}
          >
            <BytebankText fontWeight={'bold'} color="primary">
              {itens.month}
            </BytebankText>
          </Box>
          {itens.data.map((item, index) => (
            <Box
              key={index}
              width="100%"
              display="flex"
              padding="15px"
              flexDirection="row"
              justifyContent="space-between"
              boxSizing="border-box"
              borderBottom={'1px solid '}
              borderColor={'primary.main'}
              paddingTop={'20px'}
              paddingBottom={'20px'}
            >
              <Box width="80%" display="flex" flexDirection="column" gap="5px">
                <BytebankText
                  textAlign={'left'}
                  color={item.value < 0 ? 'error' : 'primary'}
                >
                  {item.type}
                </BytebankText>
                <BytebankText
                  textAlign={'left'}
                  color={item.value < 0 ? 'error' : 'primary'}
                >
                  {numberFormat(item.value)}
                </BytebankText>
              </Box>
              <Box>
                <BytebankText
                  fontSize="12px"
                  color={item.value < 0 ? 'error' : 'primary'}
                >
                  {format(item.date, 'yy/MM/dd')}
                </BytebankText>
              </Box>
            </Box>
          ))}
        </Card>
      ))}
    </>
  );
}
