"use client"
import clientMap from './../../data/users.json'

export default function Home() {
  return (
    <>
    <div className="flex flex-row gap-4 items-center px-2 py-1 border-b-8 border-purple-500">
      <div className="text-2xl underline cursor-pointer">Day</div>
      <div className="text-2xl cursor-pointer">Week</div>
      <div className="text-2xl cursor-pointer">Month</div>
    </div>
    <ul className="flex flex-col">
      {clientMap.map((item, key)=> {
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
