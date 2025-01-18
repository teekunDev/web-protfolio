"use client"
import React from 'react'

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
        <div className={className + (!invisible ? "bg-gray-200 border-b-2 border-b-cyan-300" : "") }>
            <div className={"flex justify-between mx-2"}>
                <p>TeekunDEV</p>
                <div>
                    <p>Projects</p>
                    <p>About Me</p>
                </div>
            </div>
        </div>
    )
}

export default Navbar
