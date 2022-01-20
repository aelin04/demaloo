// Components
import React, { useEffect, useState } from 'react'
import { Htag } from '../../components/Htag/Htag'
import { P } from '../../components/P/P'
import { Button } from '../../components/Button/Button'

// Styles
import styles from "./Activity.module.css"
import Image from 'next/image'

export const Activity = () => {
    const [pagination, setPagination] = useState(styles.pagination)
    const [firstColor, setFirstColor] = useState(styles.blue)
    const [secondColor, setSecondColor] = useState(styles.gray)
    const [thirdColor, setThirdColor] = useState(styles.gray)

    const listenScrollEvent = (event) => {
        if (window.scrollY < 1400) {
            setFirstColor(styles.blue)
            setSecondColor(styles.gray)
            setThirdColor(styles.gray)
        } else if (window.scrollY < 2300) {
            setFirstColor(styles.gray)
            setSecondColor(styles.blue)
            setThirdColor(styles.gray)

        } else {
            setFirstColor(styles.gray)
            setSecondColor(styles.gray)
            setThirdColor(styles.blue)

        }

    }


    useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent);

        return () =>
            window.removeEventListener('scroll', listenScrollEvent);
    }, []);

    return (
        <div className={styles.page}>
            <div className={styles.pagination}>
                <div className={firstColor}></div>
                <div className={secondColor}></div>
                <div className={thirdColor}></div>
            </div>
            <div>
                <div className={styles.activity}>
                    <div className={styles.div}>
                        <div className={styles.ecosystem}>
                            <div className={styles.ecosystem__info}>
                                <Htag appearance="black" tag="h3">Направление деятельности</Htag>
                                <Htag appearance="black" tag="h4">Экосистема</Htag>
                                <P size="l" appearance="black">Строим стартап нацию, развиваем экосистему. </P>
                                <Button appearance="ghost">Узнай больше</Button>
                                <div className={styles.vector}><Image src='/static/images/vector.svg' width={30} height={85} />
                                </div>
                                </div>
                            <div className={styles.ecosystem__bottom}>
                            </div>
                        </div>
                        <div className={styles.img}>
                            <div className={styles.gray__background}></div>
                            <div><Image src='/static/images/kapital.jpg' alt='Picture of the author' width={443} height={559} /></div>
                        </div>
                    </div>
                </div>

                <div className={styles.activity}>
                    <div className={styles.div}>
                        <div className={styles.ecosystem}>
                            <div className={styles.ecosystem__info}>
                                <Htag appearance="black" tag="h3">Человеческий капитал</Htag>
                                <P size="l" appearance="black">Развиваем и инвестируем в человеческий капитал смелых людей для лучшего будущего.</P>
                                <Button appearance="ghost">Узнай больше</Button>
                                <div className={styles.vector}><Image src='/static/images/vector.svg' width={30} height={85} />
                                </div>
                                </div>
                        </div>
                        <div className={styles.img}>
                            <div className={styles.gray__background}></div>
                            <div><Image src='/static/images/ecosystem.jpg' alt='Picture of the author' width={443} height={559} /></div>
                        </div>
                    </div>
                </div>
                
                <div className={styles.activity}>
                    <div className={styles.div}>
                        <div className={styles.ecosystem}>
                            <div className={styles.ecosystem__info}>
                                <Htag appearance="black" tag="h3">Инвестиции</Htag>
                                <P size="l" appearance="black">Помогаем смелым людям строить легендарные компании.</P>
                                <Button appearance="ghost">Узнай больше</Button>
                                <div  className={styles.vector}><Image src='/static/images/vector.svg' width={30} height={85} />
                                </div>
                            </div>
                        </div>
                        <div className={styles.img}>
                            <div className={styles.gray__background}></div>
                            <div><Image src='/static/images/investments.jpg' alt='Picture of the author' width={443} height={559} /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
