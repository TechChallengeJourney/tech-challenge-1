'use client';
import { BytebankText } from '../text';
import { Box, Card } from '@mui/material';
import { format } from 'date-fns';
import React from 'react'; // necessário para usar React.ReactNode

export interface BytebankExtractProps {
  month: string;
  data: BytebankExtractPropsData[];
}

interface BytebankExtractPropsData {
  date: Date;
  type: 'Depósito' | 'Saque' | 'Transferência';
  value: number;
}

export function BytebankExtract({
  extract,
  title,
}: {
  extract: BytebankExtractProps[];
  title?: React.ReactNode;
}) {
  const numeroFormatado = (number: number) =>
    new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(number);

  return (
    <>
      {title && (
        <Box padding="10px">
          {title}
        </Box>
      )}

      {extract.map((itens, index) => (
        <Card key={index} sx={{ minWidth: 275 }}>
          <Box
            width="100%"
            display="flex"
            padding="10px"
            flexDirection="row"
            fontWeight={600}
          >
            <BytebankText color="primary">{itens.month}</BytebankText>
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
                <BytebankText color={item.value < 0 ? 'error' : 'primary'}>
                  {item.type}
                </BytebankText>
                <BytebankText color={item.value < 0 ? 'error' : 'primary'}>
                  {numeroFormatado(item.value)}
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
