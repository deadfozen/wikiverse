"use client"
import Link from "next/link"
import {Shield, Settings, LogOut, Calendar, User, Crown} from "lucide-react"
import {Button} from "@/components/ui/button"
import {Card, CardContent, CardHeader, CardTitle, CardDescription} from "@/components/ui/card"
import {Badge} from "@/components/ui/badge"
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar"
import {Separator} from "@/components/ui/separator"
import {useAuth} from "@/hooks/use-auth"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ProfilePage() {
    const {user, logout} = useAuth()

    if (!user) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-muted/30 p-4">
                <h1 className="text-2xl font-bold mb-4">Вход не выполнен</h1>
                <p className="text-muted-foreground mb-6">Пожалуйста, войдите, чтобы просмотреть профиль.</p>
                <Link href="/auth/login">
                    <Button>Войти</Button>
                </Link>
            </div>
        )
    }

    const joinedDate = user.created_at
        ? new Date(user.created_at).toLocaleDateString("ru-RU", {day: "numeric", month: "long", year: "numeric"})
        : "Недавно"

    return (
        <>
        <Header/>
        <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20 py-12">
            <div className="container mx-auto px-4 max-w-3xl">
                {/* Обложка и аватар */}
                <div className="relative mb-8">
                    <div
                        className="h-32 w-full rounded-t-xl bg-gradient-to-r from-orange-500 via-red-600 to-purple-900"
                        style={{
                            backgroundImage: user.cover ? `url(${user.cover})` : undefined,
                            backgroundSize: "cover",
                            backgroundPosition: "center"
                        }}
                    />
                    <div className="absolute -bottom-12 left-8">
                        <Avatar className="h-24 w-24 border-4 border-background shadow-xl">
                            <AvatarImage src={user.avatar} alt={user.name}/>
                            <AvatarFallback className="text-3xl">{user.name[0]}</AvatarFallback>
                        </Avatar>
                    </div>
                    <div className="absolute top-4 right-4">
                        <Link href="/profile/edit">
                            <Button variant="secondary" size="sm">
                                <Settings className="w-4 h-4 mr-2"/>
                                Настройки
                            </Button>
                        </Link>
                    </div>
                </div>

                <div className="mt-16 space-y-6">
                    {/* Основная информация */}
                    <Card>
                        <CardHeader>
                            <div className="flex items-center justify-between">
                                <div>
                                    <CardTitle className="text-2xl flex items-center gap-3">
                                        {user.name}
                                        {user.role === "admin" && (
                                            <Badge className="bg-purple-600 hover:bg-purple-700 text-white gap-1">
                                                <Shield className="w-3 h-3"/>
                                                Admin
                                            </Badge>
                                        )}
                                        {user.is_subscribed && (
                                            <Badge className="bg-yellow-500 hover:bg-yellow-600 text-white gap-1">
                                                <Crown className="w-3 h-3 fill-current"/>
                                                Premium
                                            </Badge>
                                        )}
                                    </CardTitle>
                                    <CardDescription className="mt-1">{user.email}</CardDescription>
                                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground mt-1">
                                        <Calendar className="w-3 h-3"/>
                                        <span>На сайте с: {joinedDate}</span>
                                    </div>
                                </div>
                            </div>
                        </CardHeader>
                        <Separator/>
                        <CardContent className="pt-6">
                            <h3 className="text-sm font-medium text-muted-foreground mb-2">Обо мне</h3>
                            <p className="text-sm leading-relaxed">
                                {user.bio || "Пользователь пока не добавил описание."}
                            </p>
                        </CardContent>
                    </Card>

                    {/* Кнопка выхода */}
                    <Card>
                        <CardContent className="pt-6">
                            <Button variant="destructive" onClick={logout} className="w-full max-w-xs">
                                <LogOut className="w-4 h-4 mr-2"/>
                                Выйти из аккаунта
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}