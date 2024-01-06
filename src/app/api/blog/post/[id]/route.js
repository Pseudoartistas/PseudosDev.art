import { promises as fsPromises } from 'fs';
import { join, parse } from 'path';
import grayMatter from 'gray-matter';
import { NextResponse } from 'next/server';
async function buscarPosts() {
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

  const postagens = dados.filter((postagem) => postagem !== null);
  return postagens
}

async function buscarPost(id) {
  const todasPostagens = await buscarPosts();
  return todasPostagens.find(postagem => postagem.id === id);
}

export async function GET(request, { params }) {
  try {
    const { id } = params;
    const postagem = await buscarPost(id);

    if (postagem) {
      return NextResponse.json({ postagem })
    } else {
      return NextResponse.json({ Erro: 'Esta postagem não existe!' }, { status: 404 })
    }
  }  catch (error) {
    console.error('Erro ao obter a postagem:', error);
    return NextResponse.json(
      { Erro: 'Erro ao obter a postagem!' },
      { status: 500 }
    );
  }
}