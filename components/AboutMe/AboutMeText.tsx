"use client"
import React, {FC, useState} from 'react'
import {AboutMe, Languages} from "@/components/AboutMe/values";
import Image from "next/image";

interface AboutMeTextProps {
    className?: string
}

const AboutMeText:FC<AboutMeTextProps> = ({className}) => {
    const languages = Languages

    const [selectedLang, setLang] = useState("en")

    const texts = selectedLang === "en" ? AboutMe.en : AboutMe.de


    return (
        <div className={className}>
            <div className={"flex flex-col items-end rounded"}>
                <div className={"flex justify-center gap-2"}>
                    <p>{selectedLang === "de" ? "Sprache auswählen" : "Select language"}</p>
                    <select name={"language"}
                            defaultValue={"en"}
                            className={`w-32 bg-slate-500 rounded-lg p-0.5 bg-opacity-20 bg-gray-400 mb-2 text-center border-2 border-gray-300 border-opacity-25`}
                            onChange={(e) => setLang(e.target.value)}>
                        {languages.map((lang) => {
                            return (
                                <option value={lang.languageCode} key={lang.languageCode}>{lang.language}</option>
                            )
                        })}
                    </select>
                </div>


                <div className={`md:flex gap-2 backdrop-blur-sm bg-gray-400 bg-opacity-20 content-center items-center`}>
                    <Image src={"/me.jpg"} alt={"Portrait"} width={80} height={80} className={`w-1/4 m-2 grow`}/>
                    <ul>
                        {texts.split("\n\n").map((text, index) => {
                            return (
                                <li className={`w-fit block mr-2`} key={index}>{text}</li>

                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default AboutMeText
