import './global.css';

export const metadata = {
  title: 'Bytebank',
  description: 'Projeto desenvolvido para fins educacionais.',
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
