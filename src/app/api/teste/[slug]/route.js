import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  try {
    const test = params.slug
    return NextResponse.json({ "result": test});
  } catch (error) {
    console.error('Erro:', error);
    return NextResponse.json(
      { error: 'Erro ao obter o slug' },
      { status: 500 }
    );
  }
}
