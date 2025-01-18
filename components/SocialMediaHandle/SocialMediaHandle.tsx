"use client"
import React, {FC, JSXElementConstructor} from 'react'
import {useState} from "react";
import styles from "./styles.module.css";


interface SocialMediaHandleProps {
    icon: JSXElementConstructor<any>,
    handleText: string
    noText?: boolean
}

const SocialMediaHandle:FC<SocialMediaHandleProps> = ({icon: Icon, handleText, noText}) => {
    const [handleVisible, setHandleVisible] = useState(false);
    const showText = !noText


    function handleMouseLeave() {
        setHandleVisible(false)
    }
    function handleMouseEnter() {
        setHandleVisible(true)
    }


    return (
        <>
            <button className={styles.button}  onMouseEnter={() => handleMouseEnter()} onMouseLeave={() => handleMouseLeave()}>
                <Icon size={16} />
                {(showText && handleVisible) &&
                    <p>{handleText}</p>
                }
            </button>
        </>
    )
}
export default SocialMediaHandle
