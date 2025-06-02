import { Cliente } from "../interface/Cliente"
import { umioApi } from "./umioApi"

export const registerApi = async (email: string, password: string) => {
    try {
        const data = await umioApi.post<Cliente>("/register", {
            email: email,
            password: password,
        })

        return data
    } catch (error) {
        return error
    }
}