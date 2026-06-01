"use client"
import {useState, useEffect} from "react"
import {useRouter} from "next/navigation"
import {ArrowLeft, Save, Upload} from "lucide-react"
import {Button} from "@/components/ui/button"
import {Card, CardContent, CardHeader, CardTitle, CardDescription} from "@/components/ui/card"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import {Textarea} from "@/components/ui/textarea"
import {useAuth} from "@/hooks/use-auth"
import {createClient} from "@/utils/supabase/client"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function EditProfilePage() {
    const router = useRouter()
    const {user, updateUser} = useAuth()
    const supabase = createClient()
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        avatar: "",
        cover: "",
        bio: "",
        birthdate: "",
    })
    const [uploading, setUploading] = useState(false)

    useEffect(() => {
        if (user) {
            setFormData({
                name: user.name,
                email: user.email,
                avatar: user.avatar || "",
                cover: user.cover || "",
                bio: user.bio || "",
                birthdate: user.birthdate || "",
            })
        }
    }, [user])

    if (!user) {
        return <div className="min-h-screen flex items-center justify-center">Загрузка...</div>
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const uploadFile = async (file: File, type: "avatar" | "cover") => {
        setUploading(true)
        const ext = file.name.split(".").pop()
        const path = `${type}/${user.id}.${ext}`

        const {error} = await supabase.storage
            .from("avatars")
            .upload(path, file, {upsert: true})

        if (error) {
            console.error(error)
            setUploading(false)
            return
        }

        const {data} = supabase.storage.from("avatars").getPublicUrl(path)
        setFormData(prev => ({...prev, [type]: data.publicUrl}))
        setUploading(false)
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, type: "avatar" | "cover") => {
        const file = e.target.files?.[0]
        if (file) uploadFile(file, type)
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        await updateUser(formData)
        router.push("/profile")
    }

    return (
        <>
        <Header/>
        <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20 py-12">
            <div className="container mx-auto px-4 max-w-3xl">
                <div className="flex items-center gap-4 mb-8">
                    <Button variant="ghost" size="icon" onClick={() => router.back()}>
                        <ArrowLeft className="w-5 h-5"/>
                    </Button>
                    <h1 className="text-3xl font-bold">Редактирование профиля</h1>
                </div>
                <form onSubmit={handleSubmit}>
                    <Card>
                        <CardHeader>
                            <CardTitle>Основная информация</CardTitle>
                            <CardDescription>Обновите ваши публичные данные</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            {/* Превью */}
                            <div className="relative h-48 w-full rounded-lg overflow-hidden bg-muted">
                                {formData.cover ? (
                                    <img src={formData.cover} alt="Cover" className="w-full h-full object-cover"/>
                                ) : (
                                    <div className="w-full h-full bg-gradient-to-r from-orange-500 via-red-600 to-purple-900"/>
                                )}
                                <div className="absolute -bottom-10 left-8">
                                    <div className="relative h-32 w-32 rounded-full border-4 border-background bg-muted overflow-hidden">
                                        {formData.avatar ? (
                                            <img src={formData.avatar} alt="Avatar" className="w-full h-full object-cover"/>
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center text-4xl font-bold bg-slate-200">
                                                {formData.name[0]}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="h-10"/>

                            <div className="space-y-4">
                                {/* Загрузка аватара и шапки */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label>Аватар</Label>
                                        <div className="flex gap-2">
                                            <Input
                                                name="avatar"
                                                placeholder="https://..."
                                                value={formData.avatar}
                                                onChange={handleChange}
                                            />
                                            <label className="cursor-pointer">
                                                <Button type="button" variant="outline" size="icon" asChild>
                                                    <span>
                                                        <Upload className="w-4 h-4"/>
                                                    </span>
                                                </Button>
                                                <input
                                                    type="file"
                                                    accept="image/*"
                                                    className="hidden"
                                                    onChange={e => handleFileChange(e, "avatar")}
                                                />
                                            </label>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <Label>Шапка профиля</Label>
                                        <div className="flex gap-2">
                                            <Input
                                                name="cover"
                                                placeholder="https://..."
                                                value={formData.cover}
                                                onChange={handleChange}
                                            />
                                            <label className="cursor-pointer">
                                                <Button type="button" variant="outline" size="icon" asChild>
                                                    <span>
                                                        <Upload className="w-4 h-4"/>
                                                    </span>
                                                </Button>
                                                <input
                                                    type="file"
                                                    accept="image/*"
                                                    className="hidden"
                                                    onChange={e => handleFileChange(e, "cover")}
                                                />
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="name">Имя пользователя</Label>
                                    <Input id="name" name="name" value={formData.name} onChange={handleChange} required/>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required/>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="bio">Обо мне</Label>
                                    <Textarea id="bio" name="bio" placeholder="Расскажите немного о себе..." className="min-h-[120px]" value={formData.bio} onChange={handleChange}/>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="birthdate">Дата рождения</Label>
                                    <Input id="birthdate" name="birthdate" type="date" value={formData.birthdate} onChange={handleChange}/>
                                </div>

                            </div>

                            <div className="flex justify-end gap-4 pt-4">
                                <Button type="button" variant="outline" onClick={() => router.back()}>Отмена</Button>
                                <Button type="submit" disabled={uploading}>
                                    <Save className="w-4 h-4 mr-2"/>
                                    {uploading ? "Загрузка..." : "Сохранить изменения"}
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </form>
            </div>
        </div>
        <Footer/>
        </>
    )
}