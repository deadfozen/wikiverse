import Link from "next/link"
import {Card} from "@/components/ui/card"
export default function AllProject() {
    return(
        <div className="flex flex-col min-h-screen">
            <main className="flex-1">
                <section className="container mx-auto py-16 px-6">
                    <div className="mb-10 text-primary">
                        <h2 className="text-3xl font-bold tracing-tight">Все проекты</h2>
                    </div>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        <Link href='#'>
                            <Card className="group p-6 h-full cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:border-primary relative">
                                <div className="space-y-2">
                                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">WikiVerse</h3>
                                    <p className="text-sm text-muted-foreground line-clamp-3">Вселенная игровых миров. Персонажи, локации, сюжетные ветки и скрытые детали — всё в одном месте.</p>
                                </div>
                            </Card>
                        </Link>
                        <Link href='#'>
                            <Card className="group p-6 h-full cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:border-primary relative">
                                <div className="space-y-2">
                                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">SongVerse</h3>
                                    <p className="text-sm text-muted-foreground line-clamp-3">Музыкальная площадка без рекламы и цензуры. Нахуй цензуру! ЕАЙ!</p>
                                </div>
                            </Card>
                        </Link>
                    </div>
                </section>
            </main>
        </div>
    )
}