import React, { useState } from 'react';

export default function Journal() {
  const [entry, setEntry] = useState('');
  const handleSubmit = () => {
    alert('Entry submitted: ' + entry);
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold">New Date Entry</h2>
      <textarea
        className="w-full mt-4 p-2 border rounded"
        rows="10"
        placeholder="Describe your date, emotions, red/green flags..."
        value={entry}
        onChange={(e) => setEntry(e.target.value)}
      ></textarea>
      <button
        className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        onClick={handleSubmit}
      >
        Submit Entry
      </button>
    </div>
  );
}
