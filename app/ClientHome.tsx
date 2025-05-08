'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    {
      name: 'Andi & Sari',
      message: 'Terima kasih telah membuat hari pernikahan kami begitu indah dan berkesan!',
    },
    {
      name: 'Rina & Budi',
      message: 'Pelayanan sangat profesional, dekorasi sangat mewah sesuai impian kami!',
    },
    {
      name: 'Wulan & Dimas',
      message: 'Tim WO sangat ramah dan detail, kami sangat puas!',
    },
    {
      name: 'Sinta & Ilham',
      message: 'Acara kami berjalan lancar dan sangat tertata. Recommended banget!',
    },
  ];

  // Auto-play testimoni
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000); // Ganti setiap 3 detik

    return () => clearInterval(interval); // Cleanup interval
  }, [testimonials.length]);

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
      <section className="pt-24 relative h-screen flex flex-col items-center justify-center text-center bg-cover bg-center" style={{ backgroundImage: 'url(/images/hero-wedding.jpg)' }}>
        <div className="bg-black bg-opacity-50 absolute inset-0 z-0" />
        <div className="z-10 px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Momen Spesial, Kami Wujudkan</h1>
          <p className="text-lg md:text-xl text-white mb-6 max-w-2xl mx-auto">
            Wedding Organizer profesional untuk hari pernikahan yang sempurna dan tak terlupakan.
          </p>
          <Link
            href="/Katalog"
            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-3 rounded-full transition"
          >
            Lihat Katalog Kami
          </Link>
        </div>
      </section>

      {/* Tentang Kami Section */}
      <section id="tentang-kami" className="py-20 px-4 md:px-10 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Tentang Kami</h2>
          <p className="text-lg md:text-xl text-gray-700 mb-6 max-w-3xl mx-auto">
            Kami adalah Wedding Organizer dengan pengalaman yang sudah lebih dari 10 tahun, siap membantu Anda merencanakan hari pernikahan impian dengan penuh perhatian pada setiap detail.
          </p>
          <div className="flex justify-center mt-6">
            <Image
              src="/images/logo.jpg"
              alt="Tentang Kami"
              width={600}
              height={400}
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Layanan Section */}
      <section id="layanan" className="py-20 px-4 md:px-10 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">Layanan Unggulan Kami</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[{ title: 'Dekorasi Pernikahan', img: '/images/k2.jpg' },
              { title: 'Dokumentasi Foto & Video', img: '/images/k8.jpeg' },
              { title: 'MC & Hiburan', img: '/images/k5.jpeg' }]
              .map((layanan, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-md overflow-hidden hover:scale-[1.03] transition-transform">
                  <Image src={layanan.img} alt={layanan.title} width={400} height={300} className="w-full object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{layanan.title}</h3>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Testimoni Section */}
      <section className="py-20 bg-white px-4 md:px-10 border-t border-gray-200">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">Testimoni Klien Kami</h2>
          <div className="relative">
            <div className="flex justify-center items-center">
              <div className="bg-gray-100 p-6 rounded-xl shadow-sm w-full md:w-2/3 mx-auto transition-transform duration-1000 ease-in-out">
                <p className="text-lg italic mb-2">"{testimonials[currentIndex].message}"</p>
                <span className="block font-semibold text-yellow-600">- {testimonials[currentIndex].name}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-yellow-500 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Siap Wujudkan Hari Bahagia Anda?</h2>
        <p className="mb-6 text-lg max-w-xl mx-auto">
          Hubungi kami sekarang untuk konsultasi gratis dan jadwalkan pernikahan impian Anda bersama kami.
        </p>
        <Link
          href="/Kontak"
          className="inline-block bg-white text-yellow-600 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition"
        >
          Hubungi Kami
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 text-center py-6 border-t border-gray-300 text-sm text-gray-600">
        &copy; {new Date().getFullYear()} Ells Wedding Organizer. All rights reserved.
      </footer>
    </main>
  );
}
