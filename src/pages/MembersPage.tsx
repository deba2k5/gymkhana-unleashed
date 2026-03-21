"use client";

import { Search, Mail } from "lucide-react";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

/* ⭐ PRESIDENT */
const president = {
  id: 0,
  name: "Dr. Sanghamitra Podder",
  role: "President",
  email: "president@iemgymkhana.in",
  image: "/coming.png",
};

/* 👥 MEMBERS */
const members = Array.from({ length: 150 }, (_, i) => ({
  id: i + 1,
  name: `Member ${i + 1}`,
  role: "",
  email: `member${i + 1}@iemgymkhana.in`,
  image: "/coming.png",
}));

const MembersPage = () => {
  const [search, setSearch] = useState("");

  const filteredMembers = members.filter((m) =>
    m.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="max-w-[1100px] mx-auto px-4 sm:px-6 pt-24 pb-16">

        {/* 🔥 HEADER + PRESIDENT */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-10 items-center mb-12">

          {/* LEFT: HEADING */}
          <div className="text-left">
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-orbitron text-gray-900 mb-2 leading-[0.9]">
              MEET THE <br />
              <span className="text-[#7a2e2e]">TEAM</span>
            </h1>

            <p className="text-sm text-gray-500 max-w-md">
              The people behind IEM Gymkhana
            </p>
          </div>

          {/* RIGHT: PRESIDENT (CENTERED + DOWN) */}
          <div className="flex justify-center md:justify-center md:mt-12">
            <div className="relative group w-[180px] h-[220px]">

              {/* BACK */}
              <div className="absolute inset-0 rounded-lg border border-[#7a2e2e] bg-white p-3 flex flex-col justify-between 
              transition-all duration-300 group-hover:translate-x-2 group-hover:translate-y-4">

                <div>
                  <p className="text-[10px] font-orbitron text-[#7a2e2e] uppercase tracking-widest">
                    {president.role}
                  </p>
                  <h3 className="text-sm font-semibold text-gray-900 mt-1">
                    {president.name}
                  </h3>
                </div>

                <a
                  href={`mailto:${president.email}`}
                  className="flex items-center gap-1 text-xs text-gray-400 hover:text-[#7a2e2e]"
                >
                  <Mail className="w-3 h-3" />
                  Mail
                </a>
              </div>

              {/* FRONT */}
              <div className="absolute inset-0 rounded-lg overflow-hidden border border-[#7a2e2e] bg-white 
              transition-all duration-300 group-hover:-translate-x-2 group-hover:-translate-y-4">

                <img
                  src={president.image}
                  alt={president.name}
                  className="w-full h-full object-cover"
                />

                {/* NAME + ROLE */}
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-2 text-center">
                  <p className="text-[11px] font-semibold text-white leading-tight">
                    {president.name}
                  </p>
                  <p className="text-[9px] text-gray-200 uppercase tracking-widest">
                    {president.role}
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 🔍 SEARCH */}
        <div className="relative max-w-xs mb-10">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 text-sm bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7a2e2e]/20"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* 👥 MEMBERS GRID */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">

          {filteredMembers.map((member) => (
            <div key={member.id} className="relative group h-[170px]">

              {/* BACK */}
              <div className="absolute inset-0 rounded-md border border-[#7a2e2e] bg-white p-2 flex flex-col justify-between 
              transition-all duration-300 group-hover:translate-x-1 group-hover:translate-y-3">

                <h3 className="text-[10px] font-semibold text-gray-900 text-center">
                  {member.name}
                </h3>

                <a
                  href={`mailto:${member.email}`}
                  className="flex justify-center text-gray-400 hover:text-[#7a2e2e]"
                >
                  <Mail className="w-3 h-3" />
                </a>
              </div>

              {/* FRONT */}
              <div className="absolute inset-0 rounded-md overflow-hidden border border-[#7a2e2e] bg-white 
              transition-all duration-300 group-hover:-translate-x-1 group-hover:-translate-y-3">

                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />

                <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-1 text-center">
                  <p className="text-[9px] font-semibold text-white truncate">
                    {member.name}
                  </p>
                </div>
              </div>

            </div>
          ))}

        </div>

      </main>

      <Footer />
    </div>
  );
};

export default MembersPage;