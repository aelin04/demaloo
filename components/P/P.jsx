//Components
import React from 'react'
import cn from "classnames"

// Styles
import styles from "./P.module.css"

export const P = ({children, className, appearance, size}) => {
    return <p className={cn(styles.p, className, {
        [styles.l]: size == "l",
        [styles.m]: size == "m",
        [styles.s]: size == "s",
        [styles.xs]: size == "xs",
        [styles.black]: appearance == "black",
        [styles.white]: appearance == "white",
    })}>{children}</p>
}
