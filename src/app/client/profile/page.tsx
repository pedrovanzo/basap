"use client";
import React from "react";
export default function Page() {
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
        <h2 className="text-xl">Basap Client Profile</h2>
    </nav>
    <div>
        <div>{foo.id}</div>
        <div>{foo.name}</div>
        <div>{foo.phoneNumber}</div>
        <div>{foo.birthDate}</div>
        <div>{foo.gender}</div>
        <div>{foo.clientIsActive ? 'Active' : 'Unactive'}</div>
    </div>
  </>
  );
}
