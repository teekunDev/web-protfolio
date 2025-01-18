"use server"
import React from 'react'
import Navbar from "@/components/Navbar";
import css from "./landingpage.module.css"

async function Layout({children}: {children: React.ReactNode}) {
    return (
        <div className={css.gradient}>
            <div className={css.children}>
                {children}
            </div>
        </div>
    )
}

export default Layout
