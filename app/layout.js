import './globals.css';

export const metadata = {
  title: {
    default: 'RYM Grenergy | Intelligent Renewable Energy Solutions',
    template: '%s | RYM Grenergy',
  },
  description:
    'RYM Grenergy builds intelligent renewable energy solutions using AI, IoT, and smart automation to power a sustainable future.',
  keywords: [
    'RYM Grenergy',
    'renewable energy',
    'clean energy',
    'AI energy solutions',
    'IoT energy systems',
    'smart grid',
    'green technology',
  ],
  authors: [{ name: 'RYM Grenergy' }],
  creator: 'RYM Grenergy',
  publisher: 'RYM Grenergy',

  openGraph: {
    title: 'RYM Grenergy',
    description:
      'Intelligent renewable energy solutions powered by AI and IoT.',
    url: 'https://rymgrenergy.com',
    siteName: 'RYM Grenergy',
    images: [
      {
        url: 'https://rymgrenergy.com/images/logo.png',
        width: 1200,
        height: 630,
        alt: 'RYM Grenergy - Renewable Energy Innovation',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'RYM Grenergy',
    description:
      'AI-powered renewable energy solutions for a sustainable tomorrow.',
    images: ['https://rymgrenergy.com/images/logo.png'],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  metadataBase: new URL('https://rymgrenergy.com'),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
