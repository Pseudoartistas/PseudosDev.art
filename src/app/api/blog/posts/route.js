import { promises as fsPromises } from 'fs';
import { join, parse } from 'path';
import grayMatter from 'gray-matter';
import { NextResponse } from 'next/server';

export async function GET(request) {
  try {
    const diretorioPosts = join(process.cwd(), 'src', 'blog', 'posts');

    const nomeArquivos = await fsPromises.readdir(diretorioPosts);

    const dados = await Promise.all(
      nomeArquivos.map(async (nomeArquivo) => {
        if (!nomeArquivo.endsWith('.md')) {
          return null;
        } else {
          const caminhoArquivo = join(diretorioPosts, nomeArquivo);
          const conteudoArquivo = await fsPromises.readFile(caminhoArquivo, 'utf-8');
          const { informacao, conteudo } = grayMatter(conteudoArquivo);

          const postId = parse(nomeArquivo).name;

          return {
            id: postId,
            ...informacao,
            conteudo,
          };
        }
      })
    );

    // Filter out null values
    const postagens = dados.filter((postagem) => postagem !== null);

    return NextResponse.json({ postagens });
  } catch (error) {
    console.error('Erro ao obter as postagens:', error);
    return NextResponse.json(
      { Erro: 'Erro ao obter as postagens!' },
      { status: 500 }
    );
  }
}
