import Link from "next/link"

interface BreadcrumbsProps {
  items: {
    name: string
    path: string
  }[]
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <div className="mb-6 breadcrumbs">
      <ul>
        {items.map((item) => (
          <li key={item.name}>
            <Link href={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
