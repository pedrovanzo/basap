"use client";
import Link from "next/link";
import datajson from  './../../../../data/users.json'
export default function Page() {
  return (
  <>
    <nav className="p-2 bg-purple-500 text-purple-200">
        <h2 className="text-xl">Basap Client List</h2>
    </nav>
    <ul className="flex flex-col">
      {datajson.map((item, key)=> {
        return (
          <li key={key} className="flex flex-row gap-2 justify-between leading-none p-2 odd:bg-purple-200">
            <div className="flex flex-row gap-2">
              <div><Link href={`/client/${item.id}`}>{item.name}</Link></div>
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
