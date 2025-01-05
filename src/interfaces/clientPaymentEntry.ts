interface ClientPaymentEntry {
    clientId: String,
    clientPaymentValue: Number,
    clientPaymentTimestamp: Number
}
const payFoo: ClientPaymentEntry = {
    clientId: '1',
    clientPaymentValue: 300,
    clientPaymentTimestamp: 112233
}