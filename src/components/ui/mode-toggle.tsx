"use client"
import {MoonIcon, SunIcon} from "lucide-react"
import {useTheme} from "next-themes"
import {Button} from "@/components/ui/button"
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu"
export function ModeToggle() {
    const {setTheme} = useTheme()
    return(
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="w-8 h-8 px-0">
                    <SunIcon className="w-[1.2rem] h-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"/>
                    <MoonIcon className="absolute w-[1.2rem] h-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"/>
                    <span className="sr-only">Переключить тему</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>Светлая</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>Тёмная</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}