// Main Client Object.
interface ClientData {
    id: string,
    name: string,
    phoneNumber: number,
    birthDate: number,
    gender: 'male' | 'female' | 'other',
    clientCreatedAt: number,
    clientIsActive: boolean,
}
interface ClientArray {
    clients: ClientData[]
}