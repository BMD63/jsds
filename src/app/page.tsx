import Header from '@/components/layout/Header'
import Navigation from '@/components/layout/Navigation'
import Link from 'next/link'
import Image from 'next/image'
import About from '@/components/section/About'
import Gallery from '@/components/section/Gallery'
import Profile from '@/components/section/Profile'
import Contacts from '@/components/section/Contacts'
import CTAButton from '@/components/ui/CTAButton'

export default function Home() {
  return (
    <div className="container">
      <Header />
      <Navigation />
      
      <section id="home">
        <div className="offer">
          <div className="offertext">
            <h1>Архитектурные проекты<br />быстро и просто</h1>
            <h3>Выполним архитектурные проекты<br />
              дизайна интерьера или самого здания, <br />
              в удобной для вас форме и в короткие сроки.
            </h3>
          </div>
          <Image src="/discount.png" alt="Скидка" width={200} height={200} />
          <CTAButton href="/maincalc">Узнать стоимость</CTAButton>
        </div>
      </section>

      <article className="infoblock">
        <About />
        <Gallery />
        <Profile />
      </article>

      <footer>
        <Contacts />
      </footer>
    </div>
  )
}