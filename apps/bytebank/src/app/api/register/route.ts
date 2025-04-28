import { NextResponse } from 'next/server';
import { addUser, fetchUsers } from '../users';

export async function POST(request: Request) {
  try {
    const userData = await request.json();
    const users = await fetchUsers();

    const user = users.find(
      (user: { email: string; password: string }) => user.email === userData.email);

    if(user) {
      return NextResponse.json(
        { error: 'Já existe uma conta vinculada a este e-mail, tente cadastrar um outro ou efetue login.' },
        { status: 500 }
      );
    }
    
    const response = await addUser(userData);

    if (response.ok) {
      return NextResponse.json({data: userData, message: 'Usuário criado com sucesso!'}, { status: 200 });
    } else {
      return NextResponse.json(
        { error: 'Ocorreu um erro, tente novamente mais tarde por favor!' },
        { status: 401 }
      );
    }
  } catch (error) {
    return NextResponse.json({ error: 'Ocorreu um erro, tente novamente mais tarde por favor!' }, { status: 500 });
  }
}
