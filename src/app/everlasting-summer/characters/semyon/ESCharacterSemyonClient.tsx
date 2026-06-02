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
                                    <span className="font-medium text-foreground">Темы:</span> одиночество, поиск смысла, внутренняя пустота, попытка изменить себя
                                </div>
                                <p className="text-muted-foreground leading-relaxed mb-4">Семён — главный герой визуальной новеллы «<Link href="/everlasting-summer/everlasting-summer" className="text-green-600 hover:text-green-700 hover:underline transition-colors">Бесконечное Лето</Link>». Его образ специально сделан максимально «обычным», чтобы игроку было проще ассоциировать себя с персонажем.</p>
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
                                            <li><a href="#Концовки-Семёна" className="text-green-600 hover:text-green-700 hover:underline transition-colors">6. Концовки Семёна</a></li>
                                            <ol className="pl-4 mt-1 space-y-1">
                                                <li><a href="#Плохая-концовка" className="text-green-600 hover:text-green-700 hover:underline transition-colors">6.1 Плохая концовка (Epic Fail)</a></li>
                                                <li><a href="#Хорошая-концовка" className="text-green-600 hover:text-green-700 hover:underline transition-colors">6.2 Хорошая концовка</a></li>
                                            </ol>
                                            <li><a href="#Концовки" className="text-green-600 hover:text-green-700 hover:underline transition-colors">7. Концовки</a></li>
                                            <ol className="pl-4 mt-1 space-y-1">
                                                <li><a href="#Славя" className="text-green-600 hover:text-green-700 hover:underline transition-colors">7.1 Концовки Слави</a></li>
                                                <li><a href="#Лена" className="text-green-600 hover:text-green-700 hover:underline transition-colors">7.2 Концовки Лены</a></li>
                                                <li><a href="#Алиса" className="text-green-600 hover:text-green-700 hover:underline transition-colors">7.3 Концовки Алисы</a></li>
                                                <li><a href="#Ульяна" className="text-green-600 hover:text-green-700 hover:underline transition-colors">7.4 Концовки Ульяны</a></li>
                                                <li><a href="#Другие-концовки" className="text-green-600 hover:text-green-700 hover:underline transition-colors">7.5 Другие концовки</a></li>
                                            </ol>
                                            <li><a href="#Образ-и-символизм" className="text-green-600 hover:text-green-700 hover:underline transition-colors">8. Образ и символизм</a></li>
                                        </ol>
                                    )}
                                </div>
                                <h2 id="Общий-образ" className="text-xl font-semibold mt-8 border-b pb-2 mb-4 scroll-mt-15 max-w-[calc(100%-370px)]">Общий образ</h2>
                                <p className="text-muted-foreground leading-relaxed mb-4">До событий игры Семён живёт замкнутой и однообразной жизнью, почти не выходит из дома и большую часть времени проводит в интернете. Общение с людьми сведено к минимуму, да и особого желания его расширять у него нет. До попадания в «<Link href="/everlasting-summer/location/sovyonok" className="text-green-600 hover:text-green-700 hover:underline transition-colors">Совёнок</Link>» Семёну около 25 лет. Он худощавый, немного сутулый, с каштановыми волосами, щетиной и уставшим взглядом. В лагере же он внезапно начинает выглядеть как обычный 17-летний пионер.</p>
                                <h2 id="Личность" className="text-xl font-semibold mt-8 border-b pb-2 mb-4 scroll-mt-15">Личность</h2>
                                <p className="text-muted-foreground leading-relaxed mb-4">Семён — человек замкнутый и апатичный. Он редко общается с людьми, избегает шумных компаний и предпочитает проводить время дома за аниме, форумами и случайными увлечениями, которые быстро бросает. Несмотря на это, у него неплохое воображение и склонность к размышлениям. Он любит литературу, часто уходит в собственные мысли и может буквально «выпадать» из разговора.</p>
                                <p className="text-muted-foreground leading-relaxed">При этом Семёна нельзя назвать полностью безэмоциональным. За его пассивностью скрывается внутреннее напряжение и усталость от собственной жизни. Иногда он резко реагирует на происходящее и способен принимать импульсивные решения.</p>
                                <h2 id="Жизнь-до-лагеря" className="text-xl font-semibold mt-8 border-b pb-2 mb-4 scroll-mt-15">Жизнь до лагеря</h2>
                                <p className="text-muted-foreground leading-relaxed mb-4">После школы Семён поступил в институт, но так и не закончил его. Со временем он окончательно ушёл в затворнический образ жизни: подрабатывал удалённо, почти не виделся с людьми и жил в захламлённой квартире.</p>
                                <p className="text-muted-foreground leading-relaxed mb-4">Незадолго до начала игры ему начинает сниться один и тот же сон — ворота лагеря «Совёнок» и странная девочка, спрашивающая: «Ты пойдёшь со мной?».</p>
                                <p className="text-muted-foreground leading-relaxed">Однажды зимой Семён отправляется на встречу выпускников. По дороге он засыпает в автобусе маршрута 410, а просыпается уже летом — возле советского пионерлагеря «<Link href="/everlasting-summer/location/sovyonok" className="text-green-600 hover:text-green-700 hover:underline transition-colors">Совёнок</Link>».</p>
                                <h2 id="Жизнь-в-совёнке" className="text-xl font-semibold mt-8 border-b pb-2 mb-4 scroll-mt-15">Жизнь в «Совёнке»</h2>
                                <p className="text-muted-foreground leading-relaxed mb-4">Попав а лагерь, Семён сначала воспринимает всё как сон или галлюцинацию. Его удивляет буквально всё: советская атмосфера, поведение окрущающих и то, что никто не замечает странностей происходящего.</p>
                                <p className="text-muted-foreground leading-relaxed">Постепенно он знакомится с жителями лагеря:</p>
                                <ul className="list-disc pl-5 mt-2 space-y-2 marker:text-white">
                                    <li className="text-muted-foreground leading-relaxed"><Link href="/everlasting-summer/characters/slavya" className="text-green-600 hover:text-green-700 hover:underline transition-colors">Славей</Link> — доброй и заботливой помощницей вожатой</li>
                                    <li className="text-muted-foreground leading-relaxed"><Link href="/everlasting-summer/characters/lena" className="text-green-600 hover:text-green-700 hover:underline transition-colors">Леной</Link> — тихой и замкнутой девушкой</li>
                                    <li className="text-muted-foreground leading-relaxed"><Link href="/everlasting-summer/characters/alisa" className="text-green-600 hover:text-green-700 hover:underline transition-colors">Алисой</Link> — грубой, но харизматичной бунтаркой</li>
                                    <li className="text-muted-foreground leading-relaxed"><Link href="/everlasting-summer/characters/ulyana" className="text-green-600 hover:text-green-700 hover:underline transition-colors">Ульяной</Link> — энергичной и вредной пионеркой</li>
                                    <li className="text-muted-foreground leading-relaxed"><Link href="/everlasting-summer/characters/miku" className="text-green-600 hover:text-green-700 hover:underline transition-colors">Мику</Link> — болтливой заведующей музыкального кружка</li>
                                    <li className="text-muted-foreground leading-relaxed mb-4"><Link href="/everlasting-summer/characters/elektronik" className="text-green-600 hover:text-green-700 hover:underline transition-colors">Электроником</Link> и <Link href="/everlasting-summer/characters/shurik" className="text-green-600 hover:text-green-700 hover:underline transition-colors">Шуриков</Link> — участниками клуба кибернетики</li>
                                </ul>
                                <p className="text-muted-foreground leading-relaxed mb-4">Со временем Семён начинает замечать, что лагерь скрывает нечто гораздо более странное, чем кажется. Особенно важную роль играет загадочный Пионер — человек, который знает о происходящем намного больше остальных.</p>
                                <p className="text-muted-foreground leading-relaxed">Позже выясняется, что Семён застрял в бесконечном цикле, где события лагерной смены повторяются снова и снова.</p>
                                <h2 id="Отношения-с-персонажами" className="text-xl font-semibold mt-8 border-b pb-2 mb-4 scroll-mt-15">Отношения с персонажами</h2>
                                <ul className="list-disc pl-5 mt-2 space-y-2 marker:text-white">
                                    <li className="text-muted-foreground leading-relaxed"><Link href="/everlasting-summer/characters/slavya" className="text-green-600 hover:text-green-700 hover:underline transition-colors">Славя</Link> — первая из обитателей лагеря, с кем знакомится Семён. Он описывает её как привлекательную девушку с типично славянскими чертами лица, длинными косами цвета свежескошенного сена и голубыми глазами, в которых легко утонуть. Между ними складываются тёплые отношения взаимовыручки: Славя нередко помогает Семёну, и он всегда готов ответить тем же.</li>
                                    <li className="text-muted-foreground leading-relaxed"><Link href="/everlasting-summer/characters/lena" className="text-green-600 hover:text-green-700 hover:underline transition-colors">Лена</Link> — при первой встрече Семён замечает в выражении её лица смесь вселенской грусти и глубокой озабоченности судьбами человечества. Скромность и застенчивость Лены сразу располагают его к ней.</li>
                                    <li className="text-muted-foreground leading-relaxed"><Link href="/everlasting-summer/characters/alisa" className="text-green-600 hover:text-green-700 hover:underline transition-colors">Алиса</Link> — их знакомство началось весьма необычно: Алиса ударила Семёна в спину. Он считает её хулиганкой и не стремится к общению, однако, вопреки всему, она не вызывает у него неприязни.</li>
                                    <li className="text-muted-foreground leading-relaxed"><Link href="/everlasting-summer/characters/miku" className="text-green-600 hover:text-green-700 hover:underline transition-colors">Мику</Link> — Семён встретил её в клубе на второй день и про себя назвал «девочкой-оркестром». Её манера говорить — бесконечный поток слов, половина которых проглатывается на ходу — неизменно выводит его из равновесия.</li>
                                    <li className="text-muted-foreground leading-relaxed"><Link href="/everlasting-summer/characters/ulyana" className="text-green-600 hover:text-green-700 hover:underline transition-colors">Ульяна</Link> — Семён впервые видит её рядом с Леной: Ульяна как раз пыталась напугать подругу кузнечиком. С тех пор он держится настороже, когда она поблизости, заранее ожидая какой-нибудь выходки.</li>
                                    <li className="text-muted-foreground leading-relaxed"><Link href="/everlasting-summer/characters/yulia" className="text-green-600 hover:text-green-700 hover:underline transition-colors">Юля</Link> — девочка-кошка, которую Семён встречает лишь спустя несколько циклов. Он чувствует, что она близка к разгадке происходящего, однако она сама знает куда меньше, чем он ожидал. Имя Юля ей даёт именно Семён. Он доверяет ей, а в зависимости от выбора игрока — и привязывается к ней по-настоящему.</li>
                                    <li className="text-muted-foreground leading-relaxed"><Link href="/everlasting-summer/characters/viola" className="text-green-600 hover:text-green-700 hover:underline transition-colors">Виола</Link> — на протяжении всего сюжета Семён почти не пересекается с лагерной медсестрой, однако считает её странной и предпочитает держаться подальше.</li>
                                    <li className="text-muted-foreground leading-relaxed"><Link href="/everlasting-summer/characters/zhenya" className="text-green-600 hover:text-green-700 hover:underline transition-colors">Женя</Link> — несмотря на то что Семён находит её привлекательной, отношения между ними не заладились с самого начала. Женю раздражают его бесконечные глупые вопросы, а он, в свою очередь, побаивается её сварливого нрава. Тем не менее Семён замечает между собой и Женей кое-что общее — оба не особо жалуют людей. Про себя он характеризует её как «ударницу социалистического труда» и «библиотекаршу-йети».</li>
                                    <li className="text-muted-foreground leading-relaxed"><Link href="/everlasting-summer/characters/olga-dmitrievna" className="text-green-600 hover:text-green-700 hover:underline transition-colors">Ольга Дмитриевна</Link> — вожатая действует Семёну на нервы, поэтому сам он старается лишний раз не попадаться ей на глаза. Впрочем, при необходимости он всё же готов обратиться к ней за помощью. Семён также отмечает, что облик Ольги Дмитриевны не вполне вписывается в образ «образцовой вожатой».</li>
                                    <li className="text-muted-foreground leading-relaxed"><Link href="/everlasting-summer/characters/shurik" className="text-green-600 hover:text-green-700 hover:underline transition-colors">Шурик</Link> — к главе клуба кибернетики Семён особой симпатии не питает, однако и откровенной неприязни не испытывает.</li>
                                    <li className="text-muted-foreground leading-relaxed"><Link href="/everlasting-summer/characters/elektronik" className="text-green-600 hover:text-green-700 hover:underline transition-colors">Электроник</Link> — Семён саркастично именует его про себя «светилом советской кибернетики». Несмотря на лёгкое раздражение, которое тот порой вызывает, его общество в целом Семёна не тяготит.</li>
                                    <li className="text-muted-foreground leading-relaxed"><Link href="/everlasting-summer/characters/pioneer" className="text-green-600 hover:text-green-700 hover:underline transition-colors">Пионер</Link> — таинственный персонаж, чьи внезапные появления всякий раз застают Семёна врасплох. Говорит загадками, и герой никак не может понять, чего тот от него хочет.</li>                                
                                </ul>
                                <h2 id="Концовки-Семёна" className="text-xl font-semibold mt-8 border-b pb-2 mb-4 scroll-mt-15">Концовки Семёна</h2>
                                <h4 className="text-base font-medium mt-3 mb-2 text-foreground scroll-mt-15">Плохая концовка (Epic Fail)</h4>
                                <p className="text-muted-foreground leading-relaxed mb-4">Если Семён решает последовать за голосом, тот на вопрос «И куда надо идти?» отвечает, что они уже на месте — и герой теряет сознание. Звучат титры с клипом <Link href="https://www.youtube.com/watch?v=-rCgImK_KEg" className="text-green-600 hover:text-green-700 hover:underline transition-colors">Between August and December — 410</Link>.</p>
                                <p className="text-muted-foreground leading-relaxed">По словам разработчиков, в этой концовке Семён навсегда остаётся пленником мира лагеря, обречённым, как и все остальные пионеры, бесконечно повторять один и тот же круг.</p>
                                <h4 className="text-base font-medium mt-3 mb-2 text-foreground scroll-mt-15">Хорошая концовка (Титан одиночества)</h4>
                                <p className="text-muted-foreground leading-relaxed mb-4">Семён не решается идти за голосом. Он садится в автобус, и перед тем как заснуть, успевает мельком увидеть силуэт девочки — впоследствии окажется, что это <Link href="/everlasting-summer/characters/yulia" className="text-green-600 hover:text-green-700 hover:underline transition-colors">Юля</Link>. Просыпается он уже в собственной квартире. Подойдя к компьютеру, Семён обнаруживает, что в реальном мире миновало всего четырнадцать часов. В мессенджере его ждут сообщения: первое — от институтского приятеля, который тепло вспоминает вчерашний вечер. Осознание того, что никакого пионерлагеря не существовало, обрушивается на Семёна с такой силой, что он в припадке разбивает клавиатуру кулаком и начинает кричать, требуя вызвать санитаров, — он убеждён, что сходит с ума.</p>
                                <p className="text-muted-foreground leading-relaxed mb-4">Вечером ему пишет незнакомка с анонимного аккаунта. Семён принимает её за кого-то с вчерашней встречи выпускников. Девушка спрашивает, помнит ли он её слова, — Семён отвечает отрицательно. Она обещает, что они ещё увидятся.</p>
                                <p className="text-muted-foreground leading-relaxed">После этого Семён возвращается к прежней затворнической жизни. Спустя какое-то время та же незнакомая девушка — снова <Link href="/everlasting-summer/characters/yulia" className="text-green-600 hover:text-green-700 hover:underline transition-colors">Юля</Link> — пишет ему снова и интересуется, изменилось ли что-нибудь в его жизни. «Ничего не поменялось», — отвечает он. Когда собеседница вскользь упоминает, что «такое не каждый день случается», Семён вдруг вспоминает о Совёнке и пытается выяснить, кто с ним говорит. Оказывается, девушка слышит его, даже когда он молчит и ничего не печатает. На вопрос «Почему я?» она отвечает, что Семён — причина всего происходящего, и обещает, что скоро он всё поймёт. Тем временем воспоминания о лагере начинают постепенно стираться из его памяти.</p>
                                <h2 id="Концовки" className="text-xl font-semibold mt-8 border-b pb-2 mb-4 scroll-mt-15">Концовки</h2>
                                <h3 id="Славя" className="text-lg font-medium mt-4 mb-3 scroll-mt-15">Концовки Слави</h3>
                                <h4 className="text-base font-medium mt-3 mb-2 text-foreground">Хорошая концовка («Тёплая ламповость»)</h4>
                                <p className="text-muted-foreground leading-relaxed">Вернувшись в своё время, Семён решает, что всё пережитое в лагере было лишь сном. Он идёт на ту самую остановку, с которой началась история, — и там снова встречает <Link href="/everlasting-summer/characters/slavya" className="text-green-600 hover:text-green-700 hover:underline transition-colors">Славю.</Link></p>
                                <h4 className="text-base font-medium mt-3 mb-2 text-foreground">Плохая концовка («Успешный превозмогатель»)</h4>
                                <p className="text-muted-foreground leading-relaxed">Семён возвращается в своё время с той же мыслью — всё это просто приснилось. Он приходит на остановку, но <Link href="/everlasting-summer/characters/slavya" className="text-green-600 hover:text-green-700 hover:underline transition-colors">Слави</Link> там нет.</p>
                                <h3 id="Лена" className="text-lg font-medium mt-4 mb-3 scroll-mt-15">Концовки Лены</h3>
                                <h4 className="text-base font-medium mt-3 mb-2 text-foreground">Хорошая концовка («Всё как у людей!»)</h4>
                                <p className="text-muted-foreground leading-relaxed">Семён женится на <Link href="/everlasting-summer/characters/lena" className="text-green-600 hover:text-green-700 hover:underline transition-colors">Лене</Link>, у них появляются дети, а сам он становится успешным писателем.</p>
                                <h4 className="text-base font-medium mt-3 mb-2 text-foreground">Плохая концовка («Вскрываемся!»)</h4>
                                <p className="text-muted-foreground leading-relaxed">Если Семён так и не признаётся <Link href="/everlasting-summer/characters/lena" className="text-green-600 hover:text-green-700 hover:underline transition-colors">Лене</Link> в любви, она сводит счёты с жизнью. Вернувшись домой и не сумев пережить эту потерю, он поступает так же.</p>
                                <h3 id="Алиса" className="text-lg font-medium mt-4 mb-3 scroll-mt-15">Концовки Алисы</h3>
                                <h4 className="text-base font-medium mt-3 mb-2 text-foreground">Хорошая концовка («Гуру пикапа»)</h4>
                                <p className="text-muted-foreground leading-relaxed">Под влиянием знакомства с <Link href="/everlasting-summer/characters/alisa" className="text-green-600 hover:text-green-700 hover:underline transition-colors">Алисой</Link> Семён создаёт рок-группу. После одного из концертов он встречает её — повзрослевшую.</p>
                                <h4 className="text-base font-medium mt-3 mb-2 text-foreground">Плохая концовка («Лидер митол-группы»)</h4>
                                <p className="text-muted-foreground leading-relaxed">Рок-группа состоялась, но <Link href="/everlasting-summer/characters/alisa" className="text-green-600 hover:text-green-700 hover:underline transition-colors">Алису</Link> Семён так и не увидит снова.</p>
                                <h3 id="Ульяна" className="text-lg font-medium mt-4 mb-3 scroll-mt-15">Концовки Ульяны</h3>
                                <h4 className="text-base font-medium mt-3 mb-2 text-foreground">Хорошая концовка («Гроза педобиров»)</h4>
                                <p className="text-muted-foreground leading-relaxed">Семён возвращается домой и берётся за ум: восстанавливается в вузе. После одной из лекций он сталкивается с повзрослевшей <Link href="/everlasting-summer/characters/ulyana" className="text-green-600 hover:text-green-700 hover:underline transition-colors">Ульяной</Link>.</p>
                                <h4 className="text-base font-medium mt-3 mb-2 text-foreground">Плохая концовка («ICQ выше среднего»)</h4>
                                <p className="text-muted-foreground leading-relaxed">Учёба возобновляется, жизнь налаживается — но <Link href="/everlasting-summer/characters/ulyana" className="text-green-600 hover:text-green-700 hover:underline transition-colors">Ульяну</Link> Семён больше не встретит.</p>
                                <h3 id="Другие-концовки" className="text-lg font-medium mt-4 mb-3 scroll-mt-15">Другие концовки</h3>
                                <h4 className="text-base font-medium mt-3 mb-2 text-foreground">Мику («What is this I don't even»)</h4>
                                <p className="text-muted-foreground leading-relaxed">Единственная концовка <Link href="/everlasting-summer/characters/miku" className="text-green-600 hover:text-green-700 hover:underline transition-colors">Мику</Link>, открывающаяся после первого прохождения на любой хороший финал. Семён оказывается на съёмочной площадке фильма о пионерском лете, а <Link href="/everlasting-summer/characters/miku" className="text-green-600 hover:text-green-700 hover:underline transition-colors">Мику</Link> — его бывшая девушка Маша. После съёмок они вместе засыпают на пляже — и просыпаются уже в настоящем лагере, где персонажи таинственно исчезают, гибнут и превращаются в зомби. Но и это оказывается лишь сценарием — который переписала сама <Link href="/everlasting-summer/characters/miku" className="text-green-600 hover:text-green-700 hover:underline transition-colors">Мику</Link>. Игра завершается поцелуем.</p>
                                <h4 className="text-base font-medium mt-3 mb-2 text-foreground">Юля (Собственная кошкодевочка»)</h4>
                                <p className="text-muted-foreground leading-relaxed">Концовка открывается только после получения всех хороших финалов. <Link href="/everlasting-summer/characters/yulia" className="text-green-600 hover:text-green-700 hover:underline transition-colors">Юля</Link> — та самая девочка с кошачьими ушками, которая является Семёну во сне. Познакомившись с ней, герой попадает в астрал, где узнаёт: <Link href="/everlasting-summer/characters/yulia" className="text-green-600 hover:text-green-700 hover:underline transition-colors">Юля</Link> была послана, чтобы наблюдать за ним и направлять его, и при этом является частью его внутреннего мира. После этого Семён просыпается у себя дома, и игрок выбирает, кого он хочет увидеть рядом.</p>
                                <h4 className="text-base font-medium mt-3 mb-2 text-foreground">Гаремная концовка («Harem master 80 lvl»)</h4>
                                <p className="text-muted-foreground leading-relaxed">Официальная концовка игры. Семён просыпается в своей квартире и слышит звонок в дверь — на пороге стоят <Link href="/everlasting-summer/characters/lena" className="text-green-600 hover:text-green-700 hover:underline transition-colors">Лена</Link>, <Link href="/everlasting-summer/characters/miku" className="text-green-600 hover:text-green-700 hover:underline transition-colors">Мику</Link>, <Link href="/everlasting-summer/characters/slavya" className="text-green-600 hover:text-green-700 hover:underline transition-colors">Славя</Link>, <Link href="/everlasting-summer/characters/alisa" className="text-green-600 hover:text-green-700 hover:underline transition-colors">Алиса</Link> и <Link href="/everlasting-summer/characters/ulyana" className="text-green-600 hover:text-green-700 hover:underline transition-colors">Ульяна</Link>. Девушки признаются, что тоже оказались в ловушке Совёнка, однако благодаря Семёну нашли связь с реальным миром и сумели выбраться.</p>
                                <h2 id="Образ-и-символизм" className="text-xl font-semibold mt-8 border-b pb-2 mb-4 scroll-mt-15">Образ и символизм</h2>
                                <p className="text-muted-foreground leading-relaxed mb-4">Одной из самых необычных деталей внешности Семёна являются его глаза. В большинстве сцен внутри лагеря они вообще не изображаются. Это сделано как отсылка к японским визуальным новеллам, где главный герой часто остаётся «без лица», чтобы игроку было проще ассоциировать себя с ним.</p>
                                <p className="text-muted-foreground leading-relaxed">Несмотря на простую внешность и пассивное поведение, Семён остаётся одним из самых обсуждаемых персонажей игры. Во многом именно его внутренние переживания, чувство одиночества и попытки понять происходящее сделали историю <Link href="/everlasting-summer/everlasting-summer" className="text-green-600 hover:text-green-700 hover:underline transition-colors">«Бесконечного лета»</Link> такой запоминающейся. </p>
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