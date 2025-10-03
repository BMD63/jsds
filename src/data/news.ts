export interface NewsItem {
  id: number
  date: string
  title: string
  image: string
  description: string
  link: string
}

export const newsItems: NewsItem[] = [
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