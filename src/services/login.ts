import { umioApi } from "./umioApi"

interface LoginResponse {
    dados: string
    mensagem?: string
    ok: boolean
}

export const loginApi = async (email: string, senha: string) => {
    try {
        console.log(`[loginApi] POST ${umioApi.defaults.baseURL}/Login`)
        const data = await umioApi.post<LoginResponse>("/Login", {
            email: email,
            senha: senha,
        })

        return data
    } catch (error) {
        console.log(error)
        return null
    }
}