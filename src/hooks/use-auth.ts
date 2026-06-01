"use client"
import {useState, useEffect, useCallback} from "react"
import {createClient} from "@/utils/supabase/client"

interface User {
    id: string
    name: string
    email: string
    avatar?: string
    cover?: string
    bio?: string
    role?: string
    birthdate?: string
    is_subscribed?: boolean
    subscription_expiry?: number
    created_at?: string
}

export function useAuth() {
    const [user, setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState(true)
    const supabase = createClient()

    useEffect(() => {
        const session = localStorage.getItem("wiki-session")
        if (session) {
            const localUser = JSON.parse(session)
            setUser(localUser)
            supabase
                .from("users")
                .select("id, name, email, avatar, cover, bio, role, birthdate, is_subscribed, created_at")
                .eq("id", localUser.id)
                .single()
                .then(({data}) => {
                    if (data) {
                        setUser(data)
                        localStorage.setItem("wiki-session", JSON.stringify(data))
                    }
                })
        }
        setLoading(false)
    }, [])

    const login = async (email: string, password: string): Promise<{success: boolean; error?: string}> => {
        const res = await fetch("/api/users", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({action: "login", email, password})
        })
        const result = await res.json()
        if (result.success) {
            setUser(result.user)
            localStorage.setItem("wiki-session", JSON.stringify(result.user))
        }
        return result
    }

    const register = async (name: string, email: string, password: string): Promise<{success: boolean; error?: string}> => {
        const res = await fetch("/api/users", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({action: "register", name, email, password})
        })
        const result = await res.json()
        if (result.success) {
            setUser(result.user)
            localStorage.setItem("wiki-session", JSON.stringify(result.user))
        }
        return result
    }

    const logout = () => {
        setUser(null)
        localStorage.removeItem("wiki-session")
    }

    const updateUser = async (updates: Partial<User>) => {
        if (!user) return
        const {error} = await supabase
            .from("users")
            .update(updates)
            .eq("id", user.id)
        if (!error) {
            const updatedUser = {...user, ...updates}
            setUser(updatedUser)
            localStorage.setItem("wiki-session", JSON.stringify(updatedUser))
        }
    }

    const getAllUsers = useCallback(async (): Promise<User[]> => {
        const {data, error} = await supabase.from("users").select("*")
        if (error) return []
        return data || []
    }, [])

    const promoteToAdmin = async (userId: string, isAdmin: boolean) => {
        await supabase
            .from("users")
            .update({role: isAdmin ? "admin" : "user"})
            .eq("id", userId)
        if (user && user.id === userId) {
            updateUser({role: isAdmin ? "admin" : "user"})
        }
    }

    return {user, loading, login, register, logout, updateUser, getAllUsers, promoteToAdmin}
}