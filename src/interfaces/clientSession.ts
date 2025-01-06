interface ClientSession {
    clientId: string,
    clientSessionTitle: string,
    clientSessionType: ClientSessionTypeValues,
    clientSessionDuration: number,
    clientSessionStatus: 'scheduled' | 'pending' | 'confirmed' | 'failed' | 'completed'
}
interface ClientSessionTypeValues {
    clientSessionTypeValues: 'only' | 'every' | 'custom'
}
const clientSessionFoo1: ClientSession = {
    clientId: '1',
    clientSessionTitle: 'Terapia Tipo 1',
    clientSessionType: {
        clientSessionTypeValues: 'only'
    },
    clientSessionDuration: 123,
    clientSessionStatus: 'scheduled'
}
const clientSessionFoo2: ClientSession = {
    clientId: '1',
    clientSessionTitle: 'Terapia Tipo 1',
    clientSessionType: {
        clientSessionTypeValues: 'every'
    },
    clientSessionDuration: 123,
    clientSessionStatus: 'completed'
}
const clientSessionFoo3: ClientSession = {
    clientId: '1',
    clientSessionTitle: 'Terapia Tipo 1',
    clientSessionType: {
        clientSessionTypeValues: 'every'
    },
    clientSessionDuration: 123,
    clientSessionStatus: 'pending'
}
const clientSessionFoo4: ClientSession = {
    clientId: '1',
    clientSessionTitle: 'Terapia Tipo 1',
    clientSessionType: {
        clientSessionTypeValues: 'custom'
    },
    clientSessionDuration: 123,
    clientSessionStatus: 'failed'
}