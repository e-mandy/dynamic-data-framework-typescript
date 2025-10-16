import { User } from './User'

interface Post {
    id: number,
    name: string,
    description: string,
    likes: number,
    author: User
};