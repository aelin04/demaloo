//Components
import React from 'react'
import cn from "classnames"

// Styles
import styles from "./Htag.module.css"

export const Htag = ({children, className, appearance, tag}) => {
    switch(tag) {
        case 'h1' : return <h1 className={cn(styles.h1, className, {
            [styles.black]: appearance == "black",
            [styles.white]: appearance == "white"
        })}>{children}</h1>;
        case 'h2' : return <h2 className={cn(styles.h2, className, {
            [styles.black]: appearance == "black",
            [styles.white]: appearance == "white"
        })}>{children}</h2>;
        case 'h3' : return <h3 className={cn(styles.h3, className, {
            [styles.black]: appearance == "black",
            [styles.white]: appearance == "white"
        })}>{children}</h3>;
        case 'h4' : return <h4 className={cn(styles.h4, className, {
            [styles.black]: appearance == "black",
            [styles.white]: appearance == "white"
        })}>{children}</h4>
        case 'h5' : return <h5 className={cn(styles.h5, className, {
            [styles.black]: appearance == "black",
            [styles.white]: appearance == "white"
        })}>{children}</h5>
        default : return <></>;
    }
}