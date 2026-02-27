import type {Metadata} from 'next';
import { Poppins } from 'next/font/google';
import './globals.css'; // Global styles

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Faria - Modern SaaS Landing Page',
  description: 'A beautiful, rounded, animated landing page template.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${poppins.variable} scroll-smooth`}>
      <body className="font-poppins bg-slate-50 text-slate-900 antialiased overflow-x-hidden selection:bg-indigo-100 selection:text-indigo-900" suppressHydrationWarning>{children}</body>
    </html>
  );
}
