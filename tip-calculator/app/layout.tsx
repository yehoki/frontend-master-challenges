import './globals.css';

export const metadata = {
  title: 'Tip Calculator',
  description: 'Frontend master challenge - Tip calculator',
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
