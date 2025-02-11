"use client"
import Image from "next/image";
import css from "./landingpage.module.css";
import {GithubIcon, InstagramIcon, LinkedinIcon} from "lucide-react";
import SocialMediaHandle from "@/components/SocialMediaHandle/SocialMediaHandle";
import Routes from "@/components/routes";
import Link from "next/link";



export default function Home() {

  return (
        <div className={css.content}>
            <div className="flex flex-col items-center mb-4">
                <Image
                    src="/me.jpg"
                    alt="TeekunDEV"
                    width={180}
                    height={180}
                    className={"rounded-xl border-2 border-fuchsia-300 shadow-lg"}
                />
                <h1 className={`font-bold text-4xl text-center text-white ${css.textShadow}`}>Robin Schunn</h1>
                <p className={`text-lg text-white ${css.textShadow}`}>TeekunDEV</p>
            </div>
            <div className={"flex flex-col content-center gap-2 items-center"}>
                <div className="flex flex-row space-x-4 gap-1 items-center content-center">
                    {Routes.map((route) => {
                        return (
                            <Link href={route.route} key={route.title}>
                                <button className={`${css.button}  items-center content-center flex`}>
                                    <p className={`${css.textShadow} min-[120px]:text-sm md:text-lg text-white`}>{route.title}</p>
                                </button>
                            </Link>
                        )
                    })}
                </div>
                <div className={"flex flex-row w-auto justify-center gap-1"}>
                    <SocialMediaHandle icon={GithubIcon} handleText={"@TeekunDEV"} href={"https://github.com/teekunDev"}/>
                    <SocialMediaHandle icon={InstagramIcon} handleText={"@kekkun_666"} href={"https://www.instagram.com/kekkun_666/"}/>
                    <SocialMediaHandle icon={LinkedinIcon} handleText={"@idk"} noText={true} href={"https://www.linkedin.com/in/robin-schunn-a76b342a9/"}/>
                </div>
            </div>
    </div>
  );
}
