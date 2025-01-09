
import data from './../../../../../data/users.json'
import UpdateClient from './updateClient'
export default async function Page({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const slug = (await params).id
    // dataArray.clients.push(data.find(user => user.id === slug))
    const userFind = data.find(user => user.id === slug)
    const user: ClientData = {
        id: userFind!.id,
        name: userFind!.name,
        birthDate: userFind!.birthDate,
        clientIsActive: userFind!.clientIsActive,
        gender: userFind!.gender,
        phoneNumber: userFind!.phoneNumber
    }
    return (
    <>
    <UpdateClient client={user}  />
    </>
    )
}
