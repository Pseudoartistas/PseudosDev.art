import Link from 'next/link';
import * as blog from '../../components/utilities/postagensBlog';

export default async function Blog() {
  const postagens = await blog.todosPosts();

  return (
    <div>
      <h1>Todas as postagens</h1>
      <hr/>
      <div>
        {postagens.map(postagem => (
          <article key={postagem.id}>
            <Link href={`blog/${postagem.id}`}>
              <h2>{postagem.titulo}</h2>
            </Link>
            <p>{postagem.descricao}</p>
          </article>
        ))}
      </div>
    </div>
  );
}