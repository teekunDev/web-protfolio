"use server"
import React from 'react'
import Navbar from "@/components/Navbar/Navbar";

async function Layout({children} : Readonly<{children: React.ReactNode}>) {
    return (
        <div>
            <Navbar invisible={true} />
            {children}
        </div>
    )
}

export default Layout
