"use client"
import Link from "next/link"
import {useAuth} from "@/hooks/use-auth"
import {Sun, Home, Scroll, Guitar, Anchor, Pill, Box, User, Menu, Crown, Gamepad2, ChevronDown, Search} from "lucide-react"
import {SearchBar} from "@/components/search-bar"
import {Button} from "@/components/ui/button"
import {ModeToggle} from "@/components/ui/mode-toggle"
import {Sheet, SheetContent, SheetTrigger, SheetTitle} from "@/components/ui/sheet"
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu"
import * as VisuallyHidden from "@radix-ui/react-visually-hidden"
import {LanguageSwitcher} from "@/components/language-switcher"
export default function Header() {
    const {user, logout} = useAuth()
    const colorMap: Record<string, string> = {
        "/everlasting-summer": "group-hover:text-green-600",
        "/everlasting-summer-2": "group-hover:text-green-400",
        "/love-money-rocknroll": "group-hover:text-purple-600",
        "/minecraft": "group-hover:text-lime-600",
        "/one-piece": "group-hover:text-orange-600",
        "/schedule-I": "group-hover:text-emerald-700"
    }
    const gameItems = [
        {href: "/everlasting-summer", icon: <Sun className="w-4 h-4"/>, label: "Бесконечное Лето"},
        {href: "/everlasting-summer-2", icon: <Sun className="w-4 h-4"/>, label: "Бесконечное Лето 2"},
        {href: "/love-money-rocknroll", icon: <Guitar className="w-4 h-4"/>, label: "Любовь, Деньги, Рок-н-Ролл"},
        {href: "/minecraft", icon: <Box className="w-4 h-4"/>, label: "Minecraft"},
        {href: "/schedule-I", icon: <Pill className="w-4 h-4"/>, label: "Schedule-I"}
    ]
    const navItems = [
        {href: "/one-piece", icon: <Anchor className="w-4 h-4"/>, label: "One Piece"}
    ]
    const GameDropdown = () => (
        <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-2 text-sm font-medium hover:text-primary hover:bg-secondary/40 px-2 py-1 rounded-md transition-colors outline-none">
                <Gamepad2 className="w-4 h-4"/>Игры
                <ChevronDown className="w-3 h-3 opacity-60"/>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
                {gameItems.map((game) => (
                    <DropdownMenuItem key={game.href} asChild>
                        <Link href={game.href} className="group flex items-center gap-2 w-full text-sm font-medium text-foreground transition-colors">
                            <span className={`transition-colors ${colorMap[game.href] ?? "group-hover:text-primary"}`}>{game.icon}</span>
                            <span className={`transition-colors ${colorMap[game.href] ?? "group-hover:text-primary"}`}>{game.label}</span>
                        </Link>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
    return(
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between">
                <Link href="/" className="flex items-center gap-2 font-bold text-xl text-primary hover:opacity-80 transition-colors">
                    <Scroll className="w-6 h-6"/>
                    <span className="hidden sm:inline">WikiVerse</span>
                </Link>
                <nav className="hidden md:flex items-center gap-6 flex-1 justify-end">
                    <SearchBar/>
                    <div className="flex items-center gap-6 ml-6">
                        <Link href="/" className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors">
                            <Home className="w-4 h-4"/>Главная
                        </Link>
                        <GameDropdown/>
                        {navItems.map((item) => (
                            <Link key={item.href} href={item.href} className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors">
                                {item.icon}{item.label}
                            </Link>
                        ))}
                            <Link href="/subscribe" className="flex items-center gap-2 text-sm font-medium hover:text-yellow-500 hover:drop-shadow-[0_0_4px_rgba(234,179,8,0.6)]">
                                <Crown className="w-4 h-4 text-yellow-600"/>
                                <span className="hidden lg:inline">Premium Подписка</span>
                            </Link>
                    </div>
                </nav>
                <div className="flex items-center gap-2 md:ml-4">
                    {user ? (
                        <Link href="/profile">
                            <Button variant="ghost" size="icon" title="Профиль">
                                <User className="w-5 h-5"/>
                                <span className="sr-only">Профиль</span>
                            </Button>
                        </Link>
                    ) : (
                        <Link href="/auth/login">
                            <Button variant="ghost" size="icon" title="Войти">
                                <User className="w-5 h-5"/>
                                <span className="sr-only">Войти</span>
                            </Button>
                        </Link>
                    )}
                    <LanguageSwitcher/>
                    <ModeToggle/>
                    <div className="md:hidden">
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon">
                                    <Menu className="w-5 h-5"/>
                                    <span className="sr-only">Меню</span>
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                                <VisuallyHidden.Root>
                                    <SheetTitle>Меню навигации</SheetTitle>
                                </VisuallyHidden.Root>
                                <nav className="flex flex-col gap-2 mt-8">
                                    <Link href="/" className="flex items-center gap-4 text-lg font-medium hover:text-primary transition-colors p-2 rounded-md hover:bg-accent">
                                        <Home className="w-5 h-5"/>
                                        Главная
                                    </Link>
                                    <GameDropdown/>
                                    {navItems.map((item) => (
                                        <Link key={item.href} href={item.href} className="flex items-center gap-4 text-lg font-medium hover:text-primary transition-colors p-2 rounded-md hover:bg-accent">
                                            {item.icon}
                                            {item.label}
                                        </Link>
                                    ))}
                                    <Link href="/subscribe" className="flex items-center gap-4 text-lg font-medium text-yellow-600 hover:text-yellow-700 transition-colors p-2 rounded-md hover:bg-yellow-50 dark:hover:bg-yellow-950/20">
                                        <Crown className="w-5 h-5"/>
                                        Premium Подписка
                                    </Link>
                                    <div className="border-t pt-4 mt-4">
                                        {user ? (
                                            <Link href="/profile" className="flex items-center gap-4 text-lg font-medium hover:text-primary transition-colors p-2 rounded-md hover:bg-accent">
                                                <User className="w-5 h-5"/>
                                                Профиль
                                            </Link>
                                        ) : (
                                            <Link href="/auth/login" className="flex items-center gap-4 text-lg font-medium hover:text-primary transition-colors p-2 rounded-md hover:bg-accent">
                                                <User className="w-5 h-5"/>
                                                Войти
                                            </Link>
                                        )}
                                    </div>
                                </nav>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </header>
    )
}