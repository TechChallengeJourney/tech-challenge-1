import { NextResponse } from 'next/server';

const apiUrl = process.env.NEXT_PUBLIC_API_URL;
const fetchUsers = async () => {
  const res = await fetch(`${apiUrl}/users`);
  const users = await res.json();
  return users;
};

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();
    const users = await fetchUsers();

    const user = users.find(
      (user: { email: string; password: string }) =>
        user.email === email && user.password === password
    );

    if (user) {
      return NextResponse.json(user, { status: 200 });
    } else {
      return NextResponse.json(
        { error: 'E-mail ou senha incorretos, verifique suas credenciais e tente novamente, por favor!' },
        { status: 401 }
      );
    }
  } catch (error) {
    return NextResponse.json({ error: 'Failed request' }, { status: 500 });
  }
}
