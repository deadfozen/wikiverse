export interface Universe {
    id: string
    name: string
    aliases: string[]
    image: string
    description: string
    ready: boolean | number
}
export const universes = [
    { 
        id: "everlasting-summer", 
        name: "Бесконечное Лето", 
        aliases: ["бл", "бесконечное лето", "beskonechnoe leto", "everlasting summer", "es", "лето", "пионерлагерь", "семён", "семен", "алиса", "советский"], 
        image: "/es_ru.webp", 
        description: "«Бесконечное лето» — визуальный роман о Семёне, оказавшемся в пионерском лагере 1980-х.", 
        ready: 0.4 
    },
    { 
        id: "everlasting-summer-2", 
        name: "Бесконечное Лето 2", 
        aliases: ["бл2", "бл 2", "бесконечное лето 2", "everlasting summer 2", "es2", "лето 2"], 
        image: "/es2_ru.webp", 
        description: "Продолжение легендарной визуальной новеллы «Бесконечное Лето» уже скоро!", 
        ready: false 
    },
    { 
        id: "love-money-rocknroll", 
        name: "Любовь, Деньги, Рок-н-Ролл", 
        aliases: ["лмр", "лдр", "любовь деньги рок", "love money rocknroll", "lmr", "рок н ролл", "80е", "80-е"], 
        image: "/lmr_ru.webp", 
        description: "Романтика 80-х, тайны и интриги, предательство и самопожертвование.", 
        ready: false 
    },
    { 
        id: "minecraft", 
        name: "Minecraft", 
        aliases: ["майнкрафт", "майн", "mc", "крафт", "minecraft", "майнкрафт вики", "выживание", "стройка"], 
        image: "/minecraft.webp", 
        description: "Исследуйте бесконечные миры и стройте что угодно — от домов до грандиозных замков.", 
        ready: false 
    },
    { 
        id: "one-piece", 
        name: "One Piece", 
        aliases: ["ван пис", "ван-пис", "оп", "op", "one piece", "луффи", "luffi", "пираты", "аниме", "манга", "гранд лайн"], 
        image: "/one-piece.webp", 
        description: "Монки Д. Луффи мечтает найти легендарное сокровище и стать Королём Пиратов.", 
        ready: false 
    },
    { 
        id: "schedule-i", 
        name: "Schedule I", 
        aliases: ["шедул", "шедьюл", "schedule", "sci", "наркобарон", "наркотики", "хайленд", "highland"], 
        image: "/schedule-i.webp", 
        description: "От мелкого наркоторговца до крупного наркобарона в грязном городе Хайленд-Пойнт.", 
        ready: false 
    },
]