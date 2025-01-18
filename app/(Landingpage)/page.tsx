"use client"
import Image from "next/image";
import css from "./landingpage.module.css";
import {GithubIcon, InstagramIcon, LinkedinIcon} from "lucide-react";
import SocialMediaHandle from "@/components/SocialMediaHandle/SocialMediaHandle";



export default function Home() {

  return (
        <div>
            <div className="flex justify-center items-center h-screen">
                <div className={"fixed"}>
                    <div className="flex flex-col items-center -z-10">
                        <Image
                            src="/me.jpg"
                            alt="TeekunDEV"
                            width={180}
                            height={180}
                            className={"rounded-xl border-2 border-fuchsia-300 shadow-lg"}
                        />
                        <h1 className={`font-bold text-4xl ${css.textShadow}`}>TeekunDEV</h1>
                        <p className={`text-lg ${css.textShadow}`}>Web Developer</p>
                    </div>
                    <div className={"flex flex-col content-center gap-2 items-center"}>
                        <div className="flex flex-row space-x-4 mt-4 gap-1 items-center content-center">
                            <button className={css.button}>
                                <p className={css.textShadow}>My Projects</p>
                            </button>
                            <button className={`items-center content-center ${css.button}`}>
                                <p className={css.textShadow}>About Me</p>
                            </button>
                        </div>
                        <div className={"flex flex-row w-auto justify-center gap-1"}>
                            <SocialMediaHandle icon={GithubIcon} handleText={"@TeekunDEV"} />
                            <SocialMediaHandle icon={InstagramIcon} handleText={"@kekkun_666"} />
                            <SocialMediaHandle icon={LinkedinIcon} handleText={"@idk"} noText={true} />
                        </div>
                    </div>
                </div>
            </div>
        </div>


  );
}
