'use client'

import { ArrowRight } from "lucide-react";
import { useState } from "react";
import logo from '@/assets/logosaas.png'
import Image from 'next/image'
import { Menu, X } from "lucide-react"

const menu = [
  { id: 1, name: 'Sobre', link: '#' },
  { id: 2, name: 'Características', link: '#' },
  { id: 3, name: 'Clientes', link: '#' },
  { id: 4, name: 'Atualizações', link: '#' },
  { id: 5, name: 'Ajuda', link: '#' },
]

export const Header = () => {

  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen)
  }

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md border-b border-neutral-700/80">
      {/* Navbar Superior*/}
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
        <p className="text-white/60 hidden lg:flex">Simplifique seu fluxo de trabalho e aumente sua produtividade</p>
        <div className="inline-flex gap-1 items-center">
          <p>Começe agora</p>
          <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" / >
        </div>
      </div>
      {/* Navbar Inferior */}
      <div className='container p-3 mx-auto relative lg:text-sm items-center'>
        <div className='flex justify-between items-center'>
          <div className='flex items-center flex-shrink-0'>
            <Image className='h-10 w-10 mr-2 items-center' src={logo} alt="logo" />
            <a href='#' className='text-xl tracking-tight hidden lg:flex'>Aretis</a>
          </div>
          <ul className="hidden lg:flex gap-4">
            {menu.map((data) => (
              <li key={data.id}>
                <a href={data.link}>{data.name}</a>
              </li>
            ))}
          </ul>
          <button className="hidden lg:flex bg-black text-white rounded-lg font-medium p-2 tracking-tight">Obtenha de graça</button>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button
              onClick={toggleNavbar}
              className="relative w-8 h-8 flex items-center justify-center">
              <Menu className={`absolute transition-all duration-300 ease-in-out transform ${mobileDrawerOpen ? "opacity-0 scale-50 rotate-90" : "opacity-100 scale-100 rotate-0"}`} />
              <X className={`absolute transition-all duration-300 ease-in-out transform ${mobileDrawerOpen ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-50 rotate-90"}`} />
            </button>
          </div>
        </div>

        {/* Menu Mobile */}

        {mobileDrawerOpen && (
          <div className="mt-3 fixed right-0 z-20 bg-[#f5f7ff]/95 w-full p-12 flex flex-col justify-center items-center lg:hidden" onClick={toggleNavbar}>
            <div className="" onClick={(e) => e.stopPropagation()}> {/*// Impede que o clique no menu feche ele */}
              <ul className="items-center justify-center flex flex-col">
                {menu.map((data) => (
                  <li key={data.id} className="py-4">
                    <a href={data.link}>{data.name}</a>
                  </li>
                ))}
              </ul>
              <div className="flex space-x-6 mt-2">
                <a href="#" className="py-2 px-3 border rounded-md">Entrar</a>
                <a href="#" className="py-2 px-3 rounded-md bg-black text-white">Obtenha Agora</a>
              </div>
            </div>
          </div>
        )}


      </div>
    </header>
  );
};
