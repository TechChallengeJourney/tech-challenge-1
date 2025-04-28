import { NextResponse } from 'next/server';
import { fetchUsers } from '../users';

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
    return NextResponse.json({ error: 'Ocorreu um erro, tente novamente mais tarde por favor!' }, { status: 500 });
  }
}
