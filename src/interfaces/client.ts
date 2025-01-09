// Main Client Object.
interface ClientData {
    id: string | undefined,
    name: string | undefined,
    phoneNumber?: number,
    birthDate?: string,
    gender?: string,
    clientIsActive?: boolean,
}
interface ClientArray {
    clients: ClientData[]
}