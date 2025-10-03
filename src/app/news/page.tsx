import Link from 'next/link'
import Image from 'next/image'
import { newsItems } from '@/data/news'

export default function News() {

  return (
     <>
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
      </>
  )
}