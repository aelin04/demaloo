// Components
import Image from 'next/image'
import React from 'react'
import { useState } from 'react/cjs/react.development'
import { Htag } from '../../components/Htag/Htag'


// Styles
import styles from "./Team.module.css"

export const Team = () => {
    const [team, setTeam] = useState([
        {
            name: "Иминов Ахрор Хикматиллаевич",
            position: "Основатель фонда",
            img: "../../static/images/ahror.jpg",
            about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo gravida aliquet vitae, non amet nec sed ornare. Cursus quis ultrices quis amet, nunc. Adipiscing eget id integer cursus."
        },
        {
            name: "Нуртилек Бейше Уулу",
            position: "IT-специалист",
            img: "../../static/images/nurtilek.jpg",
            about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo gravida aliquet vitae, non amet nec sed ornare. Cursus quis ultrices quis amet, nunc. Adipiscing eget id integer cursus."
        },
    ])

    return (
        <div className={styles.team}>
            <Htag tag="h2" appearance="white">Команда</Htag>
            <div >
                <div className={styles.teammates}>
                    {team.map(i => (
                        <>
                            <Image src="/static/images/quotes.svg" width={50} height={38} />
                            <Htag tag="h4" appearance="white">{i.name}</Htag>
                        </>
                    ))}
                </div>
            </div>
        </div>
    )
}
