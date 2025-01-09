import Link from 'next/link'
import data from './../../../../data/users.json'
import DeleteClientButton from './deleteClient'
export default async function Page({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const slug = (await params).id
    // const [userState, setUserState] = useState()
    const user = data.find(user => user.id === slug)

    return (
    <>
    <nav className="p-2 bg-purple-500 text-white">
        <h2 className="text-xl">Basap Client Profile</h2>
        <div className="flex flex-row justify-between items-center">
            <Link href={`/client/update/${user?.id}`}>Update</Link>
            <DeleteClientButton slug={slug} />
        </div>
    </nav>
    <div className="p-2">
      <div className="border-4 border-slate-300 rounded-lg mb-2 p-2">
        <div>ID SLUG: {slug}</div>
        <div>ID FIND: {user?.id}</div>
        <div>NOME: {user?.name}</div>
        <div>PHONE: {user?.phoneNumber}</div>
        <div>BIRTHDAY: {user?.birthDate}</div>
        <div>GENDER: {user?.gender}</div>
        <div>Active: {user?.clientIsActive ? 'Active' : 'Unactive'}</div>
      </div>
        <div>User Session List</div>
        <div>User Payment List</div>
    </div>
    </>
    )
}
