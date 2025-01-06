"use client"

export default function Home() {
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
    <div className="flex flex-row gap-4 items-center px-2 py-1 border-b-8 border-purple-500">
      <div className="text-2xl underline">Today</div>
      <div className="text-2xl">Month</div>
    </div>
    <ul className="flex flex-col">
      {clientMap.clients.map((item, key)=> {
        return (
          <li key={key} className="flex flex-row gap-2 justify-between leading-none p-2 odd:bg-purple-200">
            <div className="flex flex-row gap-2">
              <div>{item.clientCreatedAt}</div>
              <div>{item.name}</div>
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
