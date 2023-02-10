import React from 'react';
import Link from 'next/link';

type LinkType = {
  label: string;
  path: string;
};

const links: LinkType[] = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'Movies',
    path: '/movies',
  },
  {
    label: 'Series',
    path: '/series',
  },
];

export default function Navbar() {
  return (
    <header className="flex p-4 bg-black bg-opacity-25">
      <div className="w-1/4"></div>
      <nav className="flex-1">
        <ul className="flex justify-center gap-16">
          {links.map((link) => (
            <li
              key={link.path}
              className="transition-all border border-transparent border-b-2 hover:border-b-white"
            >
              <Link href={link.path}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="w-1/4"></div>
    </header>
  );
}
