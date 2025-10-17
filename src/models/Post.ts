import type { User } from "./User"

interface Post {
    id: number,
    name: string,
    description: string,
    likes: number,
    author: User,
    role: "admin" | "seller" | "client"
};