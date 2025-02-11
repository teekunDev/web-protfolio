"use client"
import React, {FC, JSXElementConstructor} from 'react'
import {useState} from "react";
import styles from "./styles.module.css";
import {LucideProps} from "lucide-react";


interface SocialMediaHandleProps {

    icon: JSXElementConstructor<LucideProps>,
    handleText: string,
    noText?: boolean,
    href?: string
}

const SocialMediaHandle:FC<SocialMediaHandleProps> = ({icon: Icon, handleText, noText, href}) => {
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
            <a href={href} rel={"noopener noreferrer"} target={"_blank"}>
                <button className={styles.button}  onMouseEnter={() => handleMouseEnter()} onMouseLeave={() => handleMouseLeave()}>
                    <Icon size={16} color={"white"} />
                    {(showText && handleVisible) &&
                        <p className={"text-white"}>{handleText}</p>
                    }
                </button>
            </a>
        </>
    )
}
export default SocialMediaHandle
