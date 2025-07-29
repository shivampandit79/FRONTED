import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Dream11 Team Today", icon: "🏆" },
    { label: "Fantasy Cricket", icon: "🏏" },
    { label: "Fantasy Football", icon: "⚽" },
    { label: "Fantasy Kabaddi", icon: "🤼" },
    { label: "App Download", icon: "📱" },
    { label: "Fantasy Sports", icon: "🎮" },
    { label: "Dream11 Winners", icon: "🥇" },
    { label: "Dream11 Private Contest", icon: "🆚" },
    { label: "IPL Fantasy", icon: "🏟️" },
  ];

  return (
    // ✅ Wrap everything in a div with background image

    <div
  className="min-h-screen bg-cover bg-center flex"
  style={{
    backgroundImage:
      "url('https://t4.ftcdn.net/jpg/07/67/65/69/240_F_767656917_7eO1pxxNZeZp9xC8j77axHXbeIT5rN6E.jpg')",
  }}
>
  
  {/* Sidebar */}
  <div
    className={`h-full w-72 bg-black bg-opacity-90 text-white z-40 transform transition-transform duration-300 ${
      open ? "translate-x-0" : "-translate-x-full"
    } fixed md:static`}
  >
    {/* Logo and Menu */}
    <div className="flex items-center px-4 py-4 border-b border-white/20">
      <img
        src="https://d13ir53smqqeyp.cloudfront.net/d11-static-pages/images/dream11LogoWhite.webp"
        alt="Dream11"
        className="h-8"
      />
    </div>

    <ul className="mt-4 px-4 space-y-2">
      {navItems.map((item, index) => (
        <li
          key={index}
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 cursor-pointer transition"
        >
          <span className="text-xl">{item.icon}</span>
          <span>{item.label}</span>
        </li>
      ))}
    </ul>
  </div>

  {/* Main Content */}
  <div className="flex-1 p-8 text-white ml-72">
    <h1 className="text-3xl font-bold">Welcome to Dream11 Clone</h1>
    <p className="mt-2">Sidebar is working perfectly with background image.</p>
  </div>

  {/* Toggle Button */}
  <button
    className="fixed top-4 right-4 z-50 text-black bg-[#6a1b1a] p-2 rounded-md focus:outline-none"
    onClick={() => setOpen(!open)}
  >
    {open ? <FaTimes size={20} /> : <FaBars size={20} />}
  </button>
</div>

  );
}
