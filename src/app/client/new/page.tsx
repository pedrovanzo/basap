"use client";
import React, { useState } from "react";
export default function Page() {
    const [clientName, setClientName] = useState('')
    const [clientPhone, setClientPhone] = useState(0)
    const [clientBirthDate, setClientBirthDate] = useState(Date)
    const [clientGender, setClientGender] = useState('')
    const [message, setMessage] = useState('')
    const handleClientSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const user = { clientName, clientPhone, clientBirthDate, clientGender }
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
    const foo:ClientData = {
        id: '1',
        name: 'Pedro Henrique',
        phoneNumber: 123,
        birthDate: 11021993,
        gender: 'male',
        clientCreatedAt: 11042025,
        clientIsActive: true
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
            <option value="1">Male</option>
            <option value="2">Female</option>
            <option value="0">Other</option>
        </select>
      </label>
      <button type="submit" className="bg-green-500 w-full mt-4 p-2 text-white text-xl font-bold">Submit</button>
    </form>
    {message && <p>{message}</p>}
    </>
    );
}
