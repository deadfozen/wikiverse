"use client";

import { useParams, useRouter } from "next/navigation";
import { Shield, Award, Flame, ArrowLeft, Activity, Clock, BookOpen, Heart, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { useAuth } from "@/hooks/use-auth";
import { ACHIEVEMENT_IDS } from "@/hooks/use-auth";
import { characters } from "@/data/characters";
import { useLocalStorage } from "@/hooks/use-local-storage";
import CommentsSection from "@/components/comments-section";
import { useState, useEffect } from "react";

// Список достижений (дублируем логику из основного профиля)
const allAchievements = [
  { id: ACHIEVEMENT_IDS.FIRST_STEPS, title: "Первые шаги", icon: <Award className="h-6 w-6" />, color: "text-blue-500" },
  { id: ACHIEVEMENT_IDS.UNIQUE_STYLE, title: "Свой стиль", icon: <Shield className="h-6 w-6" />, color: "text-indigo-500" },
  { id: ACHIEVEMENT_IDS.MANGA_NOVICE, title: "Читач", icon: <BookOpen className="h-6 w-6" />, color: "text-orange-500" },
  { id: ACHIEVEMENT_IDS.MANGA_EXPERT, title: "Мангака", icon: <BookOpen className="h-6 w-6" />, color: "text-orange-600" },
  { id: ACHIEVEMENT_IDS.ANIME_VIEWER, title: "Зритель", icon: <Clock className="h-6 w-6" />, color: "text-red-500" },
  { id: ACHIEVEMENT_IDS.ANIME_OTAKU, title: "Отаку", icon: <Clock className="h-6 w-6" />, color: "text-red-600" },
  { id: ACHIEVEMENT_IDS.CHARACTER_FAN, title: "Исследователь", icon: <Activity className="h-6 w-6" />, color: "text-purple-500" },
  { id: ACHIEVEMENT_IDS.MILLION_BOUNTY, title: "Лям за голову", icon: <Award className="h-6 w-6" />, color: "text-yellow-600" },
  { id: ACHIEVEMENT_IDS.BOUNTY_HUNTER, title: "Охотник за наградами", icon: <Award className="h-6 w-6" />, color: "text-amber-500" },
  { id: ACHIEVEMENT_IDS.PIRATE_KING, title: "Король Пиратов", icon: <Award className="h-6 w-6" />, color: "text-yellow-400" },
  { id: ACHIEVEMENT_IDS.WEEK_STREAK, title: "Огонёк недели", icon: <Flame className="h-6 w-6" />, color: "text-orange-600" },
];

export default function PublicProfilePage() {
  const params = useParams();
  const router = useRouter();
  const { getAllUsers } = useAuth();
  const [favorites] = useLocalStorage<string[]>("favorites", []); // Это избранное ТЕКУЩЕГО пользователя (зрителя), не владельца профиля
  
  // Fix hydration error: wait until client is mounted to read from localStorage
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20 py-12 flex items-center justify-center">
        <div className="text-muted-foreground">Загрузка...</div>
      </div>
    );
  }

  // Находим пользователя по ID
  const users = getAllUsers();
  const profileUser = users.find((u) => u.id === params.id);

  // Update Document Title
  useEffect(() => {
    if (profileUser) {
      document.title = `${profileUser.name} | Профиль`;
    }
  }, [profileUser?.id]);

  if (!profileUser) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20 py-12 flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Пользователь не найден</h1>
        <Button onClick={() => router.back()}>Назад</Button>
      </div>
    );
  }

  const formattedBounty = new Intl.NumberFormat('ru-RU').format(profileUser.bounty || 0);
  const joinedDate = profileUser.createdAt
    ? new Date(profileUser.createdAt).toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' })
    : "Недавно";

  // Формируем список избранных владельца профиля (если бы мы хранили их в объекте пользователя, но сейчас это в LS)
  // Для публичного профиля мы не можем показать его "Избранное", так как оно хранится в LS браузера владельца.
  // Покажем только его достижения и статы.

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header Section */}
        <div className="flex items-center gap-4 mb-8">
          <Button variant="ghost" size="icon" onClick={() => router.back()}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-2xl font-bold">Профиль пользователя</h1>
        </div>

        <div className="relative mb-8">
          <div 
            className="h-32 w-full rounded-t-xl bg-gradient-to-r from-orange-500 via-red-600 to-purple-900"
            style={{ 
              backgroundImage: profileUser.cover ? `url(${profileUser.cover})` : undefined,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            {!profileUser.cover && <div className="w-full h-full bg-gradient-to-r from-orange-500 via-red-600 to-purple-900" />}
          </div>
          <div className="absolute -bottom-12 left-8">
            <Avatar className="h-24 w-24 border-4 border-background shadow-xl">
              <AvatarImage src={profileUser.avatar} alt={profileUser.name} />
              <AvatarFallback className="text-3xl bg-orange-100 text-orange-600">
                {profileUser.name[0]}
              </AvatarFallback>
            </Avatar>
          </div>
          <div className="absolute top-4 right-4">
             {profileUser.role === 'admin' && (
               <Badge className="bg-purple-600 hover:bg-purple-700 text-white gap-1">
                 <Shield className="h-3 w-3" />
                 Admin
               </Badge>
             )}
          </div>
        </div>

        <div className="mt-16 space-y-6">
          {/* Main Info Card */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-2xl">{profileUser.name}</CardTitle>
                  <CardDescription className="mt-1 text-base flex items-center gap-4">
                    {profileUser.email}
                    {profileUser.createdAt && (
                       <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                         <Calendar className="h-3 w-3" />
                         {joinedDate}
                       </span>
                    )}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <Separator />
            <CardContent className="pt-6">
              <h3 className="text-sm font-medium text-muted-foreground mb-4">Обо мне</h3>
              <p className="text-sm leading-relaxed text-foreground">
                {profileUser.bio || "Пользователь пока не добавил описание."}
              </p>
            </CardContent>
          </Card>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-2xl font-bold text-primary">{profileUser.stats?.episodes || 0}</div>
                <div className="text-xs text-muted-foreground mt-1">Серий</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-2xl font-bold text-primary">{profileUser.stats?.chapters || 0}</div>
                <div className="text-xs text-muted-foreground mt-1">Глав</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-2xl font-bold text-primary flex items-center justify-center">
                  <Award className="h-5 w-5 text-yellow-500 mr-1" />
                  <span className="text-sm font-mono leading-none">
                    {formattedBounty} ๛
                  </span>
                </div>
                <div className="text-xs text-muted-foreground mt-1">Награда</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-2xl font-bold text-primary">{profileUser.achievements?.length || 0}</div>
                <div className="text-xs text-muted-foreground mt-1">Достижений</div>
              </CardContent>
            </Card>
          </div>

          {/* Огонёк Card */}
          <Card className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border-orange-200 dark:border-orange-900">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2 text-orange-600 dark:text-orange-400">
                <Flame className="h-6 w-6 fill-current" />
                Серия активности
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center py-4">
                <div className="text-center">
                  <div className="text-6xl font-bold text-orange-600 dark:text-orange-400 mb-2 drop-shadow-sm">
                    {profileUser.flame || 0}
                  </div>
                  <div className="text-sm font-medium text-orange-700 dark:text-orange-300">
                    {profileUser.flame === 1 ? 'день подряд' : 'дней подряд'}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Achievements Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5 text-yellow-500" />
                Достижения
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {allAchievements.map((ach) => {
                  const isUnlocked = profileUser.achievements?.includes(ach.id);
                  return (
                    <div
                      key={ach.id}
                      className={`
                        relative flex items-start gap-4 p-4 rounded-lg border transition-all duration-300
                        ${isUnlocked 
                          ? `bg-muted/20 border-primary/20` 
                          : 'bg-muted/30 border-muted grayscale opacity-40'
                        }
                      `}
                    >
                      <div className="p-2 rounded-full bg-background shrink-0">
                        <div className={isUnlocked ? ach.color : 'text-muted-foreground'}>
                          {ach.icon}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className={`font-semibold text-sm ${isUnlocked ? 'text-foreground' : 'text-muted-foreground'}`}>
                          {ach.title}
                        </h4>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Comments Section for Profile Page */}
          <CommentsSection pageId={`profile-${profileUser.id}`} />
        </div>
      </div>
    </div>
  );
}