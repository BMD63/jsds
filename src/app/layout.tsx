import './globals.css'
import Header from '@/components/layout/Header'
import Navigation from '@/components/layout/Navigation'
import Contacts from '@/components/section/Contacts'

export const metadata = {
  title: 'JS Design Studio',
  description: 'Дизайнерская студия',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <div className="container">
          <header>
            <Header />
          </header>
          <nav>
            <Navigation />
          </nav>
          <main>
            {children}
          </main>
          <footer>
            <Contacts />
          </footer>
        </div>
      </body>
    </html>
  )
}