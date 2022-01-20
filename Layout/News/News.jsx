// Components
import Image from 'next/image'
import React from 'react'
import { Htag } from '../../components/Htag/Htag'
import { P } from '../../components/P/P'

// Styles
import styles from "./News.module.css"


export const News = ({news}) => {

    console.log(news);
    return (
        <div className={styles.news}>
            <div className={styles.title}>
                <Htag tag="h2" appearance="white">Новости</Htag>
                <div className={styles.border}></div>
            </div>

            <div className={styles.h__scroll}>
                <div className={styles.new__wrapper}>
                    <Image className={styles.news__img} src="/static/images/building.jpg" width={266} height={178} />
                    <Htag tag="h5" appearance="white">Lorem Ipsum</Htag>
                    <P size="xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus cursus etiam fermentum ornare sem elementum tempor.</P>
                    <a href='#' target="_blank">Узнать больше <Image src="/static/images/arrow_right.svg" width={18} height={18} /></a>
                </div>

                <div className={styles.new__wrapper}>
                    <Image className={styles.news__img} src="/static/images/building.jpg" width={266} height={178} />
                    <Htag tag="h5" appearance="white">Lorem Ipsum</Htag>
                    <P size="xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus cursus etiam fermentum ornare sem elementum tempor.</P>
                    <a href='#' target="_blank">Узнать больше <Image src="/static/images/arrow_right.svg" width={18} height={18} /></a>
                </div>

                <div className={styles.new__wrapper}>
                    <Image className={styles.news__img} src="/static/images/building.jpg" width={266} height={178} />
                    <Htag tag="h5" appearance="white">Lorem Ipsum</Htag>
                    <P size="xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus cursus etiam fermentum ornare sem elementum tempor.</P>
                    <a href='#' target="_blank">Узнать больше <Image src="/static/images/arrow_right.svg" width={18} height={18} /></a>
                </div>

                <div className={styles.new__wrapper}>
                    <Image className={styles.news__img} src="/static/images/building.jpg" width={266} height={178} />
                    <Htag tag="h5" appearance="white">Lorem Ipsum</Htag>
                    <P size="xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus cursus etiam fermentum ornare sem elementum tempor.</P>
                    <a href='#' target="_blank">Узнать больше <Image src="/static/images/arrow_right.svg" width={18} height={18} /></a>
                </div>

                <div className={styles.new__wrapper}>
                    <Image className={styles.news__img} src="/static/images/building.jpg" width={266} height={178} />
                    <Htag tag="h5" appearance="white">Lorem Ipsum</Htag>
                    <P size="xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus cursus etiam fermentum ornare sem elementum tempor.</P>
                    <a href='#' target="_blank">Узнать больше <Image src="/static/images/arrow_right.svg" width={18} height={18} /></a>
                </div>

                <div className={styles.new__wrapper}>
                    <Image className={styles.news__img} src="/static/images/building.jpg" width={266} height={178} />
                    <Htag tag="h5" appearance="white">Lorem Ipsum</Htag>
                    <P size="xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus cursus etiam fermentum ornare sem elementum tempor.</P>
                    <a href='#' target="_blank">Узнать больше <Image src="/static/images/arrow_right.svg" width={18} height={18} /></a>
                </div>


            </div>
        </div>
    )
}
