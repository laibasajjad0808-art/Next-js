import Link from 'next/link';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'sans-serif', margin: 0, padding: 20 }}>
        <header style={{ borderBottom: '2px solid #ccc', paddingBottom: 10, marginBottom: 20 }}>
          <h2>My Next.js App</h2>
          <nav style={{ display: 'flex', gap: '15px' }}>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/services">Services</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/students">Students</Link>
          </nav>
        </header>

        <main style={{ minHeight: '300px' }}>
          {children}
        </main>

        <footer style={{ borderTop: '2px solid #ccc', paddingTop: 10, marginTop: 20 }}>
          <p>© 2026 My Next.js Project. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}