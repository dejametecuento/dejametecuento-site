import Link from 'next/link'

const Contributor = ({ contributor }: { contributor: TContributor }) => {
  return (
    <Link href={`/contributors/${contributor.slug}`}>
      <li className="py-6 border-b cursor-pointer hover:opacity-70">
        <h4 className="serif text-lg">{contributor.name}</h4>
        <p className="text-xs capitalize text-primary-60">{contributor.role}</p>
      </li>
    </Link>
  )
}

export default Contributor
