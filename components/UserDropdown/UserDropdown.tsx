import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {Session} from "next-auth"
import Link from "next/link";
import {SquareTerminal} from "lucide-react";

interface UserDropdownProps {
    session?: Session | null,
    triggerClass?: string,
}

export default function UserDropdown({session, triggerClass}: UserDropdownProps) {
    return (
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <div className={triggerClass}>
                        <p>Admin</p>
                    </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className={``}>
                    <DropdownMenuLabel>{session?.user?.name}</DropdownMenuLabel>
                    <Link href={"/admin/dashboard"}>
                        <DropdownMenuItem>
                            <div className={"flex justify-between"}>
                                <SquareTerminal />
                                <p>Dashboard</p>
                            </div>
                        </DropdownMenuItem>
                    </Link>
                </DropdownMenuContent>
            </DropdownMenu>

    )
}


