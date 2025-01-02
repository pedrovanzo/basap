"use client";

import React from "react";

export default function Page() {
  return (
  <>
    <nav className="p-2 bg-purple-500 text-purple-200">
        <h2 className="text-xl">Basap Client</h2>
    </nav>
    <ul className="p-2">
        <li>Name</li>
        <li>Number/Whatsapp</li>
        <li>Birth Date</li>
        <li>Gender</li>
        <li>Address</li>
        <li>Timestamp</li>
        <li>
            <span className="font-bold">Session Object</span>
            <ul className="pl-6 border-l-2">
                <li>Session Name/Title</li>
                <li>
                    Session Type
                    <ul className="pl-6 border-l-2">
                        <li>only (once and done)</li>
                        <li>every (repeat in cycles)</li>
                        <li>custom (multiple without specific order)</li>
                    </ul>
                </li>
                <li>Session Duration</li>
                <li>Session Status (scheduled, pending, confirmed, failed, completed)</li>
            </ul>
        </li>
        <li>
            <span className="font-bold">Payment Object</span>
            <ul className="pl-6 border-l-2">
                <li>overdue since last(manually inserted)</li>
                <li>register payment</li>
            </ul>
        </li>
        <li>
            <span className="font-bold">History Object (Registry)</span>
            <ul className="pl-6 border-l-2">
                <li>Payment</li>
                <li>Sessions</li>
            </ul>
        </li>
    </ul>
  </>
  );
}
