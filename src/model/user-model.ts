import {User} from "@prisma/client";

// Buat model Response untuk User
export type UserResponse = {
    username: string;
    name: string;
    token?: string;
}

// Buat model Request untuk Register
export type CreateUserRequest = {
    username: string;
    name: string;
    password: string;
}

// Buat model Request untuk Login
export type LoginUserRequest = {
    username: string;
    password: string;
}

// Buat model Request untuk Update
export type UpdateUserRequest = {
    name?: string;
    password?: string;
}

// Konversi User (PRISMA) menjadi UserResponse
export function toUserResponse(user: User): UserResponse {
    return {
        name: user.name,
        username: user.username
    }
}

