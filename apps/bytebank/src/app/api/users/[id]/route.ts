import { NextResponse } from "next/server";
import { updateUser } from "..";

export async function PUT(request: Request) {
  try {
    const userData = await request.json();

    const response = await updateUser({...userData});
    
        if (response.ok) {
          return NextResponse.json({data: userData, message: 'Usuário atualizado com sucesso!'}, { status: 200 });
        } else {
          return NextResponse.json(
            { error: 'Ocorreu um erro, tente novamente mais tarde por favor!' },
            { status: 500 }
          );
        }
  } catch {
    return NextResponse.json({ error: 'Ocorreu um erro, tente novamente mais tarde por favor!' }, { status: 500 });
  }
}
