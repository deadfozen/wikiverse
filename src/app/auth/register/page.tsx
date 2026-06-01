"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Scroll } from "lucide-react";
import { useAuth } from "@/hooks/use-auth";

export default function RegisterPage() {
  const router = useRouter();
  const { login } = useAuth();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (password.length < 6) {
      setError("Пароль должен содержать минимум 6 символов");
      return;
    }

    setLoading(true);

    try {
      // 1️⃣ Регистрируем пользователя через API
      const res = await fetch("/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "register",
          name,
          email,
          password
        })
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        setError(data.error || "Ошибка регистрации");
        return;
      }

      // 2️⃣ Сразу логиним пользователя через useAuth
      const loginResult = await login(email, password);

      if (!loginResult.success) {
        setError(loginResult.error || "Ошибка входа после регистрации");
        return;
      }

      // 3️⃣ Переход в профиль
      router.push("/profile");

    } catch (err: any) {
      setError(err.message || "Ошибка сервера");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30 p-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-primary/10 rounded-full">
              <Scroll className="h-8 w-8 text-primary" />
            </div>
          </div>
          <CardTitle className="text-2xl">Создать аккаунт</CardTitle>
          <CardDescription>
            Присоединяйтесь к сообществу WikiVerse
          </CardDescription>
        </CardHeader>

        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            {error && (
              <div className="p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded-md">
                {error}
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="name">Имя пользователя</Label>
              <Input
                id="name"
                type="text"
                placeholder="LuffyFan"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Пароль</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <p className="text-xs text-muted-foreground">
                Минимум 6 символов
              </p>
            </div>
          </CardContent>

          <CardFooter className="flex flex-col gap-4">
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Регистрация..." : "Зарегистрироваться"}
            </Button>

            <p className="text-sm text-muted-foreground text-center">
              Уже есть аккаунт?{" "}
              <Link
                href="/auth/login"
                className="text-primary hover:underline font-medium"
              >
                Войти
              </Link>
            </p>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
