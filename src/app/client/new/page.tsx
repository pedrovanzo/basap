"use client";
import { useEffect, useState } from 'react';
import clientArray from './../../../../data/users.json'
export default function Page() {
    const [clientId, setClientId] = useState('')
    const [clientName, setClientName] = useState('')
    const [clientPhone, setClientPhone] = useState(0)
    const [clientBirthDate, setClientBirthDate] = useState(Date)
    const [clientGender, setClientGender] = useState('')
    const [message, setMessage] = useState('')
    useEffect(()=> {
      setClientId(clientArray.length.toString())
    }, [clientArray.length])
    const handleClientSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const id = clientId
        const name = clientName
        const birthDate = clientBirthDate
        const clientCreatedAt = 11221990
        const clientIsActive = true
        const gender = clientGender
        const phoneNumber = clientPhone
        const user: ClientData = { id, name, birthDate, clientCreatedAt, clientIsActive, gender, phoneNumber }
        try {
            const response = await fetch('/api/save-user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            });
            const result = await response.json();
            if (result.success) {
                setMessage('User saved successfully!');
            } else {
                setMessage('Error saving user.');
            }
        } catch (error) {
            console.error(error)
            setMessage('Error saving user.')
        }
    }
    return (
    <>
    <nav className="p-2 bg-purple-500 text-purple-200">
        <h2 className="text-xl">Basap New Client</h2>
    </nav>
    <form onSubmit={handleClientSubmit} className="flex flex-col gap-4 p-2">
      <label htmlFor="clientName" className="flex flex-col gap-1 max-w-80">
        <span>Name</span>
        <input type="text" value={clientName} onChange={(e) => setClientName(e.target.value)} name="clientName" id="" className="px-1 w-full" placeholder="Type..." required />
      </label>
      <label htmlFor="clientPhoneNumer" className="flex flex-col gap-1 max-w-80">
        <span>Phone Number</span>
        <input type="number" value={undefined} onChange={(e) => setClientPhone(parseInt(e.target.value))} name="clientPhoneNumer" id="" className="px-1 w-full" placeholder="Type..." />
      </label>
      <label htmlFor="clientBirthDate" className="flex flex-col gap-1 max-w-80">
        <span>Birth Date</span>
        <input type="date" value={clientBirthDate} onChange={(e) => setClientBirthDate(e.target.value)} name="clientBirthDate" id="" className="px-1 w-full" placeholder="Type..." />
      </label>
      <label htmlFor="clientGender" className="flex flex-col gap-1 max-w-80">
        <span>Gender</span>
        <select value={clientGender} onChange={(e) => setClientGender(e.target.value)} name="clientGender" id="" className="w-full">
            <option hidden>Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
        </select>
      </label>
      <button type="submit" className="bg-green-500 w-full mt-4 p-2 text-white text-xl font-bold">Submit</button>
    </form>
    {message && <p>{message}</p>}
    </>
    );
}
