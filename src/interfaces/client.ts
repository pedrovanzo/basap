// Main Client Object.
interface ClientData {
    id: string,
    name: string,
    phoneNumber: number,
    birthDate: string,
    gender: string,
    clientCreatedAt: number,
    clientIsActive: boolean,
}
interface ClientArray {
    clients: ClientData[]
}