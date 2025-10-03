import Link from 'next/link'

export default function Contacts() {
  return (
    <section className="contacts" id="contacts">
      <div className="line2"></div>
      <div className="contactsblocks">
        <div className="address">
          <p><strong>Быстрые ссылки</strong></p>
          <p><Link href="#gallery">Галерея</Link></p>
          <p><Link href="/maincalc">Калькулятор</Link></p>
          <p><Link href="/conditions">Условия работы</Link></p>
          <p><Link href="#home">Наверх</Link></p>
        </div>
        <div className="address">
          <p><strong>Социальные сети</strong></p>
          <p><a href="https://www.facebook.com/JulArch27/" target="_blank" rel="noopener noreferrer">facebook</a></p>
          <p><a href="https://instagram.com/designer.shadrina?igshid=YmMyMTA2M2Y=" target="_blank" rel="noopener noreferrer">instagram</a></p>
          <p><a href="https://behance.net/jularche559" target="_blank" rel="noopener noreferrer">behance</a></p>
          <p><a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">pinterest</a></p>
        </div>
        <div className="address">
          <p><strong>Контакты</strong></p>
          <p>tel.<a href="tel:+79879440296" target="_blank" className="addr1"> +7 987 944 02 96</a></p>
          <p>telegram<a href="https://telegram.me/Julia_Shadrina_Design" target="_blank" className="addr1"> @Julia_Shadrina_Design</a></p>
          <p>watsapp<a href="https://wa.me/79879440296" target="_blank" className="addr1"> +7 987 944 02 96</a></p>
          <p>e-mail<a href="mailto:jularch27@gmail.com" target="_blank" className="addr1"> jularch27@gmail.com</a></p>
        </div>
      </div>
    </section>
  )
}