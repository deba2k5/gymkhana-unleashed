import { Search, User, Mail, Shield, Zap, Globe } from "lucide-react";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const members = [
  { id: 1, name: "Arjun Mehta", role: "President", department: "Computer Science", email: "president@iemgymkhana.in", bio: "Leading the vision for a more connected and innovative campus culture.", icon: <Shield className="w-5 h-5" /> },
  { id: 2, name: "Sneha Roy", role: "General Secretary", department: "Electronics", email: "gen-sec@iemgymkhana.in", bio: "Managing cross-society collaborations and administrative excellence.", icon: <Zap className="w-5 h-5" /> },
  { id: 3, name: "Rohan Das", role: "Technical Head", department: "IT", email: "tech@iemgymkhana.in", bio: "Driving technical fests and open-source initiatives across the institute.", icon: <Globe className="w-5 h-5" /> },
  { id: 4, name: "Priya Singh", role: "Cultural Head", department: "Mechanical", email: "cultural@iemgymkhana.in", bio: "Orchestrating IEMPACT and preserving our rich cultural heritage.", icon: <User className="w-5 h-5" /> },
  // Add more as needed
];

const MembersPage = () => {
  const [search, setSearch] = useState("");

  const filteredMembers = members.filter(m => 
    m.name.toLowerCase().includes(search.toLowerCase()) || 
    m.role.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background dot-grid font-sans selection:bg-blue-100">
      <Navbar />
      
      <main className="max-w-[1400px] mx-auto px-6 lg:px-12 py-32 md:py-48">
        <div className="max-w-4xl mb-24">
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-[10px] font-black uppercase tracking-widest border border-blue-100">
            Gymkhana Leadership 2024-25
          </div>
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter text-gray-900 mb-8 leading-[0.85]">
            MEET THE <br /><span className="text-gray-300">VISIONARIES.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-500 font-medium leading-relaxed max-w-2xl">
            The dedicated team of student leaders driving excellence in technical, cultural, and sports domains.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative max-w-xl mb-20 group">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-blue-600 transition-colors" />
          <input 
            type="text" 
            placeholder="Search by name or role..." 
            className="w-full pl-14 pr-8 py-5 bg-white border border-gray-100 rounded-2xl shadow-xl shadow-gray-200/50 focus:outline-none focus:ring-4 focus:ring-blue-600/5 focus:border-blue-600 transition-all text-lg font-medium"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMembers.map((member) => (
            <div 
              key={member.id} 
              className="premium-card p-10 group relative overflow-hidden flex flex-col"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50 rounded-bl-[5rem] -z-0 group-hover:bg-blue-50 transition-colors duration-500" />
              
              <div className="relative z-10 flex items-center justify-between mb-10">
                <div className="w-16 h-16 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300">
                  {member.icon}
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.2em] mb-1 block">
                    {member.department}
                  </span>
                  <p className="text-sm font-black text-gray-900 uppercase tracking-widest">{member.role}</p>
                </div>
              </div>

              <div className="relative z-10 mb-8">
                <h3 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">
                  {member.name}
                </h3>
                <p className="text-gray-500 font-medium leading-relaxed text-sm h-12 overflow-hidden italic">
                  "{member.bio}"
                </p>
              </div>

              <div className="mt-auto relative z-10 pt-8 border-t border-gray-50 flex items-center justify-between">
                <a 
                  href={`mailto:${member.email}`} 
                  className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 hover:text-blue-600 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  Connect
                </a>
                <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                   <div className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-pulse" />
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
