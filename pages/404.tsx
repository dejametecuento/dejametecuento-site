import Link from 'next/link'

export default function custom404() {
  return (
    <section className="w-screen h-screen flex flex-col">
      <Link href="/">
        <a className="block w-max serif my-6 mx-auto text-xl">
          Déjame te Cuento
        </a>
      </Link>

      <div className="w-9/12 text-center block mt-1/3 mx-auto lg:mt-28">
        <h1 className="text-8xl my-8 text-blue-light">
          4<span className="text-blue opacity-80">0</span>4
        </h1>
        <p className="font-bold text-lg">Página no encontrada :c</p>
        <span className="text-primary-300 text-sm">
          Revisa la url o intenta de nuevo
        </span>
      </div>
    </section>
  )
}
