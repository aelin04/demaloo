// Components
import React from 'react'
import Image from 'next/image'

// Styles
import styles from "./Header.module.css"


export const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                
                <Image
      src='/static/images/logo.svg'
      alt="Picture of the author"
      width={78}
      height={56}
    />
                </div>
            <ul className={styles.nav}>
                <li>О нас</li>
                <li>Контакты</li>
                <li>Проекты</li>
            </ul>
        </div>
    )
}
