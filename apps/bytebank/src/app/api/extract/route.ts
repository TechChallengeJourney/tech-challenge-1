import { ExtractProps, BytebankExtractPropsData } from '@bytebank/shared';
import { NextResponse } from 'next/server';

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

async function getUserExtracts(userId: string) {
  const res = await fetch(`${apiUrl}/extract?userId=${userId}`);
  const json = res.json();
  return json;
}

async function updateUserExtract(
  userContext: ExtractProps,
  updateTrasaction: BytebankExtractPropsData[]
) {
  const { id } = userContext;
  await fetch(`${apiUrl}/extract/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      ...userContext,
      transactions: updateTrasaction,
    }),
  });
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    if (!data) {
      return NextResponse.json(
        { error: 'Ocorreu um erro, tente novamente mais tarde por favor!' },
        { status: 500 }
      );
    }
    const userContext = await getUserExtracts(data.userId);
    const userExtracts = userContext[0].transactions;
    const { type, value, date } = data;
    const updatedTrasactionList = [...userExtracts, { type, value, date }];
    await updateUserExtract(userContext[0], updatedTrasactionList);

    return NextResponse.json([...userExtracts, { type, value, date }], {
      status: 201,
    });
  } catch {
    return NextResponse.json(
      { error: 'Ocorreu um erro, tente novamente mais tarde por favor!' },
      { status: 500 }
    );
  }
}
