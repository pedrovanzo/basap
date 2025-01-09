
"use client"

import { useState } from "react"

export default function UpdateClient (props?: { client: ClientData }){
  const user = props?.client

  const [clientId, setClientId] = useState(user?.id)
  const [clientName, setClientName] = useState(user?.name)
  const [clientPhone, setClientPhone] = useState(user?.phoneNumber)
  const [clientBirthDate, setClientBirthDate] = useState(user?.birthDate)
  const [clientGender, setClientGender] = useState(user?.gender)
  const [clientIsActive, setClientIsActive] = useState(user?.clientIsActive)
  const [message, setMessage] = useState('')
  const handleClientUpdateSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const id = clientId
    const name = clientName
    const birthDate = clientBirthDate
    const clientCreatedAt = 11221990
    const clientIsActive = true
    const gender = clientGender
    const phoneNumber = clientPhone

    const user: ClientData = { id, name, birthDate, clientIsActive, gender, phoneNumber }

      const res = await fetch('/api/user', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });
  
      const data = await res.json();
  
      if (data.success) {
        setMessage('Client updated successfully!');
        // router.push(`/profile/${client.id}`);
      } else {
        setMessage('Error updating client.');
      }
    }
    return (
    <>
    <nav className="p-2 bg-purple-500 text-white">
        <h2 className="text-xl">Update Client Information</h2>
    </nav>
    <form className="p-2" onSubmit={handleClientUpdateSubmit}>
      <div className="flex flex-col gap-2 border-4 border-slate-300 rounded-lg mb-2 p-2">
        <label htmlFor="clientName">
            <span>Update Name: </span>
            <input type="text" defaultValue={clientName} onChange={(e) => setClientName(e.target.value)} className='border border-slate-400 rounded-sm px-1' />
        </label>
        <label htmlFor="clientPhone">
            <span>Update Phone: </span>
            <input type="number" defaultValue={clientPhone} onChange={(e) => setClientPhone(parseInt(e.target.value))} />
        </label>
        <label htmlFor="clientBirthDate">
            <span>Update Birthday: </span>
            <input type="date" defaultValue={clientBirthDate} onChange={(e) => setClientBirthDate(e.target.value)} />
        </label>
        <label htmlFor="clientGender" className="flex flex-col gap-1 max-w-80">
            <span>Gender: </span>
            <select defaultValue={clientGender} onChange={(e) => setClientGender(e.target.value)} name="clientGender" id="" className="w-full">
                <option hidden>Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
            </select>
        </label>
        <label htmlFor="clientIsActive" className="flex flex-col gap-1 items-start max-w-80">
            <span>Is Currently Active: </span>
            <input type="checkbox" defaultChecked={clientIsActive} onChange={(e) => setClientIsActive(e.target.checked)} name="clientIsActive"/>
        </label>
      </div>
        <div>User Session List</div>
        <div>User Payment List</div>
      <button type="submit" className="p-2 bg-green-500">SUBMIT</button>
    </form>
    {message && <p>{message}</p>}
    </>
  )
}
