"use client"
import {useState, useRef, useEffect} from "react"
import {useRouter} from "next/navigation"
import Fuse from "fuse.js"
import {Search, Clock, X} from "lucide-react"
import {pages} from "@/data/pages"
const HISTORY_KEY = "wiki-search-history"
const MAX_HISTORY = 5
export function SearchBar() {
    const [query, setQuery] = useState("")
    const [focused, setFocused] = useState(false)
    const [history, setHistory] = useState<string[]>([])
    const router = useRouter()
    const ref = useRef<HTMLDivElement>(null)
    const fuse = new Fuse(pages, {
        keys: ["label", "keywords"],
        threshold: 0.4,
        minMatchCharLength: 1,
        ignoreLocation: true,
        includeScore: true
    })
    useEffect(() => {
        const saved = localStorage.getItem(HISTORY_KEY)
        if (saved) setHistory(JSON.parse(saved))
    }, [])
    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setFocused(false)
            }
        }
        document.addEventListener("mousedown", handler)
        return () => document.removeEventListener("mousedown", handler)
    }, [])
    const saveToHistory = (label: string) => {
        const updated = [label, ...history.filter(h => h !== label)].slice(0, MAX_HISTORY)
        setHistory(updated)
        localStorage.setItem(HISTORY_KEY, JSON.stringify(updated))
    }
    const removeFromHistory = (label: string) => {
        const updated = history.filter(h => h !== label)
        setHistory(updated)
        localStorage.setItem(HISTORY_KEY, JSON.stringify(updated))
    }
    const navigate = (href: string, label: string) => {
        saveToHistory(label)
        setQuery("")
        setFocused(false)
        router.push(href)
    }
    const results = query ? pages.filter(page => {
        const q = query.toLowerCase()
        return page.label.toLowerCase().includes(q) || page.keywords.toLowerCase().includes(q)
    }) : []
    const showDropdown = focused && (query ? results.length > 0 : history.length > 0)
    return(
        <div ref={ref} className="relative w-full max-w-[400px]">
            <div className="flex items-center h-10 px-3 bg-muted/50 rounded-md border border-transparent hover:border-border transition-colors">
                <Search className="w-4 h-4 opacity-70 shrink-0"/>
                <input type="text" placeholder="Поиск..." value={query} onChange={e => setQuery(e.target.value)} onFocus={() => setFocused(true)} className="flex-1 bg-transparent text-sm px-2 outline-none placeholder:text-muted-foreground"/>
                {query && (
                    <button onClick={() => setQuery("")}>
                        <X className="w-3 h-3 opacity-50 hover:opacity-100 transition-opacity"/>
                    </button>
                )}
            </div>
            {showDropdown && (
                <div className="absolute top-12 left-0 w-full bg-popover border rounded-md shadow-lg z-50 overflow-hidden">
                    {query ? (
                        results.map(page => (
                            <button key={page.href} onClick={() => navigate(page.href, page.label)} className="flex items-center gap-2 w-full px-3 py-2 text-sm hover:bg-accent transition-colors text-left">
                                <Search className="w-3 h-3 opacity-50 shrink-0"/>
                                {page.label}
                            </button>
                        ))
                    ) : (
                        history.map(label => {
                            const page = pages.find(p => p.label === label)
                            return(
                                <div key={label} className="flex items-center gap-2 px-3 py-2 hover:bg-accent transition-colors">
                                    <Clock className="w-3 h-3 opacity-50 shrink-0"/>
                                    <button onClick={() => page && navigate(page.href, label)}  className="flex-1 text-sm text-left">{label}</button>
                                    <button onClick={() => removeFromHistory(label)}>
                                        <X className="w-3 h-3 opacity-50 hover:opacity-100 transition-opacity"/>
                                    </button>
                                </div>
                            )
                        })
                    )}
                </div>
            )}
        </div>
    )
}