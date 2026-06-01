import {NextRequest, NextResponse} from "next/server"
import {createClient} from "@/utils/supabase/server"
import {cookies} from "next/headers"

export async function POST(req: NextRequest) {
    const cookieStore = await cookies()
    const supabase = createClient(cookieStore)
    const body = await req.json()
    const {action} = body

    if (action === "login") {
        const {email, password} = body

        const {data, error} = await supabase
            .rpc("check_password", {p_email: email, p_password: password})

        if (error || !data) {
            return NextResponse.json({success: false, error: "Неверный email или пароль"})
        }

        const {data: user} = await supabase
            .from("users")
            .select("id, name, email, avatar, cover, bio, role, birthdate, is_subscribed, created_at")
            .eq("email", email)
            .single()

        return NextResponse.json({success: true, user})
    }

    if (action === "register") {
        const {name, email, password} = body

        const {data: existing} = await supabase
            .from("users")
            .select("id")
            .eq("email", email)
            .single()

        if (existing) {
            return NextResponse.json({success: false, error: "Email уже занят"})
        }

        const {error} = await supabase
            .rpc("register_user", {p_name: name, p_email: email, p_password: password})

        if (error) {
            return NextResponse.json({success: false, error: "Ошибка регистрации"})
        }

        const {data: user} = await supabase
            .from("users")
            .select("id, name, email, avatar, cover, bio, role, birthdate, is_subscribed, created_at")
            .eq("email", email)
            .single()

        return NextResponse.json({success: true, user})
    }

    return NextResponse.json({success: false, error: "Неизвестное действие"})
}