import './globals.css';

export const metadata = {
  title: 'RYM Grenergy',
  description: 'Renewable Energy Solutions for a Sustainable Future',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
