import { Button } from '@components/ui/Button'
import { useRouter } from 'next/router'
import { Layout } from '@components/common/Layout'
import { Subheader } from '@components/common/Subheader'
import EmptyList from '@components/common/EmptyList'
import { ArticlesList } from '@components/article'
import { useList } from '@lib/hooks/use-list'

const ListsPage = () => {
  const router = useRouter()
  const { list } = useList()

  return (
    <Layout subheader={<Subheader title="Listas de lecturas" />}>
      {list && list.length !== 0 ? (
        <ArticlesList
          articles={list}
          variant="lists"
          title={
            list.length === 1
              ? `${list.length} Artículo`
              : `${list.length} Artículos`
          }
        />
      ) : (
        <>
          <EmptyList
            title="Aún no hay artículos guardados"
            description="  Explora la revista y guarda lo que quieras leer más tarde. Los
            artículos guardados también están disponibles sin conexión."
          />
          <Button
            className="bg-accent mt-6 mx-auto px-4 text-secondary"
            onClick={() => router.push('/')}
          >
            Regresar
          </Button>
        </>
      )}
    </Layout>
  )
}

export default ListsPage
