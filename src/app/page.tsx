'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import About from '@/components/section/About'
import Gallery from '@/components/section/Gallery'
import Profile from '@/components/section/Profile'
import CTAButton from '@/components/ui/CTAButton'

export default function Home() {

  const pathname = usePathname()

  useEffect(() => {
    if (pathname === '/') {
      window.scrollTo(0, 0)
    }
  }, [pathname])

  return (
    <div className="container"> 
      <section id="home">
        <div className="offer">
          <div className="offertext">
            <h1>Архитектурные проекты<br />быстро и просто</h1>
            <h3>Выполним архитектурные проекты<br />
              дизайна интерьера или самого здания, <br />
              в удобной для вас форме и в короткие сроки.
            </h3>
          </div>    
        </div>
        <div className = "ctaWrapper" >
          <CTAButton 
            href="/maincalc"
          >
            Узнать стоимость
          </CTAButton>
        </div>
        
      </section>
      <article className="infoblock">
        <About />
        <Gallery />
        <Profile />
      </article>
    </div>
  )
}