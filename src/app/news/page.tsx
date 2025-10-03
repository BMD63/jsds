import Header from '@/components/layout/Header'
import Navigation from '@/components/layout/Navigation'
import Contacts from '@/components/section/Contacts'
import Link from 'next/link'
import Image from 'next/image'

export default function News() {
  const newsItems = [
    {
      id: 1,
      date: '15 Августа 2024',
      title: 'Завершили проект загородного коттеджа в Подмосковье',
      image: '/news1507.jpg',
      description: 'Полный архитектурный проект двухэтажного коттеджа с мансардой и гаражом.',
      link: 'https://www.behance.net/gallery/101815175/Country-villa'
    },
    {
      id: 2, 
      date: '5 Августа 2024',
      title: 'Новый дизайн интерьера апартаментов в Москве',
      image: '/news0508.jpg',
      description: 'Разработали современный дизайн интерьера для квартиры в центре Москвы.',
      link: 'https://www.behance.net/gallery/126845991/Apartment-interior-design'
    },
    {
      id: 3,
      date: '22 Июля 2024',
      title: 'Проект сблокированного дома на 4 семьи',
      image: '/news2207.jpg', 
      description: 'Уникальный проект таунхауса на 4 семьи с индивидуальными планировками.',
      link: 'https://www.behance.net/gallery/142737569/Quadro-House'
    },
    {
      id: 4,
      date: '8 Июля 2024',
      title: 'Дизайн номера в отеле премиум-класса',
      image: '/news0807.jpg',
      description: 'Разработали концепцию дизайна номеров для нового отеля в Сочи.',
      link: 'https://www.behance.net/gallery/126844951/Hotel-room'
    }
  ]

  return (
    <div className="container">
      <Header />
      <Navigation />
      
      <main style={{ padding: '2em', maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '2em' }}>Новости</h1>
        
        <div style={{ display: 'grid', gap: '3em' }}>
          {newsItems.map((news) => (
            <article 
              key={news.id}
              style={{
                display: 'grid',
                gridTemplateColumns: '300px 1fr',
                gap: '2em',
                alignItems: 'start',
                padding: '2em',
                backgroundColor: '#f8f9fa',
                borderRadius: '1em',
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
              }}
            >
              <div>
                <img 
                  src={news.image} 
                  alt={news.title}
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: '0.5em'
                  }}
                />
              </div>
              
              <div>
                <div style={{ color: '#68aab5', fontWeight: 'bold', marginBottom: '0.5em' }}>
                  {news.date}
                </div>
                <h3 style={{ marginBottom: '1em', color: '#003e50' }}>
                  {news.title}
                </h3>
                <p style={{ marginBottom: '1.5em', lineHeight: '1.6' }}>
                  {news.description}
                </p>
                <a 
                  href={news.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-block',
                    padding: '0.5em 1.5em',
                    backgroundColor: '#68aab5',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '0.3em',
                    fontWeight: 'bold'
                  }}
                >
                  Смотреть проект
                </a>
              </div>
            </article>
          ))}
        </div>

        <section style={{ textAlign: 'center', marginTop: '3em' }}>
          <Link href="/maincalc" className="tocalc" style={{ fontSize: '1.2em', padding: '1em 2em' }}>
            Заказать проект
          </Link>
        </section>
      </main>

      <footer>
        <Contacts />
      </footer>
    </div>
  )
}