// components
import Image from 'next/image'
import React, { useState } from 'react'
import { Htag } from '../../components/Htag/Htag'
import { P } from '../../components/P/P'

// styles
import styles from "./Projects.module.css"

export const Projects = () => {
  const [title, setTitle] = useState("Проекты")
  const [info, setInfo] = useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut arcu ac quis et scelerisque. Integer suspendisse est etiam leo, eget. Faucibus amet massa est lorem nibh augue turpis orci. rhoncus, vivamus massa lectus quam eu. ")
  return (
    <div className={styles.projects}>
      <div className={styles.info}>
        <Htag tag="h2">{title}</Htag>
        <P size="m">{info}</P>
        <a href="#" target="_blank"><span className={styles.seeMore}>Подробнее</span> <Image src="/static/images/arrow.svg" width={20} height={7} /></a>
      </div>
      <div>
        <ul className={styles.nav}>
          <li className={styles.li} onClick={e => { setTitle("Школа 42"); }}><Htag tag="h5">Школа 42</Htag><Image src="/static/images/Line.svg" width={560} height={24} /> </li>
          <li className={styles.li} onClick={e => setTitle("Startup Nation")}><Htag tag="h5">Startup Nation</Htag> <Image src="/static/images/Line.svg" width={560} height={24} /></li>
          <li className={styles.li} onClick={e => setTitle("Онлайн курсы")}><Htag tag="h5">Онлайн курсы </Htag><Image src="/static/images/Line.svg" width={560} height={24} /></li>
          <li className={styles.li} onClick={e => { setTitle("Школа 42"); }}><Htag tag="h5">Школа 42</Htag><Image src="/static/images/Line.svg" width={560} height={24} /> </li>
          <li className={styles.li} onClick={e => setTitle("Startup Nation")}><Htag tag="h5">Startup Nation</Htag> <Image src="/static/images/Line.svg" width={560} height={24} /></li>
          <li className={styles.li} onClick={e => setTitle("Онлайн курсы")}><Htag tag="h5">Онлайн курсы </Htag><Image src="/static/images/Line.svg" width={560} height={24} /></li>
         </ul>
      </div>
    </div>
  )
}
