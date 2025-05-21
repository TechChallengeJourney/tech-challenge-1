const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function fetchTransactions(userId: string) {
  return  await fetch(`${API_URL}/extract?userId=${userId}`, { method: 'GET' }); 
}

export async function updateTransaction(id: string, value: string) {
  return fetch(`${API_URL}/extract/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ value }),
  });
}

export async function deleteTransaction(id: string) {
  return fetch(`${API_URL}/extract/${id}`, { method: 'DELETE' });
}
