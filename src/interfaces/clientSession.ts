interface ClientSession {
    clientId: String,
    clientSessionTitle: String,
    clientSessionType: ClientSessionType,
    clientSessionDuration: Number,
    clientSessionStatus: 'scheduled' | 'pending' | 'confirmed' | 'failed' | 'completed'
}
interface ClientSessionType {
    clientSessionType: 'only' | 'every' | 'custom'
}