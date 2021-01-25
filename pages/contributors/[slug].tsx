import { ArticlesList } from '@components/article'
import { fetchAPI, getMediaURL } from '@lib/api'
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import ExternalLink from '@components/ui/Link/ExternalLink'
import Image from 'next/image'
import { Layout } from '@components/common/Layout'

export async function getStaticPaths() {
  // If you don't have too many contributors you can uncomment
  // this code and pre-build each page instead.

  // const slugs: TContributor[] = await fetchAPI('/contributors')
  // return {
  //   paths: slugs.map((contributor) => `/contributors/${contributor.slug}`),
  //   fallback: false,
  // }

  return {
    paths: [],
    fallback: 'blocking',
  }
}

export async function getStaticProps({
  params,
}: GetStaticPropsContext<{ slug: string }>) {
  const contributor: TContributor = (
    await fetchAPI(`/contributors?slug=${params?.slug}`)
  )[0]

  const articles: TArticle[] = await fetchAPI(
    `/articles?author.slug=${params?.slug}`
  )

  // No props will trigger a 404
  if (!contributor) return { props: {} }
  return { props: { contributor, articles } }
}

function ContributorPage({
  contributor,
  articles,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { isFallback } = useRouter()

  if (!isFallback && !contributor) {
    return <ErrorPage statusCode={404} />
  }

  // if featuared is diferent than undefined it will be true
  const isFeatured = !!contributor?.featured

  const thumbnailUrl = getMediaURL(
    contributor?.featured?.profile_image.formats.thumbnail?.url
  )

  return (
    <Layout>
      <section className="text-center py-10 border-b">
        {isFeatured && (
          <figure className="relative w-28 h-28 mx-auto mb-4">
            <Image
              src={thumbnailUrl}
              className="rounded-full"
              alt={`${contributor?.name} profile`}
              layout="fill"
            />
          </figure>
        )}
        <h3 className="serif text-3xl">{contributor?.name}</h3>
        <p className="capitalize text-secondary">{contributor?.role}</p>

        <p className="text-secondary capitalize">
          {articles?.length}{' '}
          {articles?.length === 1 ? 'Contribución' : 'Contribuciones'}
        </p>
        {contributor?.urls?.twitter && (
          <ExternalLink
            to={`https://twitter.com/${contributor?.urls.twitter}`}
            ariaLabel="Contributor's twitter"
            className="text-indigo-500"
          >
            @{contributor?.urls.twitter}
          </ExternalLink>
        )}
        {isFeatured && (
          <p className="text-left border-t border-dashed my-10 py-10 leading-tight">
            {contributor?.featured?.description}
          </p>
        )}
      </section>
      <ArticlesList articles={articles || []} title="Contribuciones" />
    </Layout>
  )
}

export default ContributorPage
