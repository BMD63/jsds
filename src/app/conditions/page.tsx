import Link from 'next/link'

export default function Conditions() {
  return (
    <>
        <h1 style={{ textAlign: 'center', marginBottom: '2em' }}>Условия работы</h1>
        
        <section style={{ marginBottom: '3em' }}>
          <h2>Процесс сотрудничества</h2>
          <div className="line"></div>
          
          <div style={{ display: 'grid', gap: '2em', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            <div className="task">
              <h3>1. Консультация</h3>
              <p>Бесплатная первичная консультация для обсуждения ваших потребностей, идей и бюджета.</p>
            </div>
            
            <div className="task">
              <h3>2. Техническое задание</h3>
              <p>Составление детального технического задания на основе ваших требований и пожеланий.</p>
            </div>
            
            <div className="task">
              <h3>3. Эскизный проект</h3>
              <p>Разработка эскизного проекта с вариантами планировочных решений и концепций.</p>
            </div>
            
            <div className="task">
              <h3>4. Рабочий проект</h3>
              <p>Создание полного рабочего проекта со всеми чертежами и спецификациями.</p>
            </div>
            
            <div className="task">
              <h3>5. Согласование</h3>
              <p>Поэтапное согласование проекта и внесение корректировок по вашему желанию.</p>
            </div>
            
            <div className="task">
              <h3>6. Реализация</h3>
              <p>Поддержка на этапе реализации проекта и авторский надзор при необходимости.</p>
            </div>
          </div>
        </section>

        <section style={{ marginBottom: '3em' }}>
          <h2>Сроки выполнения</h2>
          <div className="line"></div>
          
          <div style={{ display: 'grid', gap: '1.5em', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
            <div style={{ padding: '1.5em', border: '1px solid #68aab5', borderRadius: '0.5em' }}>
              <h4>Эскизный проект</h4>
              <p><strong>5-10 рабочих дней</strong></p>
              <p>В зависимости от сложности объекта</p>
            </div>
            
            <div style={{ padding: '1.5em', border: '1px solid #68aab5', borderRadius: '0.5em' }}>
              <h4>Рабочий проект</h4>
              <p><strong>10-20 рабочих дней</strong></p>
              <p>После утверждения эскизного проекта</p>
            </div>
            
            <div style={{ padding: '1.5em', border: '1px solid #68aab5', borderRadius: '0.5em' }}>
              <h4>Дизайн-проект интерьера</h4>
              <p><strong>15-25 рабочих дней</strong></p>
              <p>Полный комплекс с визуализацией</p>
            </div>
          </div>
        </section>

        <section style={{ marginBottom: '3em' }}>
          <h2>Формы сотрудничества</h2>
          <div className="line"></div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1em' }}>
            <div style={{ padding: '1.5em', backgroundColor: '#f8f9fa', borderRadius: '0.5em' }}>
              <h4>Полный проект "под ключ"</h4>
              <p>Разработка проекта от концепции до рабочей документации с полным сопровождением.</p>
            </div>
            
            <div style={{ padding: '1.5em', backgroundColor: '#f8f9fa', borderRadius: '0.5em' }}>
              <h4>Этапное проектирование</h4>
              <p>Выполнение отдельных этапов проекта по вашему выбору.</p>
            </div>
            
            <div style={{ padding: '1.5em', backgroundColor: '#f8f9fa', borderRadius: '0.5em' }}>
              <h4>Консультации</h4>
              <p>Разовые консультации по конкретным вопросам проектирования.</p>
            </div>
          </div>
        </section>

        <section style={{ textAlign: 'center', marginTop: '3em' }}>
          <Link href="/maincalc" className="tocalc" style={{ fontSize: '1.2em', padding: '1em 2em' }}>
            Рассчитать стоимость проекта
          </Link>
        </section>
    </>
  )
}