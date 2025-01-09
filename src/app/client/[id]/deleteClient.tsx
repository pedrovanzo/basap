"use client"

import { redirect } from "next/navigation";

export default function DeleteClientButton(props: {slug: string}) {
    const handleDeleteClient = async() => {
        const res = await fetch(`/api/user?id=${props.slug}`, {
            method: 'DELETE',
        });
        const data = await res.json();
        if (data.success) {
            // Redirect to the homepage or a clients list page
            console.log("SUCCESS")
            redirect(`/client/list`)
        } else {
            console.log("Error deleting client")
        }
    }
    return <button onClick={handleDeleteClient} className="px-2 py-1 bg-red-500 rounded-md">Delete</button>;
}
