import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { MenuIcon, XIcon } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {
    language,
    setLanguage,
    t
  } = useLanguage();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return <header className="w-full bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src="/Logo-modified.jpg" alt="Diva Kozmetika Logo" className="h-14" />
        </Link>
        {/* Language Selector */}
        <div className="flex items-center gap-2 md:order-last">
          <button onClick={() => setLanguage('en')} className={`text-2xl transition-opacity ${language === 'en' ? 'opacity-100' : 'opacity-50 hover:opacity-75'}`} title="English">
            🇬🇧
          </button>
          <button onClick={() => setLanguage('sr')} className={`text-2xl transition-opacity ${language === 'sr' ? 'opacity-100' : 'opacity-50 hover:opacity-75'}`} title="Serbian">
            🇷🇸
          </button>
        </div>
        {/* Mobile menu button */}
        <button className="md:hidden focus:outline-none" onClick={toggleMenu}>
          {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink to="/" className={({
          isActive
        }) => isActive ? 'text-[#c19a6b] font-medium' : 'text-gray-700 hover:text-[#c19a6b] transition-colors'}>
            {t('nav.home')}
          </NavLink>
          <NavLink to="/products" className={({
          isActive
        }) => isActive ? 'text-[#c19a6b] font-medium' : 'text-gray-700 hover:text-[#c19a6b] transition-colors'}>
            {t('nav.products')}
          </NavLink>
          <NavLink to="/about" className={({
          isActive
        }) => isActive ? 'text-[#c19a6b] font-medium' : 'text-gray-700 hover:text-[#c19a6b] transition-colors'}>
            {t('nav.about')}
          </NavLink>
          <NavLink to="/contact" className={({
          isActive
        }) => isActive ? 'text-[#c19a6b] font-medium' : 'text-gray-700 hover:text-[#c19a6b] transition-colors'}>
            {t('nav.contact')}
          </NavLink>
        </nav>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && <div className="md:hidden bg-white border-t">
          <nav className="flex flex-col px-4 py-2">
            <NavLink to="/" className={({
          isActive
        }) => isActive ? 'py-3 text-[#c19a6b] font-medium' : 'py-3 text-gray-700 hover:text-[#c19a6b] transition-colors'} onClick={toggleMenu}>
              {t('nav.home')}
            </NavLink>
            <NavLink to="/products" className={({
          isActive
        }) => isActive ? 'py-3 text-[#c19a6b] font-medium' : 'py-3 text-gray-700 hover:text-[#c19a6b] transition-colors'} onClick={toggleMenu}>
              {t('nav.products')}
            </NavLink>
            <NavLink to="/about" className={({
          isActive
        }) => isActive ? 'py-3 text-[#c19a6b] font-medium' : 'py-3 text-gray-700 hover:text-[#c19a6b] transition-colors'} onClick={toggleMenu}>
              {t('nav.about')}
            </NavLink>
            <NavLink to="/contact" className={({
          isActive
        }) => isActive ? 'py-3 text-[#c19a6b] font-medium' : 'py-3 text-gray-700 hover:text-[#c19a6b] transition-colors'} onClick={toggleMenu}>
              {t('nav.contact')}
            </NavLink>
          </nav>
        </div>}
    </header>;
};
export default Navigation;