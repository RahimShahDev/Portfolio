import "./globals.css";

export const metadata = {
  title: "Rahim Shah - Frontend Developer",
  description: "Frontend Developer passionate about creating beautiful, responsive, and user-friendly web experiences using React, Next.js, and modern web technologies.",
  keywords: "Frontend Developer, React, Next.js, JavaScript, Web Development, UI/UX",
  authors: [{ name: "Rahim Shah" }],
  creator: "Rahim Shah",
  openGraph: {
    title: "Rahim Shah - Frontend Developer",
    description: "Frontend Developer passionate about creating beautiful, responsive, and user-friendly web experiences.",
    url: "https://rahimshah.dev",
    siteName: "Rahim Shah Portfolio",
    images: [
      {
        url: "https://og-playground.vercel.app/api/og?title=Rahim%20Shah&subtitle=Frontend%20Developer%20%7C%20React%20%26%20Next.js%20Expert&theme=dark&md=1&fontSize=60px",
        width: 1200,
        height: 630,
        alt: "Rahim Shah - Frontend Developer | React & Next.js Expert",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg?v=2" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico?v=2" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png?v=2" />
      </head>
      <body suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}

















