interface ClientPaymentEntry {
    clientId: string,
    clientPaymentValue: number,
    clientPaymentTimestamp: number
}
const payFoo1: ClientPaymentEntry = {
    clientId: '1',
    clientPaymentValue: 300,
    clientPaymentTimestamp: 112233
}
const payFoo2: ClientPaymentEntry = {
    clientId: '1',
    clientPaymentValue: 300,
    clientPaymentTimestamp: 112233
}
const payFoo3: ClientPaymentEntry = {
    clientId: '2',
    clientPaymentValue: 900,
    clientPaymentTimestamp: 112233
}