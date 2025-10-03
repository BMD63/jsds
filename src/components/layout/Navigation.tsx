'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

export default function Navigation() {

  const pathname = usePathname()
  const router = useRouter()

  const handleAnchorClick = (hash: string) => {
    if (pathname === '/') {
      const element = document.getElementById(hash.replace('#', ''))
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      router.push(`/${hash}`)
    }
  }

  return (
    <div className="navi">
      <div className="menubg">
        <ul className="menu">
          <li>
            <Link 
              href="/#home"
              onClick={(e) => {
                e.preventDefault()
                handleAnchorClick('#home')
              }}
            >
              Главная
            </Link>
          </li>
          <li>
            <Link 
              href="/#gallery"
              onClick={(e) => {
                e.preventDefault()
                handleAnchorClick('#gallery')
              }}
            >
              Галерея
            </Link>
          </li>
          <li><Link href="/maincalc">Калькулятор</Link></li>
          <li><Link href="/conditions">Условия работы</Link></li>
          <li><Link href="/news">Новости</Link></li>
          <li>
            <Link 
              href="/#contacts"
              onClick={(e) => {
                e.preventDefault()
                handleAnchorClick('#contacts')
              }}
            >
              Контакты
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}