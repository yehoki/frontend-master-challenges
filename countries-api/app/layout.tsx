import './globals.css';

export const metadata = {
  title: 'Country Information',
  description: 'Frontend Mentor Challenge: Countries API',
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
