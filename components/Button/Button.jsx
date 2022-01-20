//Components
import React from 'react'
import cn from "classnames"

// Styles
import styles from "./Button.module.css"

export const Button = ({children, className, appearance, onClick}) => {
    return <button onClick={() => onClick(true)} className={cn(styles.button, className, {
        [styles.ghost]: appearance == "ghost",
        [styles.gray]: appearance == "gray"
    })} >{children}</button>
}
