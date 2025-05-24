import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-gray-100 p-4 shadow">
      <h1 className="text-xl font-bold">RedFlag Radar</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/journal" className="hover:underline">Journal</Link>
        <Link to="/insights" className="hover:underline">Insights</Link>
        <Link to="/patterns" className="hover:underline">Patterns</Link>
        <Link to="/zone-check" className="hover:underline">Zone Check</Link>
        <Link to="/profile" className="hover:underline">Profile</Link>
      </div>
    </nav>
  );
}
