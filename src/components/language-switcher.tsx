"use client"
import {Languages} from "lucide-react"
import {Button} from "@/components/ui/button"
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu"
import {useTranslation, Language} from "@/lib/i18n/provider"
const languages: {code: Language; label: string}[] = [
    {code: 'ru', label: 'Русский'},
    {code: 'en', label: 'English'},
    {code: 'kz', label: 'Қазақша'}
]
export function LanguageSwitcher() {
    const {language, setLanguage} = useTranslation();
    return(
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                    <Languages className="w-[1.2rem] h-[1.2rem]"/>
                    <span className="sr-only">Сменить язык</span>
                    <span className="absolute -top-1 -right-1 flex w-5 h-5 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground font-bold">{language.toUpperCase()}</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                {languages.map((lang) => (
                    <DropdownMenuItem key={lang.code} onClick={() => setLanguage(lang.code)} className={language === lang.code ? "bg-accet" : ""}>
                        {lang.label}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}