"use server"
import React from 'react'
import AboutMeText from "@/components/AboutMe/AboutMeText";

async function Page() {
    return (
        <div className={"flex justify-center items-center justify-content-center"}>
            <AboutMeText className={"w-3/5  min-h-full"}/>
        </div>
    )
}

export default Page
