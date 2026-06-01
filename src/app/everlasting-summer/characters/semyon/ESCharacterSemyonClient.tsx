"use client"
import Link from "next/link"
import {Calendar, ChevronRight, User} from "lucide-react"
import {Card, CardContent, CardHeader} from "@/components/ui/card"
import {Badge} from "@/components/ui/badge"
import {Separator} from "@/components/ui/separator"
//import CommentsSection from "@/components/comments-section"
import {useState} from "react"
import ESHeader from "@/components/es-header"
import Footer from "@/components/footer"

export default function CharacterSemyonPage() {
    const page = {id: "semyon", title: "Семён", author: (<>zyele{" "}<Badge className="bg-purple-600 hover:bg-purple-700 text-white text-[10px] h-4 px-1.5 py-0 font-medium">Admin</Badge></>), createdAt: "2026-03-17"}
    const date = new Date(page.createdAt).toLocaleDateString("ru-RU", {year: "numeric", month: "long", day: "numeric"})
    const [open, setOpen] = useState(true)
    return(
        <>
        <ESHeader/>
        <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20 py-12">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Link href="/" className="hover:text-foreground transition-colors">Главная</Link>
                    <ChevronRight className="w-4 h-4"/>
                    <Link href="/everlasting-summer" className="hover:text-foreground transition-colors">Бесконечное Лето</Link>
                    <ChevronRight className="w-4 h-4"/>
                    <Link href="/everlasting-summer/characters" className="hover:text-foreground transition-colors">Персонажи</Link>
                    <ChevronRight className="w-4 h-4"/>
                    <span className="text-foreground">Семён</span>
                </div>
                <main className="container max-w-6xl mx-auto mt-8">
                    <Card className="overflow-hidden shadow-sm border-t-4 border-t-green-600">
                        <CardHeader className="pb-6">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
                                <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight flex items-center gap-3"><User className="w-8 h-8 text-green-600"/>Семён</h1>
                            </div>
                            <div className="flex flex-col gap-1 text-sm text-muted-foreground border-t pt-4">
                                <div className="flex items-center gap-1.5">
                                    <User className="w-4 h-4"/>
                                    <span className="mb-2">Автор: {page.author}</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <Calendar className="w-4 h-4"/>
                                    <span>{date}</span>
                                </div>
                            </div>
                        </CardHeader>
                        <Separator/>
                        <CardContent className="pt-8 pb-12 max-w-none">
                            <article className="prose dark:prose-invert max-w-none">
                                <div className="float-right w-[350px] ml-6 mb-6 border rounded-lg overflow-hidden shadow-sm">
                                    <div className="bg-green-700 text-white text-center py-2 font-bold">Семён</div>
                                    <div className="p-4 flex justify-center">
                                        <img src="/everlasting-summer/characters/semyon_long.webp" alt="Семён" className="max-h-[300px] object-contain"/>
                                    </div>
                                    <div className="text-sm border-t">
                                        <div className="flex justify-between p-2 border-b">
                                            <span className="font-medium">Имя</span>
                                            <span className="text-muted-foreground">Семён Персунов</span>
                                        </div>
                                        <div className="flex justify-between p-2 border-b">
                                            <span className="font-medium">Пол</span>
                                            <span className="text-muted-foreground">Мужской</span>
                                        </div>
                                        <div className="flex justify-between p-2 border-b">
                                            <span className="font-medium">Рост</span>
                                            <span className="text-muted-foreground">180 см</span>
                                        </div>
                                        <div className="flex justify-between p-2 border-b">
                                            <span className="font-medium">Должности</span>
                                            <span className="text-muted-foreground">Реальность — Фрилансер<br/> Рут Алисы — Рок-музыкант<br/> Рут Лены — Писатель<br/> Рут Ульяны — Студент<br/> Рут Мику — Сценарист</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-6 text-sm text-muted-foreground">
                                    <span className="font-medium text-foreground">Темы:</span>{" "}одиночество, поиск смысла, внутренняя пустота, попытка изменить себя
                                </div>
                                <p className="text-muted-foreground leading-relaxed mb-4">Семён — главный герой визуальной новеллы{" "}«<Link href="/everlasting-summer/everlasting-summer" className="text-green-600 hover:text-green-700 hover:underline transition-colors">Бесконечное Лето</Link>». Его образ специально сделан максимально «обычным», чтобы игроку было проще ассоциировать себя с персонажем.</p>
                                <div className="border rounded-lg p-4 mt-6 bg-muted/30 w-full max-w-[350px]">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="font-semibold">Содержание</span>
                                        <button onClick={() => setOpen(!open)} className="text-sm text-green-600 hover:text-green-700 hover:underline transition-colors">[{open ? "скрыть" : "показать"}]</button>
                                    </div>
                                    {open && (
                                        <ol className="space-y-1 text-sm">
                                            <li><a href="#Общий-образ" className="text-green-600 hover:text-green-700 hover:underline transition-colors"> 1. Общий образ</a></li>
                                            <li><a href="#Личность" className="text-green-600 hover:text-green-700 hover:underline transition-colors">2. Личность</a></li>
                                            <li><a href="#Жизнь-до-лагеря" className="text-green-600 hover:text-green-700 hover:underline transition-colors">3. Жизнь до лагеря</a></li>
                                            <li><a href="#Жизнь-в-совёнке" className="text-green-600 hover:text-green-700 hover:underline transition-colors">4. Жизнь в «Совёнке»</a></li>
                                            <li><a href="#Отношения-с-персонажами" className="text-green-600 hover:text-green-700 hover:underline transition-colors">5. Отношения с персонажами</a></li>
                                            <li><a href="#Концовки" className="text-green-600 hover:text-green-700 hover:underline transition-colors">6. Концовки</a></li>
                                            <li><a href="#Образ-и-символизм" className="text-green-600 hover:text-green-700 hover:underline transition-colors">7. Образ и символизм</a></li>
                                        </ol>
                                    )}
                                </div>
                                <h2 id="Общий-образ" className="text-xl font-semibold mt-8 border-b pb-2 mb-4 scroll-mt-15 max-w-[calc(100%-370px)]">Общий образ</h2>
                                <p className="text-muted-foreground leading-relaxed mb-4">До событий игры Семён живёт замкнутой и однообразной жизнью, почти не выходит из дома и большую часть времени проводит в интернете. Общение с людьми сведено к минимуму, да и особого желания его расширять у него нет. До попадания в{" "}«<Link href="/everlasting-summer/sovyonok" className="text-green-600 hover:text-green-700 hover:underline transition-colors">Совёнок</Link>» Семёну около 25 лет. Он худощавый, немного сутулый, с каштановыми волосами, щетиной и уставшим взглядом. В лагере же он внезапно начинает выглядеть как обычный 17-летний пионер.</p>
                                <h2 id="Личность" className="text-xl font-semibold mt-8 border-b pb-2 mb-4 scroll-mt-15">Личность</h2>
                                <p className="text-muted-foreground leading-relaxed mb-4">Семён — человек замкнутый и апатичный. Он редко общается с людьми, избегает шумных компаний и предпочитает проводить время дома за аниме, форумами и случайными увлечениями, которые быстро бросает. Несмотря на это, у него неплохое воображение и склонность к размышлениям. Он любит литературу, часто уходит в собственные мысли и может буквально «выпадать» из разговора.</p>
                                <p className="text-muted-foreground leading-relaxed">При этом Семёна нельзя назвать полностью безэмоциональным. За его пассивностью скрывается внутреннее напряжение и усталость от собственной жизни. Иногда он резко реагирует на происходящее и способен принимать импульсивные решения.</p>
                                <h2 id="Жизнь-до-лагеря" className="text-xl font-semibold mt-8 border-b pb-2 mb-4 scroll-mt-15">Жизнь до лагеря</h2>
                                <p className="text-muted-foreground leading-relaxed mb-4">После школы Семён поступил в институт, но так и не закончил его. Со временем он окончательно ушёл в затворнический образ жизни: подрабатывал удалённо, почти не виделся с людьми и жил в захламлённой квартире.</p>
                                <p className="text-muted-foreground leading-relaxed mb-4">Незадолго до начала игры ему начинает сниться один и тот же сон — ворота лагеря «Совёнок» и странная девочка, спрашивающая: «Ты пойдёшь со мной?».</p>
                                <p className="text-muted-foreground leading-relaxed">Однажды зимой Семён отправляется на встречу выпускников. По дороге он засыпает в автобусе маршрута 410, а просыпается уже летом — возле советского пионерлагеря{" "}«<Link href="/everlasting-summer/sovyonok" className="text-green-600 hover:text-green-700 hover:underline transition-colors">Совёнок</Link>».</p>
                                <h2 id="Жизнь-в-совёнке" className="text-xl font-semibold mt-8 border-b pb-2 mb-4 scroll-mt-15">Жизнь в «Совёнке»</h2>
                                
                            </article>
                        </CardContent>
                    </Card>
                </main>
            </div>
        </div>
        <Footer/>
        </>
    )
}






