import urlBase from "./urlBase";

export async function todosPosts() {
    const caminho = `${urlBase()}/api/blog/posts/`;
    const resposta = await fetch(caminho);
    const { postagens } = await resposta.json();
    return postagens
}
export async function unicoPost(id) {
    const caminho = `${urlBase()}/api/blog/post/${id}`;
    const resposta = await fetch(caminho);
    const { postagem } = await resposta.json();
    return postagem
}

const postagensBlog = { todosPosts, unicoPost }
export default postagensBlog