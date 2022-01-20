//Components
import React from 'react'
import cn from "classnames"

// Styles
import styles from "./Input.module.css"

export const Input = ({children, type, className, appearance}) => {
    return <><input type="text" className={cn(styles.input, className, {
        [styles.small]: appearance == "small",
        [styles.big]: appearance == "big",
    })} placeholder={children}/>
    </> 
}
