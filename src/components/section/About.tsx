import Link from 'next/link'

export default function About() {
  return (
    <section className="descrip">
      <div className="linetop"></div>
      <h1>О нас</h1>
      <div className="line"></div>
      <p>JSDS - это студия архитектурного дизайна с более чем 10-летним опытом работы в
        различных областях архитектуры и дизайна.
        JSDS разработала уникальный, оригинальный и качественный сервис по созданию
        проекта дома и/или интерьера для любого заказчика, в любой точке мира. 
        Эффективность и доступность являются важными состовляющими нашей работы.
      </p>
      <div className="tasks">
        <div className="task">
          <h3>Соcтавление технического задания на разработку проекта</h3>
        </div>
        <div className="task">
          <h3>Создание архитектурного проекта здания (АР)</h3>
        </div>
        <div className="task">
          <h3>Создание дизайн-проекта интерьера</h3>
        </div>
      </div>
      <Link href="/maincalc" className="tocalc">Узнать стоимость</Link>
    </section>
  )
}