// Components
import React from 'react'
import { Htag } from '../Htag/Htag'
import { P } from '../P/P'
import {Input} from '../Input/Input'
import { Button } from '../Button/Button'

// Styles
import styles from "./Modal.module.css"

export const Modal = ({active, setActive}) => {
    return (
        <div className={active ? styles.module_active : styles.module} onClick={() => setActive(false)}>
           <div className={styles.modal__content} onClick={e => e.stopPropagation()}>
           <Htag tag="h3" appearance="black">Оставить заявку</Htag>
            <P size="xs" appearance="black">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</P>
            <div className={styles.submit__forms}>
                <div className={styles.FIO}>
                    <span>ФИО</span>
                    <Input appearance="small">Введите ваши данные</Input>
                </div>
                <div className={styles.FIO}>
                    <span>Email</span>
                    <Input>Введите свою почту</Input>
                </div>
                <div className={styles.FIO}>
                    <span>Опишите свою идею</span>
                    <Input>Опишите в кратце что вы хотите сделать...</Input>
                </div>
                <Button appearance="gray">Отправить заявку</Button>
            </div>
           </div>
        </div>
    )
}
