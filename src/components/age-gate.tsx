"use client"
import {useAuth} from "@/hooks/use-auth"
import {useRouter} from "next/navigation"
export function AgeGate({children}: {children: React.ReactNode}) {
    const {user} = useAuth()
    const router = useRouter()
    if (!user) {
        return(
            <div className="flex flex-col items-center justify-center min-h-screen gap-4 text-center px-6">
                <h2 className="text-2xl font-bold">Контент 18+</h2>
                <p className="text-muted-foreground">Для просмотра этого контента необходимо войти в аккаунт</p>
                <button onClick={() => router.push("/auth/login")} className="text-primary underline">Войти</button>
                <button onClick={() => router.push("/auth/register")} className="text-primary underline">Зарегистрироваться</button>
            </div>
        )
    }
    if (!user.birthdate) {
        return(
            <div className="flex flex-col items-center justify-center min-h-screen gap-4 text-center px-6">
                <h2 className="text-2xl font-bold">Укажите дату рождения</h2>
                <p className="text-muted-foreground">Для просмотра этого контента необходимо указать дату рождения в профиле</p>
                <button onClick={() => router.push("/profile/edit")} className="text-primary underline">Перейти в профиль</button>
            </div>
        )
    }
    const age = Math.floor((Date.now() - new Date(user.birthdate).getTime()) / (1000 * 60 * 60 * 24 * 365))
    if (age < 18) {
        return(
            <div className="flex flex-col items-center justify-center min-h-screen gap-4 text-center px-6">
                <h2 className="text-2xl font-bold">Доступ ограничен</h2>
                <p className="text-muted-foreground">Этот контент доступен только пользователям старше 18 лет</p>
            </div>
        )
    }
    return <>{children}</>
}