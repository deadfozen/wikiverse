"use client"
import Link from "next/link"
import {Scroll, Home, User, ChevronDown, Image, Crown, Menu} from "lucide-react"
import {SearchBar} from "@/components/search-bar"
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSub, DropdownMenuSubTrigger, DropdownMenuSubContent} from "@/components/ui/dropdown-menu"
import {Button} from "@/components/ui/button"
import {LanguageSwitcher } from "@/components/language-switcher"
import {ModeToggle} from "@/components/ui/mode-toggle"
import {Sheet, SheetContent, SheetTrigger, SheetTitle} from "@/components/ui/sheet"
import * as VisuallyHidden from "@radix-ui/react-visually-hidden"
import {useAuth} from "@/hooks/use-auth"
type BgItem = {
    label: string
    href?: string
    children?: BgItem[]
}
type CgItem = {
    label: string
    href?: string
    children?: CgItem[]
}
function BgMenuItem({item}: {item: BgItem}) {
    if (item.children) {
        return(
            <DropdownMenuSub>
                <DropdownMenuSubTrigger>{item.label}</DropdownMenuSubTrigger>
                <DropdownMenuSubContent>
                    {item.children.map((child) => (
                        <BgMenuItem key={child.label} item={child}/>
                    ))}
                </DropdownMenuSubContent>
            </DropdownMenuSub>
        )
    }
    return(
        <DropdownMenuItem asChild>
            <Link href={item.href!}>{item.label}</Link>
        </DropdownMenuItem>
    )
}
function CgMenuItem({item}: {item: CgItem}) {
    if (item.children) {
        return(
            <DropdownMenuSub>
                <DropdownMenuSubTrigger>{item.label}</DropdownMenuSubTrigger>
                <DropdownMenuSubContent>
                    {item.children.map((child, index) => (
                        <CgMenuItem key={child.href ?? `${child.label}-${index}`} item={child}/>
                    ))}
                </DropdownMenuSubContent>
            </DropdownMenuSub>
        )
    }
    return(
        <DropdownMenuItem asChild>
            <Link href={item.href!}>{item.label}</Link>
        </DropdownMenuItem>
    )
}
export default function ESHeader() {
    const {user, logout} = useAuth()
    const charactersItems = [
        {
            label: "Основные",
            characters: [
                {href: "/everlasting-summer/characters/slavya", label: "Славя"},
                {href: "/everlasting-summer/characters/lena", label: "Лена"},
                {href: "/everlasting-summer/characters/alisa", label: "Алиса"},
                {href: "/everlasting-summer/characters/miku", label: "Мику"},
                {href: "/everlasting-summer/characters/ulyana", label: "Ульяна"},
                {href: "/everlasting-summer/characters/yulia", label: "Юля"},
                {href: "/everlasting-summer/characters/semyon", label: "Семён"}
            ]
        },
        {
            label: "Второстепенные",
            characters: [
                {href: "/everlasting-summer/characters/viola", label: "Виола"},
                {href: "/everlasting-summer/characters/zhenya", label: "Женя"},
                {href: "/everlasting-summer/characters/olga-dmitrievna", label: "Ольга Дмитриевна"},
                {href: "/everlasting-summer/characters/shurik", label: "Шурик"},
                {href: "/everlasting-summer/characters/elektronik", label: "Электроник"},
                {href: "/everlasting-summer/characters/pioneer", label: "Пионер"}
            ]
        }
    ]
    const bgItems: BgItem[] = [
        {
            label: "Лагерные здания",
            children: [
                {href: "/everlasting-summer/bg/aidpost", label: "Медпункт"},
                {href: "/everlasting-summer/bg/bathhouse", label: "Баня"},
                {href: "/everlasting-summer/bg/boathouse", label: "Пристань"},
                {href: "/everlasting-summer/bg/clubs", label: "Клубы"},
                {href: "/everlasting-summer/bg/dining-hall", label: "Столовая"},
                {
                    label: "Домики персонажей",
                    children: [
                        {href: "/everlasting-summer/bg/house-sl-mz", label: "Домик Слави и Жени"},
                        {href: "/everlasting-summer/bg/house-dv-us", label: "Домик Алисы и Ульяны"},
                        {href: "/everlasting-summer/bg/house-mt-me", label: "Домик Ольги Дмитриевны"},
                        {href: "/everlasting-summer/bg/house-un-mi", label: "Домик Лены и Мику"}
                    ]
                },
                {href: "/everlasting-summer/bg/library", label: "Библиотека"},
                {href: "/everlasting-summer/bg/musclub", label: "Музыкальный клуб"}
            ]
        },
        {
            label: "Лагерные окресности",
            children: [
                {href: "/everlasting-summer/bg/no-bus", label: "Автобусная остановка"},
                {href: "/everlasting-summer/bg/beach", label: "Пляж"},
                {href: "/everlasting-summer/bg/camp-entrance", label: "Вход в лагерь"},
                {href: "/everlasting-summer/bg/houses", label: "Домики"},
                {href: "/everlasting-summer/bg/island", label: "Остров Ближний"},
                {href: "/everlasting-summer/bg/stage", label: "Сцена"},
                {href: "/everlasting-summer/bg/square", label: "Площадь"},
                {
                    label: "Старый корпус",
                    children: [
                        {href: "/everlasting-summer/bg/old-building", label: "Здание"},
                        {
                            label: "Шахта",
                            children: [
                                {href: "/everlasting-summer/bg/mine-coalface", label: "Пещера"},
                                {href: "/everlasting-summer/bg/mine", label: "Шахта"},
                                {href: "/everlasting-summer/bg/mine-crossroad", label: "Перекрёсток"},
                                {href: "/everlasting-summer/bg/mine-door", label: "Двери"},
                                {href: "/everlasting-summer/bg/mine-exit", label: "Выход"},
                                {href: "/everlasting-summer/bg/mine-halt", label: "Поворот"},
                                {href: "/everlasting-summer/bg/mine-room", label: "Комната"},
                            ]
                        },
                        {
                            label: "Катакомбы",
                            children: [
                                {href: "/everlasting-summer/bg/catacombs-living", label: "Комната"},
                                {href: "/everlasting-summer/bg/catacombs-entrance", label: "Проход"},
                                {href: "/everlasting-summer/bg/catacombs-door", label: "Дверь"},
                                {href: "/everlasting-summer/bg/catacombs-hole", label: "Дыра"},
                            ]
                        }
                    ]
                },
                {href: "/everlasting-summer/bg/path-1", label: "Проход 1"},
                {href: "/everlasting-summer/bg/path-2", label: "Проход 2"},
                {href: "/everlasting-summer/bg/playground", label: "Спортивная площадка"},
                {href: "/everlasting-summer/bg/polyana", label: "Поляна"},
                {href: "/everlasting-summer/bg/road", label: "Дорога"},
                {href: "/everlasting-summer/bg/washstand", label: "Умывальники"}
            ]
        },
        {
            label: "Автобус",
            children: [
                {href: "/everlasting-summer/bg/bus", label: "Лагерный автобус"},
                {href: "/everlasting-summer/bg/liaz", label: "Лиаз"},
            ]
        },
        {
            label: "Город",
            children: [
                {href: "/everlasting-summer/bg/intro_xx", label: "Вид из окна автобуса"},
                {href: "/everlasting-summer/bg/semen-room", label: "Комната Семёна"},
                {href: "/everlasting-summer/bg/bus-stop", label: "Автобусная остановка"}
            ]
        }
    ]
    const cgItems: CgItem[] = [
        {
            label: "Славя",
            children: [
                {href: "/everlasting-summer/cg/sl-dinner", label: "Ужин со Славей"},
                {href: "/everlasting-summer/cg/sl-forest", label: "В лесу"},
                {href: "/everlasting-summer/cg/sl-bathhouse", label: "В бане (хентай)"},
                {href: "/everlasting-summer/cg/sl-dance", label: "Танец"},
                {href: "/everlasting-summer/cg/sl-evening", label: "Вечер"},
                {href: "/everlasting-summer/cg/sl-library", label: "В библиотеке"},
                {href: "/everlasting-summer/cg/sl-catacombs", label: "Катакомбы"},
                {href: "/everlasting-summer/cg/sl-medic-house", label: "В медпункте"},
                {href: "/everlasting-summer/cg/sl-swim", label: "Славя в озере (хентай)"},
                {href: "/everlasting-summer/cg/sl", label: "Славя (хентай)"},
                {href: "/everlasting-summer/cg/sl-morning", label: "Утро (хентай)"},
                {href: "/everlasting-summer/cg/sl-epilogue", label: "Эпилог Слави"}
            ]
        },
        {
            label: "Лена",
            children: [
                {href: "/everlasting-summer/cg/un-owl", label: "Сова"},
                {href: "/everlasting-summer/cg/un-dance", label: "Танец"},
                {href: "/everlasting-summer/cg/un-forest", label: "В лесу"},
                {href: "/everlasting-summer/cg/un-catacombs", label: "Катакомбы"},
                {href: "/everlasting-summer/cg/un-island", label: "На острове"},
                {href: "/everlasting-summer/cg/un-evening", label: "Вечер"},
                {href: "/everlasting-summer/cg/un", label: "Лена (хентай)"},
                {href: "/everlasting-summer/cg/un-suicide", label: "Суицид"},
                {href: "/everlasting-summer/cg/un-epilogue", label: "Эпилог Лены"}
            ]
        },
        {
            label: "Алиса",
            children: [
                {href: "/everlasting-summer/cg/dv-beach", label: "Пляж"},
                {href: "/everlasting-summer/cg/dv-water", label: "В воде"},
                {href: "/everlasting-summer/cg/dv-guitar", label: "С гитарой"},
                {href: "/everlasting-summer/cg/dv-scene", label: "На сцене"},
                {href: "/everlasting-summer/cg/dv-catacombs", label: "Катакомбы"},
                {href: "/everlasting-summer/cg/dv-guilty", label: "Виновна"},
                {href: "/everlasting-summer/cg/dv-argue", label: "Спор с Алисой"},
                {href: "/everlasting-summer/cg/dv-forest", label: "В лесу"},
                {href: "/everlasting-summer/cg/dv", label: "Алиса (хентай)"},
                {href: "/everlasting-summer/cg/dv-rest-stop", label: "Привал"},
                {href: "/everlasting-summer/cg/dv-epilogue", label: "Эпилог Алисы"}
            ]
        },
        {
            label: "Мику",
            children: [
                {href: "/everlasting-summer/cg/mi-pianino", label: "Мику под пианино"},
                {href: "/everlasting-summer/cg/mi-guitar", label: "Мику с гитарой"},
                {href: "/everlasting-summer/cg/mi-sing", label: "Поющая Мику"},
                {href: "/everlasting-summer/cg/mi", label: "Мику"},
                {href: "/everlasting-summer/cg/mi-epilogue", label: "Эпилог Мику"},
                {href: "/everlasting-summer/cg/mi-h", label: "Мику (хентай)"}
            ]
        },
        {
            label: "Ульяна",
            children: [
                {href: "/everlasting-summer/cg/us-falling", label: "Падающая Ульяна"},
                {href: "/everlasting-summer/cg/us-soccer", label: "Футбол"},
                {href: "/everlasting-summer/cg/us-dining-hall", label: "Ульяна в столовой"},
                {href: "/everlasting-summer/cg/us-library", label: "Ульяна в библиотеке"},
                {href: "/everlasting-summer/cg/us-film", label: "Фильм"},
                {href: "/everlasting-summer/cg/us-forest", label: "Ульяна в лесу"},
                {href: "/everlasting-summer/cg/us-catacombs", label: "Катакомбы"},
                {href: "/everlasting-summer/cg/us-cancer", label: "Рак"},
                {href: "/everlasting-summer/cg/us-wire", label: "Ульяна с проволокой"},
                {href: "/everlasting-summer/cg/us-ghost", label: "Ульяна-призрак"},
                {href: "/everlasting-summer/cg/us-kiss", label: "Поцелуй от Ульяны"},
                {href: "/everlasting-summer/cg/us-epilogue", label: "Эпилог Ульяны"}
            ]
        },
        {
            label: "Юля",
            children: [
                {href: "/everlasting-summer/cg/uv-stranger", label: "Незнакомка"},
                {href: "/everlasting-summer/cg/uv-day-4", label: "День 4"},
                {href: "/everlasting-summer/cg/uv-day-5", label: "День 5"},
                {href: "/everlasting-summer/cg/uv-day-6", label: "День 6"},
                {href: "/everlasting-summer/cg/uv-day-7", label: "День 7"},
                {href: "/everlasting-summer/cg/uv-epilogue", label: "Эпилог Юли"},
                {href: "/everlasting-summer/cg/uv", label: "Юля (хентай)"}
            ]
        },
        {
            label: "Семён",
            children: [
                {href: "/everlasting-summer/cg/me-epilogue", label: "Эпилог"},
                {href: "/everlasting-summer/cg/me-mirror", label: "Семён в зеркале"},
                {href: "/everlasting-summer/cg/me-catacombs", label: "Катакомбы"},
                {href: "/everlasting-summer/cg/me-strawberry", label: "Клубничный кошмар"},
                {href: "/everlasting-summer/cg/me-pioneer", label: "Пионер"}
            ]
        },
        {
            label: "Разное",
            children: [
                {href: "/everlasting-summer/cg/food", label: "Еда"},
                {href: "/everlasting-summer/cg/grasshopper", label: "Кузнечик"},
                {href: "/everlasting-summer/cg/rena", label: "Рена"},
                {href: "/everlasting-summer/cg/lineup", label: "Линейка"},
                {href: "/everlasting-summer/cg/mz", label: "Женя"},
                {href: "/everlasting-summer/cg/mt-undress", label: "Передевающаяся Ольга (хентай)"},
                {href: "/everlasting-summer/cg/disco", label: "Дискотека"},
                {href: "/everlasting-summer/cg/el", label: "Электроник"},
                {href: "/everlasting-summer/cg/sh-sit", label: "Сидящий Шурик"},
                {href: "/everlasting-summer/cg/sh-stay", label: "Шурик с куском арматуры"},
                {href: "/everlasting-summer/cg/boat", label: "В лодке"},
                {href: "/everlasting-summer/cg/cake", label: "Торт"},
                {href: "/everlasting-summer/cg/robot", label: "Робот"},
                {href: "/everlasting-summer/cg/cs", label: "Виола"},
                {href: "/everlasting-summer/cg/dv-us", label: "Курьёз у умывальников (хентай)"},
                {href: "/everlasting-summer/cg/fight", label: "Драка"},
                {href: "/everlasting-summer/cg/punch", label: "Удар"},
                {href: "/everlasting-summer/cg/pioneers-leaving", label: "Прощание"},
                {href: "/everlasting-summer/cg/all", label: "Все вместе"}
            ]
        }
    ]
    const CharactersDropdown = () => (
        <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-2 text-sm font-medium hover:text-primary hover:bg-secondary/40 px-2 py-1 rounded-md transition-colors outline-none">
                <User className="w-4 h-4"/>Персонажи
                <ChevronDown className="w-3 h-3 opacity-60"/>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                {charactersItems.map((group) => (
                    <DropdownMenuSub key={group.label}>
                        <DropdownMenuSubTrigger>{group.label}</DropdownMenuSubTrigger>
                        <DropdownMenuSubContent>
                            {group.characters.map((char) => (
                                <DropdownMenuItem key={char.href} asChild>
                                    <Link href={char.href}>{char.label}</Link>
                                </DropdownMenuItem>
                            ))}
                        </DropdownMenuSubContent>
                    </DropdownMenuSub>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
    const BgDropdown = () => (
        <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-2 text-sm font-medium hover:text-primary hover:bg-secondary/40 px-2 py-1 rounded-md transition-colors outline-none">
                <Image className="w-4 h-4"/>Фоны
                <ChevronDown className="w-3 h-3 opacity-60"/>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                {bgItems.map((item) => (
                    <BgMenuItem key={item.label} item={item}/>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
    const CgDropdown = () => (
        <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-2 text-sm font-medium hover:text-primary hover:bg-secondary/40 px-2 py-1 rounded-md transition-colors outline-none">
                <Image className="w-4 h-4"/>Картинки (CG)
                <ChevronDown className="w-3 h-3 opacity-60"/>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                {cgItems.map((item) => (
                    <CgMenuItem key={item.label} item={item}/>
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
                        <Link href="/everlasting-summer" className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors">
                            <Home className="w-4 h-4"/>Главная
                        </Link>
                        <CharactersDropdown/>
                        <BgDropdown/>
                        <CgDropdown/>
                        <Link href="/subscribe" className="flex items-center gap-2 text-sm font-medium hover:text-yellow-500 hover:drop-shadow-[0_0_4px_rgba(234,179,8,0.6)]">
                            <Crown className="w-4 h-4 text-yellow-600"/>
                            <span className="hidden lg:inline">Premium Подписка</span>
                        </Link>
                    </div>
                </nav>
                <div className="flex items-center gap-2 md:ml-4">
                    {user ? (
                        <Link href="/profile">
                            <Button variant="ghost" size="icon" title="Войти">
                                <User className="w-5 h-5"/>
                                <span className="sr-only">Войти</span>
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
                                    <Link href="/everlasting-summer" className="flex items-center gap-4 text-lg font-medium hover:text-primary transition-colors p-2 rounded-md hover:bg-accent">
                                        <Home className="w-5 h-5"/>
                                        Главная
                                    </Link>
                                    <CharactersDropdown/>
                                    <BgDropdown/>
                                    Картинки (CG)
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