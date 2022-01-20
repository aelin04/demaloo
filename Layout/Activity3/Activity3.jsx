// Components
import React from 'react'
import { Htag } from '../../components/Htag/Htag'
import { P } from '../../components/P/P'
import { Button } from '../../components/Button/Button'

// Styles
import styles from "../Activity3/Activity3.module.css"
import Image from 'next/image'

export const Activity3 = () => {
    return (
        <div className={styles.activity}>
            <div className={styles.div}>
            <div className={styles.ecosystem}>
                <div className={styles.ecosystem__info}>
                    <Htag appearance="black" tag="h3">Инвестиции</Htag>
                    <P size="l" appearance="black">Помогаем смелым людям строить легендарные компании.</P>
                    <Button appearance="ghost">Узнай больше</Button>
                </div>
                <div className={styles.ecosystem__bottom}>
                    <div className={styles.pagination}><span></span></div>
                    <Image className={styles.vector} src='/static/images/vector.svg' width={30} height={50} />
                </div>
            </div>
            <div className={styles.img}>
            <div className={styles.gray__background}></div>
                <div><Image src='/static/images/investments.jpg' alt='Picture of the author' width={443} height={559} /></div>
            </div>
            </div>
        </div>
    )
}
