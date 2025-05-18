
import React, { useState } from "react";

export default function MentorshipRequests() {
  const initialRequests = [
    {
      id: 1,
      name: "Jane Smith",
      level: "Expert",
      skill: "React",
      message: "I would like to learn more about React hooks and context API.",
      date: "2023-11-15",
      time: "14:30",
      email: "jane@example.com",
      status: "pending",
      avatar: "https://i.pravatar.cc/150?img=1",
    },
    {
      id: 2,
      name: "Alex Johnson",
      level: "Intermediate",
      skill: "JavaScript",
      message: "Need help with advanced JavaScript concepts.",
      date: "2023-11-10",
      time: "09:15",
      email: "alex@example.com",
      status: "pending",
      avatar: "https://i.pravatar.cc/150?img=2",
    },
  ];

  const [requests, setRequests] = useState(initialRequests);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const handleAccept = (id) => {
    setRequests((prev) =>
      prev.map((r) => (r.id === id ? { ...r, status: "approved" } : r))
    );
  };

  const handleDecline = (id) => {
    setRequests((prev) =>
      prev.map((r) => (r.id === id ? { ...r, status: "rejected" } : r))
    );
  };

  const filteredRequests = requests.filter((r) => {
    const matchSearch =
      r.name.toLowerCase().includes(search.toLowerCase()) ||
      r.skill.toLowerCase().includes(search.toLowerCase());
    const matchFilter = filter === "all" || r.status === filter;
    return matchSearch && matchFilter;
  });

  return (
    <div className="max-w-3xl mx-auto bg-gray-100 p-6 min-h-screen">
      <h1 className="text-3xl font-bold mb-1">Mentorship Requests</h1>
      <p className="text-gray-600 mb-6">
        Manage requests from users who want to learn from you.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by name or skill..."
          className="flex-1 border border-gray-300 rounded px-3 py-2"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="border border-gray-300 rounded px-3 py-2"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All Requests</option>
          <option value="pending">Pending</option>
          <option value="approved">Approved</option>
          <option value="rejected">Rejected</option>
        </select>
      </div>

      {filteredRequests.map((r) => (
        <div
          key={r.id}
          className="bg-white shadow rounded p-5 mb-4 flex flex-col gap-2"
        >
          <div className="flex items-center gap-4">
            <img
              src={r.avatar}
              alt="Avatar"
              className="w-12 h-12 rounded-full"
            />
            <div>
              <h3 className="font-semibold">{r.name}</h3>
              <span className="text-sm text-blue-600">{r.level}</span>
            </div>
          </div>

          <div>
            <p className="text-sm text-gray-600">Skill</p>
            <p className="font-medium">{r.skill}</p>
          </div>

          <div>
            <p className="text-sm text-gray-600">Message:</p>
            <p className="text-gray-800">{r.message}</p>
          </div>

          <div className="text-sm text-gray-500">
            Requested Date: <span className="font-medium">{r.date}</span>
          </div>

          <div className="text-sm text-gray-500">
            Requested Time: <span className="font-medium">{r.time}</span>
          </div>

          <div className="text-sm text-gray-500">
            Contact:{" "}
            <a href={`mailto:${r.email}`} className="text-blue-600">
              {r.email}
            </a>
          </div>

          <div className="flex items-center gap-2 mt-3">
            {r.status === "pending" && (
              <>
                <button
                  onClick={() => handleDecline(r.id)}
                  className="px-4 py-2 bg-red-100 text-red-600 rounded hover:bg-red-200"
                >
                  Decline
                </button>
                <button
                  onClick={() => handleAccept(r.id)}
                  className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                >
                  Accept
                </button>
                <span className="ml-auto bg-yellow-100 text-yellow-800 px-2 py-1 text-xs rounded">
                  Pending
                </span>
              </>
            )}
            {r.status === "approved" && (
              <span className="ml-auto bg-green-100 text-green-800 px-2 py-1 text-xs rounded">
                Approved
              </span>
            )}
            {r.status === "rejected" && (
              <span className="ml-auto bg-red-100 text-red-800 px-2 py-1 text-xs rounded">
                Rejected
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
