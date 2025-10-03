import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <div className="header">
      <div className="name">
        <h1><strong>JSDS</strong> design</h1>
        <span>Студия архитектуры и дизайна Юлии Шадриной</span>
      </div>
      <div className="lang">
        <Link href="/lang">
          <Image src="/russia.png" alt="Русский" width={20} height={20} />
        </Link>
        <Link href="/lang">
          <Image src="/united_kingdom.png" alt="English" width={20} height={20} />
        </Link>
        <Link href="/lang">
          <Image src="/spain.png" alt="Español" width={20} height={20} />
        </Link>
      </div>
    </div>
  )
}