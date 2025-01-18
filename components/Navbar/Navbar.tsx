"use client"
import React from 'react'
import css from "./styles.module.css"
import Link from "next/link";
import Routes from "@/components/routes";

interface NavbarProps {
    invisible: boolean,
    className?: string | null,
}



function Navbar(
    {
        invisible = false,
        className = ""
    } : NavbarProps) {


    return (
        <div className={className + (`${!invisible ? "" : ""}`) }>
            <div className={"flex justify-between mx-2"}>
                <Link href={"/"}><p className={`${css.textShadow} text-2xl`}>TeekunDEV</p></Link>
                <ul className={"flex justify-center gap-2"}>
                {Routes.map((route) => {
                    return(
                            <Link href={route.route} className={""} key={route.title}>
                                <li>{route.title}</li>
                            </Link>
                    )
                })}
                </ul>
            </div>
        </div>
    )
}

export default Navbar
