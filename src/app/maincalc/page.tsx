'use client'

import { useState } from 'react'
import Image from 'next/image'
import CTAButton from '@/components/ui/CTAButton'
import styles from './maincalc.module.css'

type ProjectType = 'architecture' | 'interior' | 'complex'
type HouseType = 'apartment' | 'cottage' | 'townhouse' | 'commercial'

export default function MainCalc() {
  const [projectType, setProjectType] = useState<ProjectType>('architecture')
  const [houseType, setHouseType] = useState<HouseType>('apartment')
  const [area, setArea] = useState<number>(50)
  const [rooms, setRooms] = useState<number>(1)
  const [floors, setFloors] = useState<number>(1)
  const [hasVisualization, setHasVisualization] = useState<boolean>(false)

  const calculatePrice = () => {
    let basePrice = 0
    
    switch (projectType) {
      case 'architecture':
        basePrice = 50000
        break
      case 'interior':
        basePrice = 30000
        break
      case 'complex':
        basePrice = 70000
        break
    }
    
    const houseMultiplier = {
      apartment: 1,
      cottage: 1.8,
      townhouse: 1.5,
      commercial: 2.2
    }
    
    const areaMultiplier = Math.sqrt(area / 50)
    const roomsPrice = (rooms - 1) * 5000
    const floorsPrice = (floors - 1) * 15000
    const visualizationPrice = hasVisualization ? 20000 : 0
    
    const totalPrice = Math.round(
      (basePrice * houseMultiplier[houseType] * areaMultiplier) + 
      roomsPrice + floorsPrice + visualizationPrice
    )
    
    return totalPrice
  }

  const totalPrice = calculatePrice()

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Калькулятор стоимости проекта</h1>
      
      <div className={styles.grid}>
        {/* Левая колонка - форма */}
        <div>
          <div className={styles.form}>
            <h3>Параметры проекта</h3>
            
            <div className={styles.formGroup}>
              <label className={styles.label}>Тип проекта:</label>
              <select 
                value={projectType}
                onChange={(e) => setProjectType(e.target.value as ProjectType)}
                className={styles.select}
              >
                <option value="architecture">Архитектурный проект</option>
                <option value="interior">Дизайн интерьера</option>
                <option value="complex">Комплексный проект</option>
              </select>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Тип объекта:</label>
              <select 
                value={houseType}
                onChange={(e) => setHouseType(e.target.value as HouseType)}
                className={styles.select}
              >
                <option value="apartment">Квартира</option>
                <option value="cottage">Коттедж</option>
                <option value="townhouse">Таунхаус</option>
                <option value="commercial">Коммерческий</option>
              </select>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Площадь: {area} м²</label>
              <input 
                type="range" 
                min="20" 
                max="500" 
                value={area}
                onChange={(e) => setArea(Number(e.target.value))}
                style={{ width: '100%' }}
              />
              <div className={styles.rangeLabels}>
                <span>20 м²</span>
                <span>500 м²</span>
              </div>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Количество комнат: {rooms}</label>
              <input 
                type="range" 
                min="1" 
                max="10" 
                value={rooms}
                onChange={(e) => setRooms(Number(e.target.value))}
                style={{ width: '100%' }}
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Этажность: {floors}</label>
              <input 
                type="range" 
                min="1" 
                max="5" 
                value={floors}
                onChange={(e) => setFloors(Number(e.target.value))}
                style={{ width: '100%' }}
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.checkboxLabel}>
                <input 
                  type="checkbox" 
                  checked={hasVisualization}
                  onChange={(e) => setHasVisualization(e.target.checked)}
                  className={styles.checkbox}
                />
                <span className={styles.label}>3D визуализация</span>
              </label>
            </div>
          </div>
        </div>

        {/* Правая колонка - результат */}
        <div>
          <div className={styles.result}>
            <h2>Примерная стоимость</h2>
            <div className={styles.price}>
              {totalPrice.toLocaleString()} ₽
            </div>
            <p className={styles.disclaimer}>
              *Окончательная стоимость рассчитывается индивидуально после консультации
            </p>
            
            <div className={styles.buttons}>
              <a 
                href="https://t.me/Julia_Shadrina_Design"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.buttonPrimary}
              >
                <Image 
                  src="/telega_icon.png" 
                  alt="Telegram" 
                  width={20} 
                  height={20}
                />
                Написать в Telegram
              </a>
              <a 
                href="tel:+79879440296"
                className={styles.buttonSecondary}
              >
                Позвонить
              </a>
            </div>
          </div>

          <div style={{ marginTop: '2em', textAlign: 'center' }}>
            <CTAButton href="/conditions">
              Подробнее об условиях работы
            </CTAButton>
          </div>
        </div>
      </div>
    </div>
  )
}