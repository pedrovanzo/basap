import router from "next/router";
import { useState, useEffect } from "react";


interface ClientData {
  id: string;
  name: string;
  phoneNumber: number;
  birthDate: string;
  gender: string;
  clientCreatedAt: number;
  clientIsActive: boolean;
}

export default async function UpdatePage ({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const slug = (await params).id
  const [client, setClient] = useState<ClientData | null>(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (!slug) return; // Skip if id is not ready yet (during SSR)

    const fetchClientData = async () => {
      const res = await fetch(`/api/user?id=${slug}`);
      const data = await res.json();
      if (data.success) {
        setClient(data.client);
      } else {
        setMessage('Client not found.');
      }
    };
    fetchClientData();
  }, [slug]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!client) return;

    const res = await fetch('/api/user', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(client),
    });

    const data = await res.json();

    if (data.success) {
      setMessage('Client updated successfully!');
      router.push(`/profile/${client.id}`); // Redirect to the profile page
    } else {
      setMessage('Error updating client.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setClient((prevClient) => ({
      ...prevClient!,
      [e.target.name]: e.target.value,
    }));
  };

  if (!client) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Update Profile</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={client.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Phone Number:</label>
          <input
            type="number"
            name="phoneNumber"
            value={client.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Birth Date:</label>
          <input
            type="date"
            name="birthDate"
            value={client.birthDate}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Gender:</label>
          <select
            name="gender"
            value={client.gender}
            onChange={handleChange}
            required
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <button type="submit">Update Client</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};
