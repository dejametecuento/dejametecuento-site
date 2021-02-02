import { Date } from '@components/ui/Date'
import { getMediaURL } from '@lib/api'
import Link from 'next/link'
import s from '../ArticleCard/ArticleCard.module.css'
import cn from 'classnames'
import Image from 'next/image'
import ArticleCardTop from '../ArticleCard/ArticleCardTop'
import ActionButtons from '../Article/ActionButtons'

const ArticlesHero = ({ articles }: { articles: TArticle[] }) => {
  return (
    <section className="mb-4 flex justify-between items-center py-16 border-b">
      <div style={{ width: '45%' }}>
        <article className={s.hero}>
          <Link href={`/articles/${articles[0].slug}`}>
            <figure>
              <Image
                src={getMediaURL(articles[0].cover.url)}
                alt={articles[0].cover.alternativeText || ''}
                layout="fill"
                className="object-cover"
              />
            </figure>
          </Link>

          <section className="pt-8">
            <Link href={`/${articles[0].category.slug}`}>
              <a className="uppercase text-sm font-bold px-2 py-1 text-accent border border-accent rounded-sm">
                {articles[0].category.title}
              </a>
            </Link>
            <Link href={`/articles/${articles[0].slug}`}>
              <h3
                className={cn(
                  s.title,
                  'serif leading-tight overflow-hidden max-h-28 mt-4 mb-2'
                )}
              >
                {articles[0].title}
              </h3>
            </Link>
            <div className="flex text-sm">
              By
              <Link href={`/contributors/${articles[0].author.slug}`}>
                <p className="pl-1 pr-2 font-bold">{articles[0].author.name}</p>
              </Link>
              {' | '}
              <Date
                className="px-2"
                date={articles[0].published_at as string}
              />
            </div>
          </section>
          <ActionButtons article={articles[0]} />
        </article>
      </div>

      <div style={{ width: '45%' }}>
        {articles.slice(0, 4).map((article, index) => (
          <ArticleCardTop
            article={article}
            index={index + 1}
            key={article.slug}
          />
        ))}
      </div>
    </section>
  )
}

export default ArticlesHero
