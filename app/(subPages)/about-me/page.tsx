"use server"
import React from 'react'
import AboutMeText from "@/components/AboutMe/AboutMeText";
import bcryptjs from "bcryptjs";

async function Page() {
    const hash =  await bcryptjs.hashSync("JoeMama12", 8)
    console.log(hash)
    bcryptjs.compare("JoeMama123", hash, function (err, result){
        if (err) return console.log(err)
        console.log(result)
    });
    return (
        <div className={"flex items-center content-center justify-center mt-10"}>
            <AboutMeText className={"w-3/5  min-h-full"}/>
        </div>
    )
}

export default Page
