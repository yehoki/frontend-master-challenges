import './globals.css';

export const metadata = {
  title: 'Launch countdown',
  description: 'Frontend mentor: Launch countdown challenge',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="">{children}</body>
    </html>
  );
}
