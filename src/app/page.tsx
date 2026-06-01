"use client"
import Fuse from "fuse.js"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import {Card} from "@/components/ui/card"
import {Input} from "@/components/ui/input"
import {Badge} from "@/components/ui/badge"
import {Search} from "lucide-react"
import {useState, useMemo} from "react"
import {universes} from "@/data/universes"
import {stats} from "@/data/stats"
export default function WikiVerseHome() {
    const [search, setSearch] = useState("")
    const fuse = useMemo(() => new Fuse(universes, {
        keys: ["name", "aliases"], threshold: 0.4
    }), [])
    const filtered = search
        ? fuse.search(search).map((r) => r.item)
        : universes
    return(
        <div className="flex flex-col min-h-screen">
            <Header/>
            <main className="flex-1">
                <section className="relative py-24 px-6 text-center border-b bg-gradient-to-b from-background to-muted/20">
                    <div className="max-w-3xl mx-auto space-y-6">
                        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-primary">WikiVerse</h1>
                        <p className="text-lg text-muted-foreground leading-relaxed">Вселенная игровых миров. Персонажи, локации, сюжетные ветки и скрытые детали — всё в одном месте.</p>
                        <div className="flex justify-center gap-8 pt-2">
                            {stats.map((s) => (
                                <div key={s.label} className="text-center">
                                    <p className="text-2xl font-bold text-primary">{s.value}</p>
                                    <p className="text-sm text-muted-foreground">{s.label}</p>    
                                </div>
                            ))}
                        </div>
                        <div className="relative max-w-md mx-auto">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground"/>
                            <Input placeholder="Найти вселенную..." className="pl-9" value={search} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}/>
                        </div>
                    </div>
                </section>
                <section className="container mx-auto py-16 px-6">
                    <div className="mb-10 text-primary">
                        <h2 className="text-3xl font-bold tracing-tight">Игровые вселенные</h2>
                        <p className="text-muted-foreground mt-2">Выбери мир, который хочешь исследовать</p>
                    </div>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {filtered.map((u) => (
                            <Link key={u.id} href={`/${u.id}`}>
                                <Card className="group p-6 h-full cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:border-primary relative">
                                    {u.ready !== true && (
                                        <Badge className="absolute top-4 right-4 z-10" variant="secondary">
                                            {u.ready === false ? "Скоро" : `${u.ready}%`}
                                        </Badge>
                                    )}
                                    <div className="aspect-[16/9] overflow-hidden rounded-lg mb-4">
                                        <img src={u.image} alt={u.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"/>
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">{u.name}</h3>
                                        <p className="text-sm text-muted-foreground line-clamp-3">{u.description}</p>
                                    </div>
                                </Card>
                            </Link>
                        ))}
                    </div>
                    {filtered.length === 0 && (
                        <p className="text-center text-muted-foreground mt-10">Ничего не найдено 😔</p>
                    )}
                </section>
            </main>
            <Footer/>
        </div>
    )
}