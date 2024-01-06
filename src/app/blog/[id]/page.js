import Article from '../../../components/pages/blog/Article';
import * as blog from '../../../components/utilities/postagensBlog';
import urlBase from '../../../components/utilities/urlBase';

/* export async function generateStaticParams() {
  const consulta = await fetch(`${urlBase()}/api/blog/posts`);
  const tipoConteudo = consulta.headers.get('Content-Type');

  if (tipoConteudo && tipoConteudo.includes('application/json')) {
    const { postagens } = await consulta.json();
    const indice = await postagens.map((postagem) => ({
      id: postagem.id,
    }))
    // console.log(indice);
    return indice
  } else {
    console.error('Tipo de conteúdo invalido da resposta da api');
  }  
} */

export async function generateStaticParams() {
  const postagens = await blog.todosPosts();
  const indice = await postagens.map((postagem) => ({
    id: postagem.id,
  }))
  // console.log(indice);
  return indice
}

export default async function BlogPost({params}) {
  const { id } = params
  const postagem = await blog.unicoPost(id)
  return (
    postagem && <Article data={ postagem }></Article>
  )
}