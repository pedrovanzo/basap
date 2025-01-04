// Main Client Object.
interface ClientData {
    id: String,
    name: String,
    phoneNumber: Number,
    birthDate: Number,
    gender: 'male' | 'female' | 'other',
    clientCreatedAt: Number,
    clientIsActive: Boolean,
}
// Adjacent Objects. They will generate instances every time the Provider registers an entry about a Client.


// Helper Interfaces

const foo: ClientData = {
    id: '1',
    name: 'Foo',
    phoneNumber: 123,
    birthDate: 11021993,
    gender: 'male',
    clientCreatedAt: 11042025,
    clientIsActive: true
}