interface ClientSession {
    clientId: String,
    clientSessionTitle: String,
    clientSessionType: ClientSessionTypeValues,
    clientSessionDuration: Number,
    clientSessionStatus: 'scheduled' | 'pending' | 'confirmed' | 'failed' | 'completed'
}
interface ClientSessionTypeValues {
    clientSessionTypeValues: 'only' | 'every' | 'custom'
}
const clientSessionFoo: ClientSession = {
    clientId: '1',
    clientSessionTitle: 'Terapia Tipo 1',
    clientSessionType: {
        clientSessionTypeValues: 'every'
    },
    clientSessionDuration: 123,
    clientSessionStatus: 'scheduled'
}