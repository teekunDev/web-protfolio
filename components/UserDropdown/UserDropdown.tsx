import React from "react";
import {DropdownMenu} from "@radix-ui/react-dropdown-menu";
import {Session} from "next-auth";


interface UserDropdownProps {
    session: Session | null
}

const UserDropdown:React.FC<UserDropdownProps> = ({session}) => {


    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>

            </DropdownMenu.Trigger>
        </DropdownMenu.Root>
    )
}