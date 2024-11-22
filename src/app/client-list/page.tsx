const clientList = [
    {
        id: 1,
        name: 'Foo',
        timestamp: '11/11/2024'
    },
    {
        id: 2,
        name: 'Bar',
        timestamp: '12/11/2024'
    },
]
export default function Page() {
    return (
    <>
    <div className="flex flex-row p-2 bg-neutral-800 text-white">Client List</div>
    <ul>
    {clientList.map((client) => <li key={client.id}>{client.name} | Next session: {client.timestamp} | Ping on whatsapp</li>)}
    </ul>
    </>
    )
}
