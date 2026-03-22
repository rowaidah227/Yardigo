import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Yardigo - Construction Classifieds',
  description: 'Move surplus fast. Construction marketplace for contractors, crews, suppliers.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
