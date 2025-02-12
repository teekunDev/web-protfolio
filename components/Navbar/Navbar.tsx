"use client"
import React from 'react'
import Link from "next/link";
import Routes from "@/components/routes";
import Image from "next/image";
import {Session} from "next-auth";
import UserDropdown from "@/components/UserDropdown/UserDropdown";

interface NavbarProps {
    invisible: boolean,
    className?: string | null,
    session: Session | null
}



function Navbar(
    {
        invisible = false,
        className = "",
        session = null,
    } : NavbarProps) {


    return (
        <div className={className + (`${!invisible ? "" : ""}`) }>
            <div className={"flex justify-between mx-2 items-center md:scale-100 sm:scale-75"}>

                <Link href={"/"}>
                    <div className={`flex justify-center gap-2 p-1 content-center items-center rounded-full`}>
                        <Image src={"/me.jpg"}
                               alt={"Homepage"}
                               className={"rounded-full"}
                               width={40}
                               height={20}/>
                        <p className={``}>TeekunDEV</p>
                    </div>
                </Link>
                <ul className={"flex justify-center gap-2"}>
                {Routes.map((route) => {
                    return(
                            <Link href={route.route} className={""} key={route.title}>
                                <li className={`hover:border-b-1 hover:border-pink-300 `}>{route.title}</li>
                            </Link>
                    )
                })}
                </ul>



            </div>
        </div>
    )
}

export default Navbar
