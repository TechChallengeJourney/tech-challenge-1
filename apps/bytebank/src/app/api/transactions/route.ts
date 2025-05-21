import { NextResponse } from 'next/server';
import { fetchTransactions } from '../../services/extract/transactions.service';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export async function POST(request: Request) {
  try {
    const data = await request.json();

    if (!data) {
      return NextResponse.json(
        { error: 'Ocorreu um erro, tente novamente mais tarde por favor!' },
        { status: 500 }
      );
    }

    const response = await fetch(`${apiUrl}/extract`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: 'Ocorreu um erro, tente novamente mais tarde por favor!' },
        { status: 500 }
      );
    }

    return NextResponse.json(data, {
      status: 201,
    });
  } catch {
    return NextResponse.json(
      { error: 'Ocorreu um erro, tente novamente mais tarde por favor!' },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const userId = url.searchParams.get('userId');

    if (!userId) {
      return NextResponse.json(
        { error: 'Erro ao buscar extrato 1' },
        { status: 500 }
      );
    }

    const response = await fetchTransactions(userId);

    if (!response.ok) {
      console.log('Error fetching extract:', response);
      return NextResponse.json(
        { error: 'Erro ao buscar extrato 2' },
        { status: 500 }
      );
    }

    const data = await response.json();

    let total_value = 0;

    const transactions = Object.values(
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

        total_value += +item.value;
        return acc;
      }, {})
    );

    return NextResponse.json(
      { transactions, total_value },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error('Error fetching extract:', error);
    return NextResponse.json(
      { error: 'Ocorreu um erro, tente novamente mais tarde por favor!' },
      { status: 500 }
    );
  }
}
