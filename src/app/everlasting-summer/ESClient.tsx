"use client"
import Link from "next/link"
import {Card} from "@/components/ui/card"
import {SteamIcon} from "@/components/ui/steam"
import {SovietIcon} from "@/components/ui/soviet"
import ESHeader from "@/components/es-header"
import Footer from "@/components/footer"
const characters = [
    {id: "semyon", name: "Семён", image: "/everlasting-summer/characters/semyon.webp"},
    {id: "alisa", name: "Алиса", image: "/everlasting-summer/characters/alisa.webp"},
    {id: "lena", name: "Лена", image: "/everlasting-summer/characters/lena.webp"},
    {id: "miku", name: "Мику", image: "/everlasting-summer/characters/miku.webp"},
    {id: "pioneer", name: "Пионер", image: "/everlasting-summer/characters/pioneer.webp"},
    {id: "slavya", name: "Славя", image: "/everlasting-summer/characters/slavya.webp"},
    {id: "ulyana", name: "Ульяна", image: "/everlasting-summer/characters/ulyana.webp"},
    {id: "yulia", name: "Юля", image: "/everlasting-summer/characters/yulia.webp"}
]
function CharacterCard({char}: {char: {id: string; name: string; image: string}}) {
    return(
        <Link href={`/everlasting-summer/characters/${char.id}`}>
            <Card className="group cursor-pointer hover:border-primary transition-colors w-40">
                <div className="aspect-square overflow-hidden rounded-t-lg">
                    <img src={char.image} alt={char.name} className="w-full h-full object-cover group-hover group-hover:scale-105 transition-transform duration-300"/>
                </div>
                <div className="px-2 py-1.5">
                    <h3 className="text-lg font-semibold text-foreground">{char.name}</h3>
                </div>
            </Card>
        </Link>
    )
}
export default function ESHome() {
    return(
        <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
            <ESHeader/>
            <main className="flex-1">
                <section className="relative py-24 px-6 text-center border-b bg-gradient-to-b from-background to-muted/20">
                    <div className="container mx-auto max-w-3xl space-y-6">
                        <div className="space-y-2">
                            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">Бесконечное Лето Вики</h1>
                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">Энциклопедия, посвященная новелле «Бесконечное Лето».</p>
                        </div>
                        <div className="flex justify-center gap-4 text-sm font-medium text-muted-foreground">
                            <Link href="https://soviet.games/everlasting-summer/">
                                <div className="flex items-center gap-2 bg-background/50 px-3 py-1.5 rounded-full border border-border/50 shadow-sm">
                                    <SovietIcon className="w-3.5 h-3.5"/>
                                    <span>Официальный сайт</span>
                                </div>
                            </Link>
                            <Link href="https://store.steampowered.com/app/331470/">
                                <div className="flex items-center gap-2 bg-background/50 px-3 py-1.5 rounded-full border border-border/50 shadow-sm">
                                    <SteamIcon className="w-3.5 h-3.5"/>
                                    <span>Страница в Steam</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </section>
                <main className="container py-12 mx-auto px-4">
                    <section className="container mx-auto py-16 px-6">
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
                            <Card className="group p-6 h-full transition-all duration-300 relative">
                                <div className="space-y-2">
                                    <h3 className="text-xl font-semibold text-foreground transition-colors">Об игре</h3>
                                    <p className="text-sm text-muted-foreground">«Бесконечное лето» — визуальная новелла, созданная участниками имиджборда iichan. Разработку начали в 2008 году, а финальная версия 1.1 вышла в декабре 2013 года. Игра распространяется бесплатно и доступна в{" "} <Link href="https://store.steampowered.com/app/331470/Beskonechnoe_Leto/" className="text-green-600 hover:text-green-700 hover:underline transition-colors">Steam</Link>.</p>
                                </div>
                            </Card>
                            <Card className="group p-6 h-full transition-all duration-300 relative">
                                <div className="space-y-2">
                                    <h3 className="text-xl font-semibold text-foreground transition-colors">Сюжет</h3>
                                    <p className="text-sm text-muted-foreground">Главный герой, затворник{" "} <Link href="/everlasting-summer/characters/semyon" className="text-green-600 hover:text-green-700 hover:underline transition-colors">Семён</Link>. Почти всё его время уходит на жизнь в четырёх стенах и общение на анонимных форумах. Однажды он садится в автобус № 410, засыпает и приходит в себя уже у ворот пионерского лагеря{" "} <Link href="/everlasting-summer/sovenok" className="text-green-600 hover:text-green-700 hover:underline transition-colors">«Совёнок»</Link>. Вокруг, советские пионеры, лето, и впереди семь дней, которые всё перевернут. Как закончится история, решает сам игрок.</p>
                                </div>
                            </Card>
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold tracking-tight text-foreground mt-5">
                                <Link href="/everlasting-summer/characters/">Персонажи</Link>
                            </h2>
                            <p className="text-muted-foreground mt-1">Основные персонажи визуальной новеллы «Бесконечное Лето»</p>
                        </div>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3"></div>
                            <div className="flex flex-wrap justify-center gap-3">
                                {characters.map((char) => (
                                    <CharacterCard key={char.id} char={char}/>
                                ))}
                            </div>
                        </div>
                    </section>
                </main>
            </main>
            <Footer/>
        </div>
    )
}