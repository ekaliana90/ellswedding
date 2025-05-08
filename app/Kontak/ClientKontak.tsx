'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function KontakPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

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
      <section className="pt-24 relative h-72 flex flex-col items-center justify-center text-center bg-cover bg-center" style={{ backgroundImage: 'url(/images/hero-kontak.jpg)' }}>
        <div className="bg-black bg-opacity-50 absolute inset-0 z-0" />
        <div className="z-10 px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Hubungi Kami</h1>
          <p className="text-lg md:text-xl text-white mb-6 max-w-2xl mx-auto">
            Jika Anda memiliki pertanyaan atau ingin berdiskusi lebih lanjut, kami siap membantu!
          </p>
        </div>
      </section>

      {/* Kontak Form Section */}
      <section className="py-20 px-4 md:px-10 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">Formulir Kontak</h2>
          <form className="bg-white p-8 rounded-xl shadow-md space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-lg font-semibold text-gray-700 mb-2">Nama Lengkap</label>
                <input type="text" id="name" name="name" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="Masukkan nama Anda" required />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg font-semibold text-gray-700 mb-2">Email</label>
                <input type="email" id="email" name="email" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="Masukkan email Anda" required />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-lg font-semibold text-gray-700 mb-2">Pesan</label>
              <textarea id="message" name="message" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="Tuliskan pesan Anda" required></textarea>
            </div>

            <button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 rounded-full transition">
              Kirim Pesan
            </button>
          </form>
        </div>
      </section>

      {/* Lokasi Section */}
      <section className="py-20 px-4 md:px-10">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">Lokasi Kami</h2>
          <div className="relative mb-10">
            <div className="h-96 w-full bg-gray-300 rounded-xl">
              {/* Embed Google Map */}
              <iframe
                className="w-full h-full rounded-xl"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.9348395296447!2d106.7190075!3d-6.3790139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69cb34bdf7285b%3A0x79ca6fa9917e0435!2sJl.%20Sekolah%20Dini%20No.28%20Bandung!5e0!3m2!1sen!2sid!4v1683037411558!5m2!1sen!2sid"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <p className="text-lg text-gray-700 mt-4">Alamat: Jl. Sekolah Dini, No.28, Bandung</p>
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
