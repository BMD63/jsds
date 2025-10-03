import Link from 'next/link'

export default function Navigation() {
  return (
    <div className="navi">
      <div className="menubg">
        <ul className="menu">
          <li><Link href="#home">Главная</Link></li>
          <li><Link href="#gallery">Галерея</Link></li>
          <li><Link href="/maincalc">Калькулятор</Link></li>
          <li><Link href="/conditions">Условия работы</Link></li>
          <li><Link href="/news">Новости</Link></li>
          <li><Link href="#contacts">Контакты</Link></li>
        </ul>
      </div>
    </div>
  )
}