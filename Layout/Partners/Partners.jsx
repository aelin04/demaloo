// Components
import Image from 'next/image'
import React from 'react'
import { Htag } from '../../components/Htag/Htag'

// styles
import styles from "./Partners.module.css"
export const Partners = () => {
    return (
        <div className={styles.partners}>
            <div className={styles.title}>
                <Htag tag="h2" appearence="black">Партнеры</Htag>
                <div className={styles.border}></div>
            </div>
            <div className={styles.logos}>
                <Image src="/static/images/сбер.png" width={330}
                    height={50} />
                <Image src="/static/images/42.png" width={80} height={80} />
                <div className={styles.sce}>
                    <Image src="/static/images/scelogo.png" width={45} height={45} />
                    <Image src="/static/images/sce.png" width={269} height={27} />
                </div>
            </div>
        </div>
    )
}
