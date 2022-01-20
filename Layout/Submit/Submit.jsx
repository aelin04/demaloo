// components
import React from 'react'
import { Button } from '../../components/Button/Button'
import { Htag } from '../../components/Htag/Htag'
import { Input } from '../../components/Input/Input'
import { P } from '../../components/P/P'

// styles
import styles from "./Submit.module.css"

export const Submit = () => {
    return (
        <div className={styles.submit}>
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
            <div className={styles.submit__info}>
                <Htag tag="h3">Свяжитесь с нами</Htag>
                <P size="s">Если у Вас ещё остались вопросы, то оставьте Ваши контакты
                    в форме заявки и наш менеджер свяжется с Вами в близжайшее время.</P>
            </div>
        </div>
    )
}
