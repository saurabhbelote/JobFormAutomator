import { useState } from "react";

export default function DeleteAccountModal({ onClose }) {
  const [reason, setReason] = useState("");
  const [confirmation, setConfirmation] = useState("");

  const handleDelete = () => {
    if (confirmation === "DELETE") {
      alert("Account Deleted Successfully!");
      onClose();
    } else {
      alert("Please type 'DELETE' to confirm.");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div
        className="bg-gradient-to-b from-[#11011E] via-[#35013e] to-[#11011E] bg-[#11011E] border-[1px] border-white text-white p-10 rounded-lg shadow-lg max-w-md w-full relative animate-scaleIn"
      >
        <button
          className="absolute top-2 right-3 text-gray-300 hover:text-red-500 text-xl"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold text-center mb-4">Deleting Account</h2>
        <p className="text-center text-sm text-gray-300 mb-4">
          Deleting Account will remove all of your information from our
          database. This cannot be undone.
        </p>
        <p className="text-center text-sm mb-4">
          To confirm this, type <span className="font-bold text-red-500">"DELETE"</span>
        </p>
        <input
          type="text"
          value={confirmation}
          onChange={(e) => setConfirmation(e.target.value)}
          placeholder="Type DELETE"
          className="w-full p-2 rounded-md bg-transparent text-white border border-gray-700 focus:outline-none mb-4"
        />
        <textarea
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          placeholder="Enter your reason"
          className="w-full p-2 rounded-md bg-transparent text-white border border-gray-700 focus:outline-none mb-4"
        />
        <button
          onClick={handleDelete}
          className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-md font-semibold transition"
        >
          Delete Account
        </button>
      </div>
    </div>
  );
}
