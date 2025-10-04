import Link from 'next/link'
import styles from './news.module.css'
import { newsItems } from '@/data/news'

export default function News() {

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Новости</h1>
      
      <div className={styles.newsGrid}>
        {newsItems.map((news) => (
          <article key={news.id} className={styles.newsCard}>
            <div className={styles.imageContainer}>
              <img 
                src={news.image} 
                alt={news.title}
                className={styles.newsImage}
              />
            </div>
            
            <div className={styles.newsContent}>
              <div className={styles.date}>
                {news.date}
              </div>
              <h3 className={styles.newsTitle}>
                {news.title}
              </h3>
              <p className={styles.description}>
                {news.description}
              </p>
              <a 
                href={news.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.projectLink}
              >
                Смотреть проект
              </a>
            </div>
          </article>
        ))}
      </div>

      <section className={styles.ctaSection}>
        <Link href="/maincalc" className={`tocalc ${styles.ctaButton}`}>
          Заказать проект
        </Link>
      </section>
    </div>
  )
}