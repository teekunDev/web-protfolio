"use server"
import React from 'react'
import Navbar from "@/components/Navbar/Navbar";
import {auth} from "@/lib/auth";

async function Layout({children} : Readonly<{children: React.ReactNode}>) {
    const session = await auth()

    return (
        <div>
            <Navbar invisible={true} session={session}/>
            {children}
        </div>
    )
}

export default Layout
