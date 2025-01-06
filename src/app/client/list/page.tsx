"use client";
import React from "react";
export default function Page() {
    const clientMap: ClientArray = {
        clients: [{
          id: '1',
          name: 'Pedro Henrique',
          phoneNumber: 123,
          birthDate: 11021993,
          gender: 'male',
          clientCreatedAt: 11042025,
          clientIsActive: true
        },
        {
          id: '2',
          name: 'Francisco Valentim',
          phoneNumber: 124,
          birthDate: 11021990,
          gender: 'male',
          clientCreatedAt: 6012025,
          clientIsActive: true
        },
        {
          id: '3',
          name: 'Maria Vanzo',
          phoneNumber: 124,
          birthDate: 11021990,
          gender: 'male',
          clientCreatedAt: 6012025,
          clientIsActive: true
        },
        {
          id: '4',
          name: 'Barbara de Rezende',
          phoneNumber: 124,
          birthDate: 11021990,
          gender: 'male',
          clientCreatedAt: 6012025,
          clientIsActive: true
        },
      ]}
  return (
  <>
    <nav className="p-2 bg-purple-500 text-purple-200">
        <h2 className="text-xl">Basap Client List</h2>
    </nav>
    <ul className="flex flex-col">
      {clientMap.clients.map((item, key)=> {
        return (
          <li key={key} className="flex flex-row gap-2 justify-between leading-none p-2 odd:bg-purple-200">
            <div className="flex flex-row gap-2">
              <div><a href="/client/profile">{item.name}</a></div>
            </div>
            <div>
              <div className="self-end">actions</div>
            </div>
          </li>
        )
      })}
    </ul>
  </>
  );
}
