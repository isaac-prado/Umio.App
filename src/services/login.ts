import { umioApi } from "./umioApi"

interface LoginResponse {
    dados: string
    mensagem?: string
    ok: boolean
}

export const loginApi = async (email: string, password: string) => {
    try {
        const data = await umioApi.post<LoginResponse>("/login", {
            email: email,
            password: password,
        })

        return data
    } catch (error) {
        console.log(error)
        return null
    }
}