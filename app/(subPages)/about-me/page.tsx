"use server"
import React from 'react'
import AboutMeText from "@/components/AboutMe/AboutMeText";

async function Page() {
    return (
        <div className={"flex items-center content-center justify-center mt-10"}>
            <AboutMeText className={"w-3/5  min-h-full"}/>
        </div>
    )
}

export default Page
