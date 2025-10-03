import Link from 'next/link'

export default function Gallery() {
  return (
    <section className="samples" id="gallery">
      <div className="linetop"></div>
      <h1>Галерея работ</h1>
      <div className="line"></div>
      <div className="pictures">
        <div className="row">
          <img src="/sample1.png" alt="interior" />
          <img src="/sample2.png" alt="interior" />
          <img src="/sample3.png" alt="interior" />
        </div>
        <div className="row">
          <img src="/sample4.png" alt="interior" />
          <img src="/sample5.png" alt="interior" />
          <img src="/sample6.png" alt="interior" />
        </div>
        <div className="links1 links">
          <a href="https://www.behance.net/gallery/142737569/Quadro-House" target="_blank" rel="noopener noreferrer">
            Сблокированный дом на 4 семьи
          </a>
          <a href="https://www.behance.net/gallery/101815175/Country-villa" target="_blank" rel="noopener noreferrer">
            Загородный коттедж
          </a>
          <a href="https://www.behance.net/gallery/102838085/House-on-the-fjords" target="_blank" rel="noopener noreferrer">
            Коттедж на горном склоне
          </a>
        </div>
        <div className="links2 links">
          <a href="https://www.behance.net/gallery/126844951/Hotel-room" target="_blank" rel="noopener noreferrer">
            Дизайн интерьера номера в отеле
          </a>
          <a href="https://www.behance.net/gallery/126845991/Apartment-interior-design" target="_blank" rel="noopener noreferrer">
            Дизайн интерьера квартиры в Москве
          </a>
          <a href="https://www.behance.net/gallery/139257881/Interior-design" target="_blank" rel="noopener noreferrer">
            Интерьер двухуровневой квартиры в историческом здании в центре
          </a>
        </div>
      </div>
      <Link href="/maincalc" className="tocalc">Узнать стоимость</Link>
    </section>
  )
}