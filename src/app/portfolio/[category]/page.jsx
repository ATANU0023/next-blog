import React from 'react'
import styles from './page.module.css'
import Button from '@/components/Button.jsx/Button'
import Image from 'next/image'
import { items } from './data.js'
import { notFound } from 'next/navigation'

const getData = (cat) => {
  const data = items[cat]

  if (data) {
    
    return data
  }
    
  return notFound()
}

function Category({ params }) {
  const data = getData(params.category)
  
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.cat}</h1>
      {data.map((item) => (
        <div className={styles.item} key={item.id}>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
            <Button url="#" text="See More" />
          </div>
          <div className={styles.imgContent}>
            <Image className={styles.img} fill={true} src={item.image} alt={item.title}  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
          </div>
        </div>
      ))}
    </div>
  )
}

export default Category
