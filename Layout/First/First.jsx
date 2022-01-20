import React from 'react'
import {Htag}  from "../../components/Htag/Htag"
import {P} from "../../components/P/P"
import {Button} from "../../components/Button/Button"


import styles from "./First.module.css"
import { Modal } from '../../components/Modal/Modal'
import { useState } from 'react/cjs/react.development'

export const First = () => {
    const [modalActive, setModalActive] = useState(true)
    return (
        <div className={styles.first}>
            <div>
                <Htag  tag="h1" appearance="white">Фонд Развития IT</Htag>
                <P className={styles.first__p} size="l" appearance="white" >Мы помогаем строить стартап единороги в Кыргызстане.</P>
                <Button onClick={setModalActive} appearance="ghost">Оставить заявку</Button>
            </div>
            {/* <img src="../../public/firstImg.jpg" alt="Line" /> */}
            <Modal active={modalActive} setActive={setModalActive}/>
        </div>
    )
}
