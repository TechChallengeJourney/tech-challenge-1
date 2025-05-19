'use client';
import { BytebankCard, BytebankText } from '@bytebank/shared';
import { Box } from '@mui/material';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import React, { useEffect, useState } from 'react';
import { useUser } from '@bytebank/shared';
import { useFinancialSummary } from '@bytebank/shared';
import { BytebankExtractProps, ExtractProps } from '@bytebank/shared';
import { Transaction } from '@bytebank/shared';
import EditExtractModal from './_components/edit-modal';
import DeleteExtractModal from './_components/delete-modal';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

export function BytebankExtract() {
  const [extract, setExtract] = useState<BytebankExtractProps[]>([]);
  const { user } = useUser();
  const { updateSummary } = useFinancialSummary();
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Transaction | null>(null);

  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    const fetchExtract = async () => {
      const res = await fetch(`${apiUrl}/extract?userId=${user?.id}`);
      const extract = await res.json();
      return extract as ExtractProps[];
    };
    fetchExtract().then((res) => {
      if (res.length === 0) return;
      const resData = res;
      // Agrupamento por mês para exibição
      const agrupado: BytebankExtractProps[] = Object.values(
        res.reduce((acc, item) => {
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
      // Atualizar contexto com totais e transações
      const totals = resData.reduce(
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
      updateSummary(totals);
      setExtract(agrupado);
    });
  }, [user, updateSummary, apiUrl]);

  const numberFormat = (value: number) =>
    value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });

  // Função para abrir modal de edição
  const handleEdit = (item: Transaction) => {
    setSelectedItem(item);
    setEditModalOpen(true);
  };

  // Função para abrir modal de exclusão
  const handleDelete = (item: Transaction) => {
    setSelectedItem(item);
    setDeleteModalOpen(true);
  };

  return (
    <>
      <BytebankCard bgcolor={'#FFF'}>
        <Box pb={4}>
          <Box p={4}>
            <BytebankText fontWeight={'bold'} variant={'md'}>
              Extrato
            </BytebankText>
          </Box>
          {/* Lista de extratos */}
          {extract.length !== 0 ? (
            extract.map((itens, index) => (
              <Box key={index}>
                <Box
                  width="100%"
                  display="flex"
                  px={4}
                  flexDirection="row"
                  boxSizing={'border-box'}
                  fontWeight={600}
                >
                  <BytebankText fontWeight={'bold'} color="primary">
                    {itens.month.charAt(0).toUpperCase() + itens.month.slice(1)}
                  </BytebankText>
                </Box>
                {itens.data.map((item, index) => (
                  <Box
                    key={index}
                    width="100%"
                    display="flex"
                    px={4}
                    flexDirection="row"
                    justifyContent="space-between"
                    boxSizing="border-box"
                    borderBottom={
                      itens.data.length !== index + 1 ? '1px solid ' : ''
                    }
                    borderColor={'primary.main'}
                    paddingTop={'20px'}
                    paddingBottom={'20px'}
                    alignItems="center"
                    position={'relative'}
                  >
                    <Box
                      width="80%"
                      display="flex"
                      flexDirection="column"
                      gap="5px"
                    >
                      <BytebankText
                        textAlign={'left'}
                        color={+item.value < 0 ? 'error' : 'primary'}
                      >
                        {item.type}
                      </BytebankText>
                      <BytebankText
                        textAlign={'left'}
                        color={+item.value < 0 ? 'error' : 'primary'}
                      >
                        {numberFormat(+item.value)}
                      </BytebankText>
                    </Box>
                    <Box
                      display={'flex'}
                      flexDirection="column"
                      gap="5px"
                      justifyContent={'space-between'}
                    >
                      <BytebankText
                        fontSize="12px"
                        color={+item.value < 0 ? 'error' : 'primary'}
                      >
                        {format(item.date, 'dd/MM/yyyy')}
                      </BytebankText>
                      <Box display="flex">
                        <IconButton
                          color="primary"
                          onClick={() => handleEdit(item)}
                          size="small"
                        >
                          <EditIcon />
                        </IconButton>
                        <IconButton
                          color="primary"
                          onClick={() => handleDelete(item)}
                          size="small"
                        >
                          <DeleteIcon />
                        </IconButton>
                      </Box>
                    </Box>
                  </Box>
                ))}
              </Box>
            ))
          ) : (
            <Box textAlign={'center'} px={4} pb={4} display={'flex'} flexDirection={'column'} alignItems={'center'} gap={2}>
              <ErrorOutlineIcon
                color="error"
                sx={{ fontSize: '50px' }}
                />
              <BytebankText variant={'sm'}>
                Não encontramos nenhuma transação para você, que tal criar uma nova?
              </BytebankText>
            </Box>
          )}
        </Box>
      </BytebankCard>

      <EditExtractModal
        open={editModalOpen}
        onClose={() => setEditModalOpen(false)}
        item={selectedItem as Transaction}
        onSave={async (newValue) => {
          if (!selectedItem) return;
          await fetch(`${apiUrl}/extract/${selectedItem.id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ...selectedItem, value: newValue }),
          });
          setEditModalOpen(false);
          setSelectedItem(null);
          window.location.reload();
        }}
      />
      <DeleteExtractModal
        open={deleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        item={selectedItem}
        onConfirm={async () => {
          if (!selectedItem) return;
          await fetch(`${apiUrl}/extract/${selectedItem.id}`, {
            method: 'DELETE',
          });
          setDeleteModalOpen(false);
          setSelectedItem(null);
          window.location.reload();
        }}
      />
    </>
  );
}
