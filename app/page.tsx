'use client';
import { Monitor, Smartphone, Palette, Code } from 'lucide-react';
import Image from 'next/image';

const HomePage = () => {

  return (
    <div className="min-h-screen bg-bg-light">
      <div className="mx-auto">
        {/* Header */}
        <header className="flex justify-between items-center px-4 py-8 bg-gray-300">

        <nav className="flex gap-4">
          <div className="text-sm text-gray-600">
            abderrahmanebennaceur1@gmail.com
          </div>
          </nav>
          <nav className="flex gap-4">
            <a href="https://linkedin.com/in/abderrahmanebennaceur" className="text-sm text-gray-600 hover:text-gray-900">LinkedIn</a>
            <a href="https://github.com/abderrahmanebennaceur" className="text-sm text-gray-600 hover:text-gray-900">GitHub</a>
            <a href="https://www.instagram.com/abderrahmanebennaceur1" className="text-sm text-gray-600 hover:text-gray-900">Instagram</a>
          </nav>
        </header>

        {/* Hero Section */}
        <div className="min-h-screen text-center mb-20 px20 rounded-b-[10vw] bg-gray-300 py-36"> 
          <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-6">
            <Image src="/profile.png" alt="Abderrahmane Bennaceur" className="w-20 h-20 rounded-full" width={200} height={200} />
          </div>
          <h1 className="text-4xl font-bold mb-8">
            Building digital<br />products, brands, and<br />experience.
          </h1>
          <button className="bg-black text-white px-6 py-2 rounded-full">
            Learn More
          </button>
        </div>

        {/* Clients */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center mb-20 opacity-50">
          <div>NABDH ACADEMY</div>
          <div>ASFA</div>
          <div>MihnaHub</div>
          <div>RUTA</div>
          <div>SURADIQ</div>
          <div>TAHAT DIGITAL</div>
        </div>

        {/* Services Section */}
        <div className="text-center mb-20 bg-gray-300 py-20">
          <h2 className="text-2xl font-bold mb-2">
            Collaborate with brands and agencies
          </h2>
          <p className="text-gray-600 mb-12">
            to create impactful results.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="p-6">
              <Monitor className="w-8 h-8 mx-auto mb-4" />
              <h3 className="font-bold mb-2">UX & UI</h3>
              <p className="text-sm text-gray-600">
                Designing experiences that are intuitive, efficient, and enjoyable to use
              </p>
            </div>
            <div className="p-6">
              <Smartphone className="w-8 h-8 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Web & Mobile App</h3>
              <p className="text-sm text-gray-600">
                Building seamless, exceptional web and mobile app experiences
              </p>
            </div>
            <div className="p-6">
              <Palette className="w-8 h-8 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Design & Creative</h3>
              <p className="text-sm text-gray-600">
                Creating unique designs that connect with your audience
              </p>
            </div>
            <div className="p-6">
              <Code className="w-8 h-8 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Development</h3>
              <p className="text-sm text-gray-600">
                Bringing your vision to life with the latest technology and design trends
              </p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold mb-8">
            Tell me about your next<br />project
          </h2>
          <div className="flex gap-4 justify-center">
            <a
              href="https://t.me/abderrahmanebennaceur"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 text-white px-6 py-2 rounded-full"
            >
            Contact via Telegram
            </a>
            <a
              href="https://wa.me/213662370162  "
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-6 py-2 rounded-full"
            >
            Contact via WhatsApp
            </a>
          </div>
        </div>
        {/* Footer */}
        <footer className="flex justify-between items-center text-sm text-gray-600 px-4 py-8">
          <div>© {new Date().getFullYear()} All rights reserved.</div>
            <nav className="flex gap-4">
            <a href="https://linkedin.com/in/abderrahmanebennaceur" target='_blank' className="hover:text-gray-900">LinkedIn</a>
            <a href="https://github.com/abderrahmanebennaceur" target='_blank' className="hover:text-gray-900">GitHub</a>
            <a href="https://www.instagram.com/abderrahmanebennaceur1" target='_blank' className="hover:text-gray-900">Instagram</a>
          </nav>
        </footer>
      </div>
    </div>
  );
};

export default HomePage;