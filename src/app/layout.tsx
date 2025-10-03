import './globals.css'

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
      <body>{children}</body>
    </html>
  )
}