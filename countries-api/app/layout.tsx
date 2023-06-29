import { getAllCountries } from '@/actions/getAllCountries';
import './globals.css';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'Country Information',
  description: 'Frontend Mentor Challenge: Countries API',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const countries = await getAllCountries();
  return (
    <html lang="en">
      <body className="h-[100dvh]">
        <Navbar countries={countries} />
        {children}
      </body>
    </html>
  );
}
