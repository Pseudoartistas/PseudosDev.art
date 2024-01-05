import remarkGfm from 'remark-gfm'
import Markdown from 'react-markdown';
import Image from "next/image"
import { inter, lora } from '../../../styles/fonts'
import * as ArticleAssets from './ArticleAssets'


export default function Article({ data }) {
  const MarkdownComponents = {
    p: paragraph => {
      const { node } = paragraph
  
      if (node.children[0].tagName === "img") {
        const image = node.children[0]
        const metastring = image.properties.alt
        const alt = metastring?.replace(/ *\{[^)]*\} */g, "")
        const metaWidth = metastring.match(/{([^}]+)x/)
        const metaHeight = metastring.match(/x([^}]+)}/)
        const width = metaWidth ? metaWidth[1] : "768"
        const height = metaHeight ? metaHeight[1] : "432"
        const isPriority = metastring?.toLowerCase().match("{priority}")
        const hasCaption = metastring?.toLowerCase().includes("{caption:")
        const caption = metastring?.match(/{caption: (.*?)}/)?.pop()
  
        return (
          <div className="postImgWrapper">
            <Image
              src={image.properties.src}
              width={width}
              height={height}
              className="postImg"
              alt={alt}
              priority={isPriority}
            />
            {hasCaption ? (
              <div className="caption" aria-label={caption}>
                {caption}
              </div>
            ) : null}
          </div>
        )
      }
      return <p>{paragraph.children}</p>
    },
    p(props) {
      const {node, ...rest} = props
      return <p className='hyphens-auto text-justify [word-spacing:-1px] indent-12' {...rest} />
    }
  }


  return (
    <section className="flex min-h-screen flex-col items-center justify-between gap-3 py-5">
      <div id='header-post' className="flex flex-col justify-center gap3">
        {<ArticleAssets.Categorias data={data?.categorias}/> }
        <h1 className={`text-center text-2xl font-black ${lora.className}`}>
          {data?.titulo}
        </h1>
        <div className="flex w-full flex-row justify-center gap-3">
          <div className="relative aspect-square h-10">
            <Image src={data?.origemImagem} fill alt="Imagem do autor ou setor." sizes='2.5em' className="rounded-full object-cover" />
          </div>
          <div className="flex flex-col justify-center">
            {<ArticleAssets.Autores data={{origem: data?.origem, autores: data?.autores}}/>}
            <ArticleAssets.DataHora data={{data: data?.data, hora: data?.hora}}/>
          </div>  
        </div>
      </div>
      <article className="flex h-full w-full flex-col gap-3 text-base px-20 max-md:px-2 py-5">
        <div className="relative aspect-video h-80">
          <Image src={data?.banner} fill alt="Banner do artigo" className="rounded-lg object-cover" />
        </div>
        {<Markdown remarkPlugins={[remarkGfm]} components={MarkdownComponents} className='prose prose-neutral dark:prose-invert prose-img:rounded-lg max-w-none'>
          {data?.content}
        </Markdown>}
      </article>
    </section>
  )
}