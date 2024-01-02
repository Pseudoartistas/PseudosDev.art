import { promises as fsPromises } from 'fs';
import { join } from 'path';
import { NextResponse } from 'next/server';

export async function GET(request) {
  try {
    // Caminho do diretório 'src/app' do seu projeto Next.js
    const appDirectory = join(process.cwd(), 'src', 'app');

    // Obtém informações sobre a estrutura de pastas do diretório 'src/app'
    const folderStructure = await getFolderStructure(appDirectory);

    // Retorna a estrutura de pastas como JSON
    return NextResponse.json({ folderStructure });
  } catch (error) {
    console.error('Erro ao obter a estrutura de pastas:', error);
    return NextResponse.json({ error: 'Erro ao obter a estrutura de pastas' }, { status: 500 });
  }
}

async function getFolderStructure(directory) {
  try {
    const items = await fsPromises.readdir(directory, { withFileTypes: true });
    const folderStructure = {};

    for (const item of items) {
      if (item.isDirectory()) {
        folderStructure[item.name] = await getFolderStructure(join(directory, item.name));
      } else {
        folderStructure[item.name] = 'Arquivo';
      }
    }

    return folderStructure;
  } catch (error) {
    throw new Error(`Erro ao obter a estrutura de pastas: ${error.message}`);
  }
}
