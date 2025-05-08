'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function KatalogPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const products = [
    {
      title: 'Dekorasi Pernikahan',
      description: 'Dekorasi elegan yang membuat hari pernikahan Anda semakin istimewa.',
      img: '/images/k1.jpg',
    },
    {
      title: 'Dokumentasi Foto & Video',
      description: 'Abadikan momen indah Anda dengan dokumentasi foto dan video profesional.',
      img: '/images/k4.jpg',
    },
    {
      title: 'MC & Hiburan',
      description: 'Pandu acara Anda dengan MC berpengalaman dan hiburan menarik.',
      img: '/images/k5.jpeg',
    },
    {
      title: 'Perlengkapan Pernikahan',
      description: 'Segala perlengkapan yang Anda butuhkan untuk hari spesial Anda.',
      img: '/images/k6.jpeg',
    },
    {
      title: 'Koordinasi Acara',
      description: 'Koordinasi acara yang rapi dan terorganisir agar acara berjalan lancar.',
      img: '/images/k7.jpeg',
    },
  ];

  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Navbar */}
      <header className="flex justify-between items-center py-1 bg-white w-full m-0 px-0 fixed top-0 right-0 z-50 border-b border-gray-200 shadow-md">
        <div className="mr-10 ml-4">
          <Link href="/" className="block">
            <Image
              src="/images/logo.jpg"
              alt="Logo"
              width={60}
              height={10}
              priority
            />
          </Link>
        </div>
        <div className="lg:hidden pr-4" onClick={toggleMenu}>
          {isMenuOpen ? <X className="w-6 h-6 text-gray-800" /> : <Menu className="w-6 h-6 text-gray-800" />}
        </div>
        <nav className={`absolute top-full left-0 w-full bg-white lg:static lg:w-auto lg:flex space-x-0 lg:space-x-6 transition-all duration-300 ease-in-out ${isMenuOpen ? 'block' : 'hidden'} lg:block`}>
          <Link href="/" className="block px-4 py-2 text-lg text-gray-800 hover:text-yellow-500">Beranda</Link>
          <Link href="/Katalog" className="block px-4 py-2 text-lg text-gray-800 hover:text-yellow-500">Katalog</Link>
          <Link href="/Kontak" className="block px-4 py-2 text-lg text-gray-800 hover:text-yellow-500">Kontak</Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-24 relative h-72 flex flex-col items-center justify-center text-center bg-cover bg-center" style={{ backgroundImage: 'url(/images/hero-katalog.jpg)' }}>
        <div className="bg-black bg-opacity-50 absolute inset-0 z-0" />
        <div className="z-10 px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Katalog Layanan</h1>
          <p className="text-lg md:text-xl text-white mb-6 max-w-2xl mx-auto">
            Temukan layanan terbaik untuk hari pernikahan impian Anda.
          </p>
        </div>
      </section>

      {/* Katalog Layanan */}
      <section id="katalog" className="py-20 px-4 md:px-10">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">Layanan Kami</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-md overflow-hidden hover:scale-[1.03] transition-transform">
                <Image
                  src={product.img}
                  alt={product.title}
                  width={400}
                  height={300}
                  className="w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <Link href="/Kontak" className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-2 rounded-full transition">
                    Hubungi Kami
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 text-center py-6 border-t border-gray-300 text-sm text-gray-600">
        &copy; {new Date().getFullYear()} Ells Wedding Organizer. All rights reserved.
      </footer>
    </main>
  );
}
