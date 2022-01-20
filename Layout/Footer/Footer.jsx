import Image from 'next/image'
import React from 'react'

// styles
import styles from "./Footer.module.css"

export const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.contacts}>
                    <Image src="/static/images/logo.svg" width={78} height={56} />
                    <div className={styles.contacts__info}>
                        <div className={styles.span}> <Image src="/static/images/location.svg" width={24}
                            height={24} /> <span>Ибраимова 115/1, Бишкек, Кыргызстан</span></div>
                        <div className={styles.span}> <Image src="/static/images/mail.svg" width={24} height={24} /> <span className={styles.email}>admin@gmail.com.kg</span></div>
                        <div className={styles.span}><Image src="/static/images/phone.svg" width={24} height={24} /> <span>+996 (550) 312-312</span></div>
                    </div>
                </div>
                <hr />
                <div >
                    <ul className={styles.nav}>
                        <li>Команда</li>
                        <li>Деятельность</li>
                        <li>Проекты</li>
                    </ul>
                </div>
                <hr />
                <div className={styles.bottom}>
                    <div className={styles.law}><Image src="/static/images/с.svg" width={24} height={24} /> <span>Все права защищены</span> </div>
                    <div className={styles.icons}>
                        <div className={styles.icon}>
                            <Image src="/static/images/telegram.svg"  width={24} height={24}/>
                        </div>
                        <div className={styles.icon}>
                            <Image src="/static/images/whats-app.svg" width={24} height={24} />
                        </div>
                        <div className={styles.icon}>
                            <Image src="/static/images/instagram.svg"  width={24} height={24}/>
                        </div>
                        <div className={styles.icon}>
                            {/* <Image src="/static/images/" /> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
