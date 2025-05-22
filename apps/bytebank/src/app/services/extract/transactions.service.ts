const API_URL = process.env.NEXT_PUBLIC_API_URL;

interface Transaction {
    id: string;
    userId: string;
    type: string;
    value: string;
    date: string;
}
export async function fetchTransactions(userId: string) {
    return await fetch(`${API_URL}/extract?userId=${userId}`, { method: 'GET' });
}

export async function createTransaction(value: Transaction) {
    return fetch(`${API_URL}/extract`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...value }),
    });
}

export async function updateTransaction(data: Transaction) {
    return fetch(`${API_URL}/extract/${data.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data }),
    });
}

export async function deleteTransaction(id: string) {
    return fetch(`${API_URL}/extract/${id}`, { method: 'DELETE' });
}
