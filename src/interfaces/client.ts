// Main Client Object.
interface ClientData {
    id: String,
    name: String,
    phoneNumber: Number,
    birthDate: Number,
    Gender: Boolean,
    clientCreatedAt: Number,
    clientIsActive: Boolean,
    clientPaymentOverdueSinceLast: String,
}
// Adjacent Objects. They will generate instances every time the Provider registers an entry about a Client.
interface ClientSession {
    clientId: ClientData,
    clientSessionTitle: String,
    clientSessionType: ClientSessionType,
    clientSessionDuration: Number,
    clientSessionStatus: 'scheduled' | 'pending' | 'confirmed' | 'failed' | 'completed'
}
interface ClientPaymentEntry {
    clientId: ClientData,
    clientPaymentValue: Number,
    clientPaymentTimestamp: Number
}
// Helper Interfaces
interface ClientSessionType {
    clientSessionType: 'only' | 'every' | 'custom'
}