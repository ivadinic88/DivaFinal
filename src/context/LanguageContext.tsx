import React, { useState, createContext, useContext } from 'react';
type Language = 'en' | 'sr';
interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}
const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.products': 'Products',
    'nav.about': 'About Us',
    'nav.contact': 'Contact',
    // Home Page
    'home.natural_beauty': 'Natural Beauty Products',
    'home.hero_title': 'Naturally Beautiful Skin',
    'home.hero_description': 'Discover our collection of natural cosmetics made with pure ingredients that nourish and protect your skin.',
    'home.shop_now': 'Shop Now',
    'home.learn_more': 'Learn More',
    'home.featured_products': 'Featured Products',
    'home.view_all': 'View All',
    // Products Page
    'products.title': 'Our Products',
    'products.description': 'Discover our range of natural cosmetics designed to enhance your natural beauty while taking care of your skin.',
    'products.all_products': 'All Products',
    'products.filters': 'Filters',
    'products.categories': 'Categories',
    'products.add_to_cart': 'Add to Cart',
    'products.no_products': 'No products found in this category.',
    // Common
    'newsletter.title': 'Join Our Newsletter',
    'newsletter.description': 'Subscribe to receive updates, exclusive offers, and beauty tips straight to your inbox.',
    'newsletter.subscribe': 'Subscribe',
    'newsletter.email_placeholder': 'Your email address'
  },
  sr: {
    // Navigation
    'nav.home': 'Početna',
    'nav.products': 'Proizvodi',
    'nav.about': 'O nama',
    'nav.contact': 'Kontakt',
    // Home Page
    'home.natural_beauty': 'Prirodna Kozmetika',
    'home.hero_title': 'Prirodno Lepa Koža',
    'home.hero_description': 'Otkrijte našu kolekciju prirodne kozmetike napravljene od čistih sastojaka koji hrane i štite vašu kožu.',
    'home.shop_now': 'Kupite Odmah',
    'home.learn_more': 'Saznajte Više',
    'home.featured_products': 'Izdvojeni Proizvodi',
    'home.view_all': 'Pogledajte Sve',
    // Products Page
    'products.title': 'Naši Proizvodi',
    'products.description': 'Otkrijte naš asortiman prirodne kozmetike dizajnirane da istakne vašu prirodnu lepotu i neguje vašu kožu.',
    'products.all_products': 'Svi Proizvodi',
    'products.filters': 'Filteri',
    'products.categories': 'Kategorije',
    'products.add_to_cart': 'Dodaj u Korpu',
    'products.no_products': 'Nema proizvoda u ovoj kategoriji.',
    // Common
    'newsletter.title': 'Prijavite se na Newsletter',
    'newsletter.description': 'Pretplatite se da biste dobijali novosti, ekskluzivne ponude i savete za lepotu direktno u vaše poštansko sanduče.',
    'newsletter.subscribe': 'Pretplatite se',
    'newsletter.email_placeholder': 'Vaša email adresa'
  }
};
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);
export const LanguageProvider: React.FC<{
  children: React.ReactNode;
}> = ({
  children
}) => {
  const [language, setLanguage] = useState<Language>('en');
  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)['en']] || key;
  };
  return <LanguageContext.Provider value={{
    language,
    setLanguage,
    t
  }}>
      {children}
    </LanguageContext.Provider>;
};
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};