// import { useState } from 'react'
import data from './../../../../../data/users.json'
// atribuir objeto ao item de indice igual ao slug
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
        <h2 className="text-xl">Update Client Information</h2>
    </nav>
    <div className="p-2">
      <div className="flex flex-col gap-2 border-4 border-slate-300 rounded-lg mb-2 p-2">
        <label htmlFor="clientName">
            <span>Update Name: </span>
            <input type="text" defaultValue={user?.name} className='border border-slate-400 rounded-sm px-1' />
        </label>
        <label htmlFor="clientPhone">
            <span>Update Phone: </span>
            <input type="number" defaultValue={user?.phoneNumber} />
        </label>
        <label htmlFor="clientBirthDate">
            <span>Update Birthday: </span>
            <input type="date" defaultValue={user?.birthDate} />
        </label>
        <label htmlFor="clientGender" className="flex flex-col gap-1 max-w-80">
            <span>Gender: </span>
            <select defaultValue={user?.gender} name="clientGender" id="" className="w-full">
                <option hidden>Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
            </select>
        </label>
        <label htmlFor="clientIsActive" className="flex flex-col gap-1 max-w-80">
            <span>Is Currently Active: </span>
            <select name="clientIsActive" className="w-full">
                <option value="true">Yes</option>
                <option value="false">No</option>
            </select>
        </label>
      </div>
        <div>User Session List</div>
        <div>User Payment List</div>
    </div>
    </>
    )
}
