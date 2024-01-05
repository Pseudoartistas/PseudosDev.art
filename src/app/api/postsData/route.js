import { promises as fsPromises } from 'fs';
import { join, parse } from 'path';
import grayMatter from 'gray-matter';
import { NextResponse } from 'next/server';

export async function GET(request) {
  try {
    // Caminho do diretório 'src/posts' do seu projeto Next.js
    const postsDirectory = join(process.cwd(), 'src', 'posts');

    // Obtém informações sobre os arquivos na pasta 'src/posts'
    const fileNames = await fsPromises.readdir(postsDirectory);

    // Processa os metadados dos posts
    const posts = await Promise.all(fileNames.map(async (fileName) => {
      const filePath = join(postsDirectory, fileName);
      const fileContent = await fsPromises.readFile(filePath, 'utf-8');
      const { data, content } = grayMatter(fileContent);

      // Usa o nome do arquivo (sem extensão) como o ID do post
      const postId = parse(fileName).name;

      return {
        id: postId,
        ...data,
        content,
      };
    }));

    // Retorna os posts como JSON
    return NextResponse.json({ posts });
  } catch (error) {
    console.error('Erro ao obter os posts:', error);
    return NextResponse.json({ error: 'Erro ao obter os posts' }, { status: 500 });
  }
}
